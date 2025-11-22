---
title: "Causal Planning Without Language Models"
date: "2024-11-22"
author: "Project LOGOS Team"
series: "Non-Linguistic Cognitive Architectures"
seriesOrder: 3
description: "Exploring backward chaining, hybrid causal graphs, and formal validation as alternatives to probabilistic LLM-based planning for autonomous agents."
tags: ["Planning", "Causal Graphs", "SHACL", "Robotics", "Neo4j"]
---

# Causal Planning Without Language Models

Can autonomous agents plan effectively without Large Language Models (LLMs)?

In the current AI landscape, "planning" is often treated as a *linguistic* task - synonymous with "prompt engineering." We feed a Large Language Model (LLM) a goal like "clean the kitchen," and it probabilistically generates a sequence of text that *looks* like a plan. It might say "1. Wash dishes, 2. Dry dishes." This works for simple, common-sense tasks because the model has seen millions of examples of kitchen cleaning in its training data.

However, this approach has fundamental, dangerous flaws when applied to **embodied agents** or critical systems. The LLM is a probabilistic engine; it predicts the next most likely token, not the next necessary physical action. It lacks a grounded **world model**. It doesn't *know* that picking up a hot pan requires a mitt because of thermodynamics; it just knows that the words "pick up," "hot pan," and "mitt" frequently co-occur in text. Consequently, it is prone to **hallucination** - confidently proposing physically impossible actions - and lacks **causal consistency**.

Project LOGOS explores a fundamentally different approach. Our core hypothesis is that language should be the interface, not the engine of thought. We propose that **graph traversal on a Hybrid Causal Graph (HCG)** can provide reliable, explainable, and deterministic planning that complements - rather than competes with - LLMs. By treating planning as a search problem over explicit causal relationships, we aim to achieve a level of reliability that probabilistic models simply cannot guarantee.

In this post, we'll explore the mathematics of causal planning, the structure of our HCG, and walk through a real-world pick-and-place scenario.

## The Hybrid Causal Graph (HCG)

At the heart of LOGOS is the **Hybrid Causal Graph** (HCG). We call it "Hybrid" because it bridges two *historically separate* branches of AI:

1. **Symbolic AI (Neo4j):** The world of strict logic, rules, and explicit relationships. This is where we define that a "Cup" is a type of "Container."
2. **Semantic AI (Milvus):** The world of vector embeddings and fuzzy meaning. This is where we understand that a "Mug" is semantically similar to a "Cup."

For the purpose of *planning*, we rely heavily on the Symbolic layer. This layer is structured by a rigid **Ontology** - a set of rules defining what exists in our universe.

Formally, let our graph be $G = (V, E)$, where the set of vertices $V$ is partitioned into three core types:

$$V = V_{Entity} \cup V_{State} \cup V_{Process}$$

* **Entities ($V_{Entity}$):** The nouns of our world. Robots, blocks, bins, locations. These are persistent objects.
* **States ($V_{State}$):** Snapshots of an entity at a specific moment in time. `RedBlockAtLocationX`, `GripperClosed`, `RobotIdle`. States are transient; they change as the world evolves.
* **Processes ($V_{Process}$):** The verbs. Actions that transform the world from one state to another. `Grasp`, `Move`, `Release`.

The edges $E$ represent specific causal and temporal relationships that bind these nodes together. The two most critical for planning are:

1. **CAUSES ($P \to S$):** A Process $p$ *causes* a State $s$ to become true. This is the "Effect" of an action.
   $$Causes(p, s) \iff (p, s) \in E \land \text{type}(p, s) = \text{CAUSES}$$

2. **REQUIRES ($P \to S$):** A Process $p$ *requires* a State $s$ to be true *before* it can execute. This is a "Precondition."
   $$Requires(p, s) \iff (p, s) \in E \land \text{type}(p, s) = \text{REQUIRES}$$

This structure allows us to model the world not as a sequence of tokens or a probability distribution, but as a dense, navigable web of cause and effect.

### Example: The Pick-and-Place Ontology

In our robotics domain, we define specific concepts that inherit from these base types. For example, a `GraspAction` is a type of `Process`, and a `GraspedState` is a type of `State`.

```cypher
// **Cypher** query - A Process that requires a state and causes another
MATCH (p:Process {name: 'GraspRedBlock'})
MATCH (pre:State {name: 'GripperOpenState'})
MATCH (post:State {name: 'RedBlockGraspedState'})
MERGE (p)-[:REQUIRES]->(pre)
MERGE (p)-[:CAUSES]->(post)
```

## The Planning Algorithm: Backward Chaining

**Sophia**, the cognitive core of LOGOS, uses a classic AI technique called **backward chaining** to generate plans.

Most humans think in "forward chaining" mode: "I am here, what can I do next?" But for goal-oriented planning, it is often more efficient to think backwards: "I want to be *there*. What step happens right before I arrive?"

Instead of guessing a sequence of actions (like an LLM might), Sophia starts from the ultimate **Goal State** and works backward to the **Current State**.

### The Math of Backward Chaining

Let $S_{current}$ be the set of states currently true in the world (our "Grounded Reality").
Let $s_{goal}$ be the target state we wish to achieve.

The planning function $\text{Plan}(s_{goal})$ is a recursive search algorithm:

1. Base Case: If $s_{goal} \in S_{current}$, we are done! The plan to achieve what you already have is an empty list.
2. Recursive Step:
   * Find the Cause: Search the graph for a process $p$ such that $Causes(p, s_{goal})$. "What action produces this result?"
   * Identify Preconditions: Look at all edges pointing *into* $p$ with the `REQUIRES` relationship. Let this set be $S_{pre} = \{s \mid Requires(p, s)\}$. "What must be true for me to take this action?"
   * Solve for Preconditions: For each required state $s_{req} \in S_{pre}$, we now have a new sub-goal. We recursively call $\text{Plan}(s_{req})$.
   * Assemble: The resulting plan is the sequence of all sub-plans needed for the preconditions, followed finally by the action $p$ itself.

$$
\text{Plan}(s_{goal}) = \left( \bigcup_{s \in S_{pre}} \text{Plan}(s) \right) \oplus [p]
$$

where $\oplus$ denotes sequence concatenation. This ensures that prerequisites are always met before the action that needs them.

### Implementation in Sophia

In `sophia/planner/planner.py`, this logic is implemented as a graph traversal. The planner queries the HCG to find the `achieves` (or `CAUSES`) relationship and then traces the `enables` (or `REQUIRES`) dependencies.

```python
def plan(self, goal):
    target_state = goal.get("target_state")
    # Find action that achieves the goal
    action = self.find_action_causing(target_state)
    
    # Recursively solve for prerequisites
    prerequisites = self.get_requirements(action)
    sub_plans = []
    for req in prerequisites:
        sub_plans.extend(self.plan({"target_state": req}))
        
    return sub_plans + [action]
```

## Case Study: The Pick-and-Place Scenario

Let's apply this to a standard **pick-and-place** robotics task: "Put the red block in the bin."

Goal State: `RedBlockInBinState`

Step 1: Find the Cause
Sophia queries the graph: "What process has a `CAUSES` edge pointing to `RedBlockInBinState`?"
The graph returns: `ReleaseRedBlock` (Process).
*Reasoning:* The only way the block ends up in the bin is if I release it while over the bin.

Step 2: Analyze Preconditions of `ReleaseRedBlock`
Sophia queries: "What does `ReleaseRedBlock` have `REQUIRES` edges to?"
The graph returns:
1. `ArmPlaceState` (The arm *must* be physically located at the bin's coordinates).
2. `GripperClosedState` (The gripper *must* be holding the block).

*Reasoning:* You can't release the block into the bin if you aren't *at* the bin, and you can't release it if you aren't *holding* it.

Step 3: Recurse on Preconditions

* Sub-goal A: Achieve `ArmPlaceState`
  * Cause: `MoveToPlacePosition`
  * Requires: `RedBlockGraspedState` (Implicitly, to move it, we assume we have it, or simply that the arm is free to move).
* Sub-goal B: Achieve `GripperClosedState`
  * Cause: `GraspRedBlock`
  * Requires: `ArmPreGraspState` (Must be near the block), `GripperOpenState` (Must be open to grasp).

Step 4: Unroll to Initial State
Eventually, the recursion hits states like `ArmHomeState` or `GripperOpenState` which match our $S_{current}$ (the robot's actual current sensor readings). The recursion bottoms out.

Final Plan Sequence:
1. `MoveToPreGraspPosition` (Satisfies `ArmPreGraspState`)
2. `GraspRedBlock` (Satisfies `GripperClosedState` and `RedBlockGraspedState`)
3. `MoveToPlacePosition` (Satisfies `ArmPlaceState`)
4. `ReleaseRedBlock` (Achieves `RedBlockInBinState`)

This sequence is guaranteed to be causally valid *within the context of our model* because it was derived directly from the causal laws encoded in our ontology. It didn't "emerge" from a statistical model; it was deduced.

## Formal Validation with SHACL

One of the biggest advantages of this approach over LLMs is the ability to formally validate the plan *before execution*. In software engineering, we use type systems to prevent bugs. In cognitive architecture, we use **SHACL** (Shapes Constraint Language).

SHACL allows us to define "Shapes" - strict constraints on the data structure of our graph. It acts as the "immune system" of the agent's mind, rejecting invalid thoughts or plans.

For example, we can define a shape that ensures every Process must have at least one causal outcome. A process that does nothing is a logical error.

```turtle
logos:ProcessShape
    a sh:NodeShape ;
    sh:targetClass logos:Process ;
    sh:property [
        sh:path logos:CAUSES ;
        sh:class logos:State ;
        sh:minCount 1 ;
        rdfs:label "Must cause a state" ;
    ] .
```

We can also enforce domain-specific physics constraints. For instance, "A `GraspAction` requires a `Gripper` entity." If the planner tries to use a `Camera` to `Grasp` a block, SHACL validation will fail immediately.

If the planner (or a human, or an LLM) proposes a node that violates these shapes, the validation layer rejects it. We hypothesize that this mechanism effectively mitigates the "hallucination" problem where an agent tries to perform an impossible action, like walking through a wall or picking up an object that doesn't exist.

## Beyond Symbols: The Role of Simulation and Imagination

The planning process described above - traversing nodes, checking preconditions, and validating shapes - operates entirely within the realm of **Abstract Logic**. We have successfully determined that *conceptually*, moving the arm and releasing the gripper *will* achieve the goal.

However, the real world is not made of symbols; it is made of atoms, friction, and gravity. A plan can be logically valid but physically impossible.

For example, the graph might say:
* `Move(Arm, LocationA)` is valid if `PathExists(Arm, LocationA)`.

But in reality:
* Is the path blocked by an obstacle the graph doesn't know about?
* Is the object too heavy for the gripper's motor torque?
* Will the object slip if the arm moves *too fast*?

### The Gap Between Logic and Physics

Logic is discrete; physics is continuous. To bridge this gap, LOGOS employs a concept we call **Imagination**.

Before executing any plan in the real world, Sophia "imagines" it. She instantiates the plan in a **Causal World Model** (**CWM**). In Phase 1, this is a high-fidelity physics simulation (via `talos`). In Phase 2, this will be a learned neural world model (**JEPA**).

### The **Imagination Loop**

1. Generate Abstract Plan: The backward chainer produces a sequence: `Move` -> `Grasp` -> `Move`.
2. Simulate (Imagine): Sophia runs this sequence in the simulator.
3. Observe Outcomes:
   * Did the gripper collide with the table?
   * Did the block fall?
   * Did the motors overheat?
4. Refine or Reject:
   * If the simulation succeeds, the plan is promoted to execution.
   * If it fails, the planner receives a specific error signal (e.g., `CollisionDetected`). It then backtracks and attempts to find a different logical path (e.g., "Move higher before moving sideways").

This "Imagination Loop" allows the agent to fail *safely* in its mind *before* failing dangerously in the real world. It is the crucial link that turns abstract logic into grounded physical understanding.

## Why Not Just Use LLMs?

LLMs are fantastic at **intent recognition** and **natural language generation**. They excel at the "fuzzy" parts of interaction. They understand that "I want the red block gone," "Trash the red block," and "Put the red block in the bin" all map to the same Goal State: `RedBlockInBinState`.

However, they are poor at **state tracking** and **causal consistency**.
* State Tracking: LLMs have a limited context window and no persistent memory of the world state. They often forget that a door was closed three turns ago.
* Probabilistic Failure: If an LLM has a 99% chance of predicting the correct next step, the probability of a correct 50-step plan is $0.99^{50} \approx 60\%$. As plans get longer, failure becomes statistically inevitable.

**The LOGOS Hybrid Approach:**
We use the right tool for the job.
1. User: "Put the red block in the bin."
2. LLM (**Hermes**): Translates intent to Goal State: `RedBlockInBinState`. It acts as the translator from Human to Graph.
3. Planner (**Sophia**): Generates the causal plan: `Move` -> `Grasp` -> `Move` -> `Release`. It acts as the logic engine.
4. Executor (**Talos**): Executes the validated plan.

By decoupling the *what* (Language) from the *how* (Causal Graph), we get the best of both worlds: the fluency and flexibility of natural language interfaces with the reliability and safety of formal planning.

## Conclusion

We argue that causal planning without language models *isn't just a fallback*; it may be a necessity for robust autonomous agents. By grounding our agents in a Hybrid Causal Graph, we aim to ensure that every action is purposeful, every plan is valid, and every decision is explainable.

In the next post, we'll look at how we built this entire architecture - from concept to code.

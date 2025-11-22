---
title: "AI as Search: From Symbolic Trees to Neural Networks to Language Models"
date: "2024-11-20"
author: "Project LOGOS"
series: "Non-Linguistic Cognitive Architectures"
seriesOrder: 1
description: "Examining the history of AI through the lens of search strategies, from symbolic tree search to neural weight optimization to language model token generation."
tags: ["AI History", "Search Algorithms", "Neural Networks", "Language Models"]
---

# AI as Search: From Symbolic Trees to Neural Networks to Language Models

*This is the first post in a series exploring non-linguistic cognitive architectures. In this post, we examine the history
 of AI through the lens of search strategies, from symbolic tree search to neural weight optimization to language model token generation. The second post introduces Project LOGOS, a graph-based cognitive architecture that reasons causally rather than linguistically.*

---

At its core, artificial intelligence is about searching state spaces, exploring possible configurations to find solutions, 
make decisions, or generate outputs. Whether a chess program evaluating millions of positions per second or a language model predicting the next word in a sentence, every AI system navigates through a space of possibilities seeking optimal outcomes.

This historical survey traces how different AI paradigms approached this fundamental challenge, from early symbolic AI's explicit tree searches through neural networks' weight space optimization to large language models' probability distributions over token sequences. Understanding AI's history as evolving search strategies illuminates both the power and limitations of current approaches and points toward why structured causal graphs might offer an alternative path for machine cognition.

The key insight is this: the space you search determines what you can find. Symbolic logic can prove theorems but struggles with noisy perception. Neural networks excel at pattern recognition but can't explain their reasoning. Language models achieve remarkable fluency but can't guarantee causal correctness. Each paradigm's capabilities and limitations flow directly from the structure of its search space.

---

## The Central Insight: AI as Search

When Deep Blue defeated Garry Kasparov in 1997, it evaluated 200 million chess positions per second, searching a vast tree of possible moves to find the best path to victory. When ChatGPT writes an essay, it searches through probability distributions over trillions of possible token sequences to generate coherent text. Both are intelligent systems. Both solve problems by searching. But they search fundamentally different spaces, and that difference determines what they can and cannot do.

### State Spaces and Search

A state space is the set of all possible configurations of a system. In chess, each state is a board configuration; the state space contains approximately 10^43 legal positions. In robot navigation, each state might describe the robot's position, orientation, and the locations of obstacles. In image generation, each state could be a complete image with specific pixel values. The state space defines the universe of possibilities the AI must navigate.

A search is the process of exploring this space, moving from one state to another according to transition rules, to find states that satisfy goal conditions or optimize some objective function. The chess program searches for board positions leading to checkmate. The navigation system searches for collision-free paths to the destination. The image generator searches for pixel configurations matching a text description.

We can formalize a search problem as a tuple ⟨S, s₀, A, T, G⟩ where S is the set of all states, s₀ ∈ S is the initial state, A is the set of actions, T: S × A → S is the state transition function, and G ⊆ S is the set of goal states. This mathematical notation provides precision, but the intuition is simple: you start somewhere (s₀), you have actions available (A), those actions change your state (T), and you're trying to reach a goal (G).

Intelligence emerges from effective search strategies. The history of AI is the history of discovering new state spaces to search and developing better algorithms to explore them. Each paradigm shift in AI (symbolic to neural, neural to linguistic) fundamentally changed what we search and how we search it.

---

## The Symbolic Era: Searching Decision Trees (1950s-1980s)

### Early Foundations

The pioneers of AI approached intelligence as symbolic manipulation and logical inference. Allen Newell and Herbert Simon's **General Problem Solver** (1957) embodied this philosophy: problems are represented as states in a logical space, and intelligence is the process of navigating from initial state to goal state through **means-ends analysis**.

Their key insight was that many problems share common search structures. Whether proving mathematical theorems or solving the Tower of Hanoi puzzle, the underlying pattern is:

1. Represent current state symbolically
2. Identify difference between current and goal state
3. Select operators to reduce that difference
4. Recursively apply until goal reached

John McCarthy's **Lisp** (1958) provided the computational substrate for this vision. S-expressions naturally represented 
trees and graphs, enabling AI systems to manipulate symbolic structures as first-class objects. Logic programming languages like Prolog extended this, treating computation itself as theorem proving, a search through logical deductions.

### Search Algorithms: From Brute Force to Heuristics

Early chess programs demonstrated both the promise and peril of exhaustive search. Given a branching factor b (average moves per position) and search depth d, the number of nodes explored grows as O(b^d). For chess, b ≈ 35, making deep search intractable.

The breakthrough came with heuristic search algorithms that use domain knowledge to guide exploration toward promising areas of the state space. Rather than blindly trying every possibility, these algorithms incorporate estimates of how close each state is to the goal.

The **A* algorithm** (Hart, Nilsson, Raphael, 1968) remains one of AI's most elegant results. Its key idea is beautifully simple: at each step, expand the node that appears most promising based on both how far you've come and how far you estimate you have left to go.

More precisely, A* uses three values for each node n in the search tree:
- g(n) = actual cost from start to node n (known exactly from the path taken)
- h(n) = estimated cost from n to goal (the **heuristic**, a guess based on domain knowledge)
- f(n) = g(n) + h(n) = estimated total cost of the path through n

A* maintains a priority queue of nodes ordered by f(n), always expanding the node with the lowest estimated total cost. The remarkable property: if h(n) is **admissible** (meaning it never overestimates the true cost to reach the goal), A* is guaranteed to find the optimal path while exploring far fewer nodes than brute-force search. In GPS navigation with straight-line distance as the heuristic, A* might explore thousands of intersections instead of millions.

Minimax and alpha-beta pruning brought game-theoretic rigor to adversarial search. In a two-player zero-sum game, minimax computes:

$$
V(n) = \begin{cases}
  \max_{a \in A(n)} \min_{n' \in \text{children}(n,a)} V(n') \quad \text{if MAX's turn} \\
  \min_{a \in A(n)} \max_{n' \in \text{children}(n,a)} V(n') \quad \text{if MIN's turn}
\end{cases}
$$

Alpha-beta pruning reduces the branching factor from $b$ to approximately $\sqrt{b}$ by eliminating subtrees guaranteed to be worse than already-explored alternatives.

### STRIPS and Classical Planning

The **Stanford Research Institute Problem Solver** (**STRIPS**, 1971) formalized planning as search through state space where:
- States are conjunctions of predicates
- Actions have preconditions (must be true to apply) and effects (predicates added/deleted)
- Goal is a partial state specification

For example, moving a block:
```
Move(x, y, z):
  Preconditions: On(x,y) ∧ Clear(x) ∧ Clear(z)
  Effects: On(x,z) ∧ Clear(y) ∧ ¬On(x,y) ∧ ¬Clear(z)
```

Planning becomes search for action sequences transforming initial state to goal state. Modern planners use sophisticated heuristics (e.g., planning graphs, relaxed plans) to guide search through potentially astronomical state spaces.

### The Limitations

Despite elegant formalisms, symbolic AI struggled with:

1. Brittleness: Real-world problems rarely fit clean logical descriptions. A chess program handles chess perfectly but can't play checkers without complete reprogramming.

2. Commonsense reasoning: How do you encode "water makes things wet" or "people don't like being interrupted" in first-order logic? The **frame problem** asks: how do you specify everything that *doesn't* change when an action executes?

3. Perception: Symbolic systems assume clean, symbolic inputs. But vision and language involve noisy, high-dimensional sensory data that doesn't map cleanly to predicates.

4. Scalability: Combinatorial explosion limited symbolic systems to toy domains. Real environments have too many objects, properties, and possibilities for exhaustive enumeration.

These limitations motivated the shift toward neural networks, systems that could learn patterns from data rather than requiring hand-coded rules.

---

## The Neural Era: Searching Weight Space (1980s-2010s)

### The Paradigm Shift

Neural networks reformulated AI as **optimization in weight space**. Instead of searching through symbolic states (board positions, logical predicates), neural networks search through the space of possible synaptic weights to find parameters that minimize prediction error.

This represents a profound change in what we search:
- Symbolic AI: Search through state space to find action sequences reaching goals
- Neural networks: Search through parameter space to find weights minimizing loss functions

A feedforward neural network with L layers computes:

$$h^{(l)} = \\sigma(W^{(l)} h^{(l-1)} + b^{(l)})$$

where $h^{(l)}$ is the activation at layer $l$, $W^{(l)}$ and $b^{(l)}$ are weights and biases, and $\sigma$ is an activation function. The network's behavior is entirely determined by these weights.

Training is the process of searching weight space to minimize a loss function $\mathcal{L}(\theta; D)$ measuring prediction error on dataset $D$. Gradient descent performs this search:

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta \mathcal{L}(\theta_t; D)
$$

The gradient $\nabla_\theta \mathcal{L}$ points in the direction of steepest increase in loss; moving opposite to this (down the gradient) reduces error. **Backpropagation** (Rumelhart, Hinton, Williams, 1986) efficiently computes these gradients by propagating errors backward through the network.

### What Neural Networks Search

The weight space of a neural network is *vast*. A model with 1 billion parameters has $10^9$ continuous dimensions. Finding good weights requires navigating this high-dimensional landscape to locate regions where loss is low.

Key properties of this search:

1. **Non-convex optimization**: The loss landscape has many local minima, saddle points, and plateaus. Finding the global minimum is generally intractable.

2. Generalization: We don't just want low training loss; we want weights that generalize to unseen data. This requires implicit regularization (dropout, weight decay, early stopping) or architectural inductive biases (convolutions for images, attention for sequences).

3. Representation learning: Hidden layers learn hierarchical representations. Early layers detect edges and textures; deeper layers compose these into objects and scenes. The network discovers useful features automatically rather than requiring hand-engineered symbolic descriptions.

### Convolutional Networks and Vision

Convolutional Neural Networks (CNNs) demonstrated that architectural structure could encode domain knowledge as inductive bias. Convolutions implement **translation equivariance**: detecting a cat's ear at one image location uses the same weights as detecting it elsewhere. Pooling provides **local translation invariance**: small shifts don't change high-level representations.

AlexNet's ImageNet victory (Krizhevsky, Sutskever, Hinton, 2012) marked neural networks' ascendance. With 60 million weights trained on 1.2 million labeled images, it achieved 15.3% top-5 error, dramatically better than previous methods. The key ingredients:

- Depth: 8 layers enabling hierarchical feature learning
- **ReLU activations**: $\\sigma(x) = \\max(0, x)$ avoiding vanishing gradients
- **Dropout**: Random deactivation during training regularizing the model
- **Data augmentation**: Synthetic variations increasing effective dataset size
- **GPU acceleration**: Parallel computation making training feasible

Subsequent architectures (VGGNet, ResNet, EfficientNet) pushed deeper, introducing **residual connections** to train networks with hundreds of layers.

### Recurrent Networks and Sequences

**Recurrent Neural Networks** (**RNNs**) extended neural networks to sequential data by maintaining **hidden state** updated at each timestep:

$$h_t = \sigma(W_{hh} h_{t-1} + W_{xh} x_t + b)$$

This allows the network to maintain context across sequences. However, **vanishing gradients** made learning long-range dependencies difficult: gradients exponentially decay over many timesteps.

**Long Short-Term Memory** (**LSTM**) networks (Hochreiter & Schmidhuber, 1997) solved this with gating mechanisms controlling information flow:

$$
\begin{aligned}
f_t &= \sigma(W_f [h_{t-1}, x_t] + b_f) \quad \text{(forget gate)} \\
i_t &= \sigma(W_i [h_{t-1}, x_t] + b_i) \quad \text{(input gate)} \\
\tilde{C}_t &= \tanh(W_C [h_{t-1}, x_t] + b_C) \quad \text{(candidate cell state)} \\
C_t &= f_t \odot C_{t-1} + i_t \odot \tilde{C}_t \quad \text{(update cell state)} \\
o_t &= \sigma(W_o [h_{t-1}, x_t] + b_o) \quad \text{(output gate)} \\
h_t &= o_t \odot \tanh(C_t)
\end{aligned}
$$

These gates enable gradients to flow across hundreds of timesteps, enabling learning of long-range dependencies in language, music, and video.

### The Limitations

Despite remarkable pattern recognition capabilities, neural networks faced persistent challenges:

1. Data hunger: Supervised learning requires massive labeled datasets. AlexNet needed 1.2 million labeled images; GPT-3 trained on 45TB of text.

2. Brittleness to distribution shift: Models trained on one data distribution fail when test data differs. Adversarial examples, imperceptible perturbations fooling classifiers, revealed fragility.

3. Lack of interpretability: A trained CNN has millions of weights encoding features across distributed representations. We can visualize learned filters but can't extract symbolic rules or causal explanations.

4. Difficulty with compositional generalization: Neural networks struggle with systematic compositional structure. A model learning "red square" and "blue circle" doesn't automatically understand "blue square."

5. Sample inefficiency: Humans learn concepts from few examples; neural networks need thousands or millions.

These limitations motivated research into:
- Few-shot learning: Meta-learning to generalize from minimal examples
- Disentangled representations: Factoring latent spaces into interpretable dimensions
- Neural-symbolic integration: Combining neural perception with symbolic reasoning

But the dominant direction was scale: larger models, more data, more compute.

---

## The Linguistic Era: Searching Token Space (2010s-Present)

### The Transformer Revolution

The **Transformer** architecture (Vaswani et al., 2017) revolutionized sequence modeling by replacing recurrence with **attention mechanisms**:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V$$

**Query** ($Q$), **key** ($K$), and **value** ($V$) matrices enable the model to compute relevance between all positions simultaneously. **Multi-head attention** learns multiple attention patterns in parallel. **Self-attention** allows each token to attend to every other token, capturing long-range dependencies without recurrent computation.

Combined with **positional encodings** (sinusoidal functions encoding token positions) and **feed-forward layers**, Transformers achieved state-of-the-art results on machine translation, outperforming LSTMs while being much more parallelizable for training.

### Language Models as Searchers

A language model learns the probability distribution over token sequences:

$$P(x_1, x_2, \ldots, x_T) = \prod_{t=1}^T P(x_t | x_1, \ldots, x_{t-1})$$

Autoregressive generation samples from this distribution sequentially:

$$x_t \sim P(\cdot | x_1, \ldots, x_{t-1})$$

This is a search through the space of possible token sequences. With vocabulary size $V$ and sequence length $T$, the space has $V^T$ possible sequences, astronomically large even for short texts.

Sampling strategies navigate this space:

1. **Greedy decoding**: Always pick highest-probability token. Fast but repetitive and deterministic.

2. **Beam search**: Maintain top-$k$ partial sequences, expanding each with most likely continuations. Balances exploration and exploitation.

3. **Temperature sampling**: Sample from $P(x_t | \mathbf{x}_{<t})^{1/\tau}$. Higher temperature ($\tau > 1$) increases randomness; lower temperature makes distribution more peaked.

4. **Nucleus sampling (top-p)**: Sample from the smallest set of tokens whose cumulative probability exceeds $p$. Dynamically adjusts the sampling pool based on context.

### The Scale Revolution

Language model capabilities emerged dramatically with scale:

- GPT (117M parameters): Coherent paragraphs, basic reasoning
- GPT-2 (1.5B parameters): Long-form generation, simple question-answering
- GPT-3 (175B parameters): Few-shot learning, code generation, complex reasoning
- GPT-4 (rumored ~1.7T parameters): Multimodal understanding, advanced reasoning

The **scaling hypothesis** posits that model capabilities improve predictably with compute, data, and parameters. Empirical scaling laws (Kaplan et al., 2020) show power-law relationships:

$$\mathcal{L}(N) \propto N^{-\alpha}$$

where $\mathcal{L}$ is loss, $N$ is model size, and $\alpha \approx 0.076$ for Transformers. Doubling model size yields consistent loss reduction, and often qualitative capability gains.

### Emergent Capabilities

Large language models exhibit capabilities absent in smaller models:

1. In-context learning: GPT-3 can perform tasks from natural language descriptions plus few examples, without parameter updates. The model learns the task dynamically during inference.

2. Chain-of-thought reasoning: Prompting models to generate intermediate reasoning steps dramatically improves performance on complex tasks. Explicitly articulating reasoning in tokens helps navigate the search.

3. Instruction following: Fine-tuning on human instructions (InstructGPT, ChatGPT) produces models that follow user intent, refuse harmful requests, and admit uncertainty.

4. Code generation: Trained on GitHub and StackOverflow, models like Codex can translate natural language specifications to working code in multiple programming languages.

5. Multimodal understanding: CLIP and GPT-4 integrate vision and language, grounding linguistic representations in perceptual data.

### What Language Models Search

Token generation is local search in the space of possible continuations. At each step, the model:

1. Encodes the context $x_1, \ldots, x_{t-1}$ into hidden representations via self-attention
2. Computes probability distribution over next tokens: $P(x_t | x_1, \ldots, x_{t-1})$
3. Samples the next token according to this distribution
4. Appends it to the context and repeats

Crucially, the model searches linguistically through token sequences, not through world models or causal graphs. Every concept, relationship, and constraint must be expressible as patterns in text.

This has profound implications:

- Strength: Language is a remarkably expressive medium. Almost any human knowledge can be articulated in text. Training on internet-scale corpora exposes models to vast conceptual diversity.

- - Weakness: Language is a lossy compression of thought. Spatial relationships, causal mechanisms, and logical constraints 
often require many tokens to specify precisely, or may be ambiguous/underspecified in natural language.

### The Fundamental Limitations

Despite their impressive capabilities, language models face inherent constraints:

1. Correlation vs. Causation: LLMs learn $P(\text{text})$, which captures correlations in language use. But correlation is not causation. The model learns that "above" often follows "move gripper" without understanding spatial geometry or causal consequences.

2. Hallucinations: Sampling from $P(x_t | \mathbf{x}_{<t})$ prioritizes linguistic fluency, not factual accuracy or logical consistency. The model generates plausible-sounding text even when wrong.

3. No world model: The model has no explicit representation of space, physics, causality, or constraints. All "understanding" is implicit in weights learned from text.

4. Token-by-token generation: The model commits to tokens sequentially without backtracking or global optimization. Once generated, tokens cannot be revised based on downstream consequences.

5. Context limitations: Even with 32k-token contexts, models struggle with tasks requiring long-term planning, multi-step verification, or maintaining global consistency.

6. Ungrounded semantics: The model manipulates symbols (tokens) without perceptual grounding. It can describe what a "red cube" is but has never seen one.

These aren't bugs to be fixed with more data or compute. They're structural limitations of searching token space rather than more structured representations.

---

## Implications: The Space You Search Determines What You Find

Each AI paradigm searches a different space:

| Paradigm | Search Space | Strengths | Limitations |
|--------------|------------------|---------------|-----------------|
| Symbolic AI | Decision trees of symbolic states | Logical rigor, interpretability, formal guarantees | Brittleness, poor with noise, manual engineering |
| Neural Networks | High-dimensional weight space | Pattern recognition, robustness to noise, learn from data | Data hunger, uninterpretable, distribution shift |
| Language Models | Probability distributions over token sequences | Linguistic fluency, broad knowledge, few-shot learning | Hallucinations, no world model, correlation not causation |

The space determines:

- What you can represent: Symbolic systems need explicit predicates. Neural networks learn implicit features. Language models encode knowledge as token statistics.

- What you can compute: Symbolic planners find action sequences. Neural networks classify patterns. Language models generate text.

- What you can guarantee: Symbolic systems offer formal verification. Neural networks provide probabilistic confidence. Language models give linguistic plausibility.

- How you fail: Symbolic systems crash on unexpected inputs. Neural networks misclassify. Language models hallucinate.

### Why This Matters for Cognition

If we want AI systems that reason causally, validate plans formally, and explain decisions transparently, we need to search a space that explicitly represents:

- Causation: Actions have preconditions and effects. Plans respect causal dependencies.
- Constraints: Geometric, physical, and logical constraints must be checkable.
- Structure: Knowledge organized as graphs enabling traversal and inference.

Language is too indirect. Tokens can describe these properties, but the model doesn't compute with them; it computes with $P(\text{tokens})$.

This motivates **graph-based cognitive architectures**: systems that search through explicit graph structures representing causal relationships, spatial arrangements, and logical constraints. The next post introduces **Project LOGOS**, which takes this approach.

---

## Conclusion: Search All the Way Down

AI is search. But what you search shapes what you can find.

Symbolic AI searched decision trees and proved theorems but struggled with perception and noise. Neural networks searched weight spaces and recognized patterns but couldn't explain their reasoning. Language models search token distributions and achieve linguistic fluency but can't guarantee causal correctness.

Each paradigm's limitations stem from its search space. To build agents that reason causally about the world, we need spaces that explicitly represent causation, structure, and constraints, not as tokens to be sampled, but as graphs to be traversed.

The next post introduces Project LOGOS, a cognitive architecture that uses graph-based knowledge representation to enable autonomous agents to:

- Reason about spatial relationships geometrically (not linguistically)
- Validate plans against explicit causal dependencies
- Explain decisions by tracing through graph structures
- Ground knowledge in both symbolic logic and vector embeddings

The journey from symbolic trees to neural weights to linguistic tokens taught us that **the structure of your search space determines the structure of your intelligence**. Now it's time to search graphs.

---

Next in series: [Non-Linguistic Cognition: Why Graphs Matter](/blog/non-linguistic-cognition)

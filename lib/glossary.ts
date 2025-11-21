export const glossary: Record<string, string> = {
  "mental models": "Internal representations of external reality that help us understand and predict how things work. Mental models allow us to reason about the world without language.",
  
  "spatial reasoning": "The ability to understand and manipulate relationships between objects in physical space, such as planning paths, understanding directions, and visualizing spatial arrangements.",
  
  "causal intuition": "The innate ability to understand cause-and-effect relationships, allowing us to predict outcomes and understand why things happen without explicit linguistic reasoning.",
  
  "Hybrid Causal Graph": "LOGOS's core knowledge representation structure (HCG) that combines symbolic reasoning with vector embeddings to represent entities, relationships, and causal dependencies in a unified graph database.",
  
  "HCG": "Hybrid Causal Graph - LOGOS's core knowledge representation that uses Neo4j to store entities and relationships with both symbolic properties and vector embeddings for semantic understanding.",
  
  "Neo4j": "A graph database management system that stores data as nodes and relationships, enabling efficient traversal and querying of connected data structures.",
  
  "Milvus": "A vector database designed for storing and querying high-dimensional vector embeddings, enabling semantic similarity search and AI-powered retrieval.",
  
  "vector database": "A specialized database optimized for storing and searching high-dimensional vectors (embeddings), enabling semantic similarity search rather than exact keyword matching.",
  
  "STRIPS": "Stanford Research Institute Problem Solver - A classical AI planning algorithm that represents actions as preconditions and effects, solving problems through state-space search.",
  
  "A*": "A pathfinding algorithm that efficiently finds the shortest path between nodes by using heuristics to guide the search, balancing exploration with estimated distance to the goal.",
  
  "token sequences": "The fundamental unit of language models - text broken into pieces (tokens) that the model processes sequentially. Every input and output must be converted to token sequences.",
  
  "Transformers": "A neural network architecture that processes sequences using attention mechanisms, allowing the model to weigh the importance of different parts of the input when generating outputs.",
  
  "attention mechanisms": "A technique in neural networks that allows the model to focus on different parts of the input when processing information, similar to how humans pay attention to relevant details.",
  
  "symbolic AI": "Classical artificial intelligence approaches that use explicit symbols, rules, and logic to represent knowledge and solve problems, as opposed to learning patterns from data.",
  
  "neural networks": "Machine learning models inspired by biological neurons, consisting of interconnected layers that learn patterns from data through training.",
  
  "graph-based knowledge representation": "Storing information as nodes (entities) and edges (relationships) in a graph structure, enabling flexible querying and reasoning about connected concepts.",
  
  "causal reasoning": "The process of understanding and inferring cause-and-effect relationships, allowing systems to predict consequences and explain why outcomes occur.",
  
  "formal validation": "Using mathematical logic and formal methods to prove that a system's behavior satisfies specific properties or constraints.",
  
  "SHACL": "Shapes Constraint Language - A W3C standard for validating graph data against defined shapes and constraints, ensuring data quality and consistency.",
  
  "RDF": "Resource Description Framework - A standard for representing information about resources on the web as subject-predicate-object triples, forming a graph of linked data.",
  
  "preconditions": "Logical conditions that must be true before an action can be executed. In planning systems, preconditions specify the state requirements that enable an action.",
  
  "effects": "The changes to the world state that result from executing an action. In planning, effects specify which predicates are added or deleted after an action completes.",
  
  "inverse kinematics": "The mathematical problem of computing the joint angles needed to position a robot's end-effector (like a gripper) at a desired location in 3D space. The inverse of forward kinematics.",
  
  "place cells": "Neurons in the hippocampus that fire when an animal is in a specific location in space, creating a neural map of the environment.",
  
  "grid cells": "Neurons in the entorhinal cortex that fire in regular hexagonal grid patterns as an animal moves through space, providing a coordinate system for navigation.",
  
  "forward model": "A neural or computational model that predicts the sensory consequences of motor actions, allowing the brain to simulate outcomes before executing movements.",
  
  "admissible": "A heuristic function is admissible if it never overestimates the true cost to reach the goal. This property guarantees that A* search finds the optimal solution.",
  
  "heuristic": "A rule of thumb or educated guess used to guide search algorithms toward promising solutions. In A*, the heuristic estimates the cost from a node to the goal.",
  
  "means-ends analysis": "A problem-solving strategy that identifies differences between the current state and goal state, then selects actions to reduce those differences.",
  
  "planning graphs": "A data structure used in automated planning that compactly represents possible actions and states at each time step, enabling efficient plan search.",
  
  "relaxed plans": "Simplified versions of planning problems created by ignoring delete effects of actions, providing admissible heuristics for plan search.",
  
  "frame problem": "The challenge in symbolic AI of specifying what doesn't change when an action is executed - how to represent all the things that remain the same.",
  
  "traveling salesman problem": "The computational problem of finding the shortest route visiting all nodes in a graph exactly once and returning to the start. NP-hard optimization problem.",
  
  "backpropagation": "An algorithm for training neural networks by computing gradients of the loss function with respect to weights by propagating errors backward through the network layers.",
  
  "vanishing gradients": "A problem in training deep neural networks where gradients become exponentially smaller in earlier layers, making learning difficult.",
  
  "residual connections": "Skip connections in neural networks that add the input of a layer to its output, enabling training of very deep networks by providing gradient flow shortcuts.",
  
  "translation equivariance": "A property where applying a transformation to the input produces a corresponding transformation in the output. Convolutions detect features regardless of position.",
  
  "local translation invariance": "Property where small shifts in the input don't significantly change high-level representations, typically achieved through pooling operations.",
  
  "positional encodings": "Sinusoidal functions added to token embeddings in Transformers to inject information about sequence position, since self-attention is permutation-invariant.",
  
  "beam search": "A search algorithm that explores multiple promising paths simultaneously by maintaining the top-k partial solutions at each step, balancing exploration and exploitation.",
  
  "nucleus sampling": "A sampling strategy (top-p sampling) that selects from the smallest set of tokens whose cumulative probability exceeds a threshold p, dynamically adjusting the sampling pool.",
  
  "scaling hypothesis": "The conjecture that AI model capabilities improve predictably with increases in compute, data, and parameters, following power-law relationships.",
  
  "scaling laws": "Empirical power-law relationships showing how model performance improves with increases in compute, dataset size, and parameter count.",
  
  "in-context learning": "The ability of large language models to learn new tasks from examples provided in the prompt, without parameter updates or fine-tuning.",
  
  "chain-of-thought": "Prompting technique where language models generate intermediate reasoning steps, improving performance on complex reasoning tasks by making thinking explicit.",
  
  "General Problem Solver": "An early AI program (1957) by Newell and Simon that used means-ends analysis to solve problems represented as symbolic states.",
  
  "Lisp": "A programming language created by John McCarthy (1958) designed for symbolic manipulation, with code and data represented as S-expressions (symbolic expressions).",
  
  "LSTM": "Long Short-Term Memory - A type of recurrent neural network with gating mechanisms that can learn long-range dependencies by controlling information flow through cell states.",
  
  "RNNs": "Recurrent Neural Networks - Neural networks that maintain hidden state across time steps, designed for processing sequential data like text or time series.",
  
  "hidden state": "Internal memory in recurrent neural networks that carries information forward across time steps, allowing the network to maintain context.",
  
  "Transformer": "A neural network architecture using attention mechanisms instead of recurrence, enabling parallel processing and better capture of long-range dependencies.",
  
  "Query": "In attention mechanisms, the Query matrix represents what information the model is looking for when computing attention weights.",
  
  "key": "In attention mechanisms, the Key matrix represents what information is available to be attended to, matched against queries.",
  
  "value": "In attention mechanisms, the Value matrix contains the actual information to retrieve, weighted by attention scores.",
  
  "Multi-head attention": "A technique in Transformers where multiple attention mechanisms run in parallel, each learning different patterns of relationships.",
  
  "Self-attention": "An attention mechanism where each element in a sequence attends to all other elements, enabling modeling of relationships within the sequence.",
  
  "feed-forward layers": "Fully connected neural network layers applied position-wise in Transformers, providing additional transformation capacity.",
  
  "Greedy decoding": "A text generation strategy that always selects the highest-probability next token, producing deterministic but potentially repetitive output.",
  
  "Temperature sampling": "A sampling strategy that divides logits by a temperature parameter, controlling randomness: higher values increase diversity, lower values make output more deterministic.",
  
  "ReLU activations": "Rectified Linear Unit - An activation function f(x) = max(0, x) that helps neural networks avoid vanishing gradients and train more effectively.",
  
  "Dropout": "A regularization technique that randomly deactivates neurons during training, preventing overfitting by forcing the network to learn robust features.",
  
  "Data augmentation": "Techniques for artificially expanding training datasets by creating modified versions of existing data (crops, rotations, etc.).",
  
  "GPU acceleration": "Using Graphics Processing Units to parallelize neural network computations, dramatically speeding up training and inference.",
  
  "Non-convex optimization": "Optimization problems with multiple local minima and complex landscapes, where finding the global optimum is generally intractable.",
  
  "regularization": "Techniques for preventing overfitting by constraining model complexity, including weight decay, dropout, and early stopping.",
  
  "inductive biases": "Architectural constraints that encode prior knowledge about the problem structure, like convolutions for spatial invariance.",
  
  "optimization in weight space": "The process of searching through the space of possible neural network weights to minimize a loss function.",
  
  "CNNs": "Convolutional Neural Networks - Neural networks using convolution operations to efficiently process grid-structured data like images.",
  
  "Shapes Constraint Language": "The full name of SHACL - a W3C standard for validating RDF graphs against logical constraints and shapes.",
  
  "graph-based cognitive architectures": "AI systems that represent knowledge as graph structures and reason by traversing relationships, rather than processing sequences or optimizing weights.",
  
  "Project LOGOS": "An open-source cognitive architecture using graph-based knowledge representation (Hybrid Causal Graph) to enable causal reasoning, formal validation, and transparent decision-making.",
  
  "CWM-A": "Abstract World Model - Component of LOGOS providing symbolic commonsense reasoning capabilities.",
  
  "CWM-G": "Grounded World Model - Planned component of LOGOS for learned physics and dynamics modeling (Phase 2+).",
  
  "Planner": "LOGOS component that performs backward-chaining through CAUSES relationships to generate action plans.",
  
  "Executor": "LOGOS component that monitors plan execution and updates the world state in the Hybrid Causal Graph.",
  
  "Apollo": "LOGOS interface component that processes natural language inputs using LLMs and parses them to formal goal states.",
  
  "Talos": "LOGOS embodiment component responsible for executing plans in physical or simulated environments.",
  
  "Hermes": "LOGOS language component that generates natural language explanations of reasoning and decisions.",
  
  "Structure": "In the context of AI search spaces, the way information is organized - whether as symbolic predicates, continuous weights, tokens, or graph relationships.",
};

export function getDefinition(term: string): string | undefined {
  // Try exact match first
  if (glossary[term]) return glossary[term];
  
  // Try case-insensitive match
  const lowerTerm = term.toLowerCase();
  const key = Object.keys(glossary).find(k => k.toLowerCase() === lowerTerm);
  return key ? glossary[key] : undefined;
}

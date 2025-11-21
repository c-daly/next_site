export default function ArchitecturePage() {
  return (
    <div className="panel">
      <div className="panel__header">
        <h1>Architecture</h1>
        <p className="text-zinc-400 text-lg">
          Overview of the LOGOS cognitive architecture
        </p>
      </div>

      <div className="space-y-12">
        {/* System Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">System Overview</h2>
          <p className="text-zinc-400 mb-6">
            LOGOS is a graph-based cognitive architecture that enables autonomous agents to reason 
            causally about actions and consequences. Unlike language-model-based systems, LOGOS 
            represents knowledge as structured graphs, allowing for formal validation and transparent reasoning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Hybrid Causal Graph</h3>
              <p className="text-zinc-400 text-sm">
                Neo4j-based knowledge representation combining symbolic structures with vector embeddings
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Vector Search</h3>
              <p className="text-zinc-400 text-sm">
                Milvus vector database for semantic similarity and knowledge retrieval
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Causal Reasoning</h3>
              <p className="text-zinc-400 text-sm">
                Explicit representation of causation, preconditions, and effects for plan validation
              </p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Core Components</h2>
          <div className="space-y-4">
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Apollo</h3>
                <span className="badge">Orchestration</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Multi-agent orchestration layer that coordinates specialized agents for complex tasks
              </p>
            </div>
            
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Hermes</h3>
                <span className="badge">Communication</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Natural language interface for human-agent interaction and query processing
              </p>
            </div>
            
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Sophia</h3>
                <span className="badge">Knowledge</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Knowledge management system handling graph construction and vector embeddings
              </p>
            </div>
            
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Talos</h3>
                <span className="badge">Execution</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Action execution engine with plan validation and real-world interaction
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Core Infrastructure</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• <strong>Python 3.10+</strong> - Core implementation language</li>
                <li>• <strong>Neo4j</strong> - Graph database for HCG knowledge representation</li>
                <li>• <strong>Milvus</strong> - Vector database for semantic similarity search</li>
                <li>• <strong>Poetry</strong> - Dependency management and packaging</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Libraries</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• <strong>Pydantic</strong> - Data validation and schema definitions</li>
                <li>• <strong>FastAPI</strong> - REST API endpoints (Apollo)</li>
                <li>• <strong>RDFLib & PySHACL</strong> - Ontology and constraint validation</li>
                <li>• <strong>OpenTelemetry</strong> - Observability and monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">User Interface</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• <strong>Click & Rich</strong> - CLI interface (Apollo)</li>
                <li>• <strong>React</strong> - Web dashboard (Apollo UI)</li>
                <li>• <strong>WebSockets</strong> - Real-time state updates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Development</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• <strong>pytest</strong> - Testing framework</li>
                <li>• <strong>Black & Ruff</strong> - Code formatting and linting</li>
                <li>• <strong>MyPy</strong> - Static type checking</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

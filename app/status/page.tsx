export default function StatusPage() {
  return (
    <div className="panel">
      <div className="panel__header">
        <h1>Project Status</h1>
        <p className="text-zinc-400 text-lg">
          Current state of LOGOS components and milestones
        </p>
      </div>

      <div className="space-y-12">
        {/* Phase 2 Milestones */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Phase 2 Milestones</h2>
          <div className="space-y-3">
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">P2-M1: Services Online</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Sophia and Hermes APIs running locally and in CI
                  </p>
                </div>
                <span className="pill pending">In Progress</span>
              </div>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Sophia FastAPI service with /plan, /state, /simulate endpoints</li>
                <li>• Hermes NLU service for natural language processing</li>
                <li>• Docker Compose configurations for local development</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">P2-M2: Apollo Dual Surface</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    CLI refactored + browser app MVP with shared SDK
                  </p>
                </div>
                <span className="pill pending">In Progress</span>
              </div>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Command-line interface for direct agent interaction</li>
                <li>• React-based web dashboard for visualization</li>
                <li>• WebSocket integration for real-time updates</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">P2-M3: Perception & Imagination</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    CWM-G handles media streams + /simulate endpoint
                  </p>
                </div>
                <span className="pill pending">In Progress</span>
              </div>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Geometric reasoning for spatial understanding</li>
                <li>• Media stream processing and perception</li>
                <li>• Simulation endpoint for plan validation</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">P2-M4: Diagnostics & Persona</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Observability stack + CWM-E reflection + demo capture
                  </p>
                </div>
                <span className="pill success">Core Complete</span>
              </div>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• OpenTelemetry integration for observability</li>
                <li>• CWM-E epistemic reasoning and self-reflection</li>
                <li>• Demo scenario capture and replay</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Core Components</h2>
          <div className="space-y-3">
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">LOGOS Foundry</h3>
                <span className="pill pending">In Development</span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Canonical source of truth for LOGOS specifications, ontology, and infrastructure
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Neo4j Integration</span>
                <span className="tag">Milvus Vector DB</span>
                <span className="tag">SHACL Validation</span>
                <span className="tag">RDFLib Ontology</span>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Apollo</h3>
                <span className="pill pending">In Development</span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                User interface and command layer providing CLI and web dashboard
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Click CLI</span>
                <span className="tag">React Dashboard</span>
                <span className="tag">FastAPI Backend</span>
                <span className="tag">WebSockets</span>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Sophia</h3>
                <span className="pill pending">In Development</span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Cognitive core managing the Hybrid Causal Graph and reasoning processes
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Graph Reasoning</span>
                <span className="tag">Plan Generation</span>
                <span className="tag">State Management</span>
                <span className="tag">REST API</span>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Hermes</h3>
                <span className="pill pending">In Development</span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Natural language understanding and communication interface
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">NLU Processing</span>
                <span className="tag">Intent Recognition</span>
                <span className="tag">Query Parsing</span>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">Talos</h3>
                <span className="pill pending">In Development</span>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Action execution engine for plan validation and real-world interaction
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Action Execution</span>
                <span className="tag">Plan Validation</span>
                <span className="tag">Safety Constraints</span>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Status */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Graph Database</h3>
                <span className="pill success">Operational</span>
              </div>
              <p className="text-zinc-400 text-sm">Neo4j for Hybrid Causal Graph storage</p>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Vector Database</h3>
                <span className="pill success">Operational</span>
              </div>
              <p className="text-zinc-400 text-sm">Milvus for semantic similarity search</p>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Observability</h3>
                <span className="pill success">Implemented</span>
              </div>
              <p className="text-zinc-400 text-sm">OpenTelemetry for metrics and tracing</p>
            </div>

            <div className="card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">CI/CD</h3>
                <span className="pill pending">In Progress</span>
              </div>
              <p className="text-zinc-400 text-sm">GitHub Actions for automated testing</p>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="border-t border-zinc-800 pt-8">
          <h3 className="text-lg font-semibold mb-4">Status Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="pill success">Complete</span>
              <span className="text-sm text-zinc-400">Feature complete and tested</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="pill pending">In Development</span>
              <span className="text-sm text-zinc-400">Actively being built</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="pill blocked">Blocked</span>
              <span className="text-sm text-zinc-400">Waiting on dependencies</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Project Status - LOGOS',
  description: 'Current development status of LOGOS components and milestones',
};

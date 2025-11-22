import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Show latest 3 posts
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="noise" />
        <div className="hero__inner">
          <div>
            <div className="eyebrow">OPEN-SOURCE COGNITIVE ARCHITECTURE</div>
            <h1>Project LOGOS</h1>
            <p className="lede" style={{ marginBottom: '12px' }}>
              <strong style={{ color: 'var(--accent)', fontSize: '20px' }}>Learning G* of Systems</strong> — 
              Building autonomous agents that reason with graphs, not words. 
              A cognitive architecture using Neo4j and Milvus for causal reasoning 
              and structured knowledge representation.
            </p>
            <p className="lede" style={{ fontSize: '17px', opacity: '0.9' }}>
              LOGOS searches for optimal graph structures (G*) in the space of possible system configurations, 
              treating intelligence as finding the right connections rather than the right words.
            </p>
            <div className="hero__cta">
              <Link href="/blog" className="button primary">
                Read the Blog
              </Link>
              <Link href="/architecture" className="button ghost">
                Explore Architecture
              </Link>
              <a 
                href="https://github.com/c-daly/LOGOS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button ghost"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="hero__glance">
            <div className="glance__header">
              <h3>At a Glance</h3>
            </div>
            <div className="glance__rows">
              <div className="glance__row">
                <h4>Graph-Based Reasoning</h4>
                <p>Knowledge represented as causal graphs, not token sequences</p>
              </div>
              <div className="glance__row">
                <h4>Formal Validation</h4>
                <p>Plans verified against preconditions and constraints</p>
              </div>
              <div className="glance__row">
                <h4>Transparent Decisions</h4>
                <p>Explainable reasoning through graph traversal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why LOGOS Section */}
      <div className="panel alt">
        <div className="panel__header">
          <h2>Why Graph Structures?</h2>
          <p className="text-zinc-400">
            LOGOS means <strong className="text-accent">Learning G* of Systems</strong> — finding optimal graph structures for knowledge representation.
          </p>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Graphs as First Principles</h3>
            <p className="muted">
              Just as A* searches for optimal paths through state space, LOGOS searches for optimal 
              graph structures (G*) in the space of knowledge representations. Every concept, every 
              causal relationship, every plan is fundamentally a graph problem.
            </p>
          </div>
          <div className="card">
            <h3>Structure Over Sequences</h3>
            <p className="muted">
              Language is linear. Knowledge is not. Graphs capture the true topology of causation, 
              spatial relationships, and logical dependencies. LOGOS treats graph connectivity as 
              the substrate of intelligence, not token sequences.
            </p>
          </div>
          <div className="card">
            <h3>Optimization Through Connection</h3>
            <p className="muted">
              Intelligence emerges from finding the right connections. Neo4j stores causal graphs, 
              Milvus finds semantic neighbors in embedding space, and STRIPS plans traverse action 
              graphs. It's graphs all the way down.
            </p>
          </div>
        </div>
      </div>

      {/* Why Non-Linguistic Section */}
      <div className="panel">
        <div className="panel__header">
          <h2>Beyond Language Models</h2>
          <p className="text-zinc-400">
            Language models think in words. LOGOS thinks in structures.
          </p>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Beyond Token Sequences</h3>
            <p className="muted">
              LLMs optimize for linguistic plausibility, not causal correctness. 
              LOGOS represents knowledge as explicit graph structures that can be 
              formally validated and reasoned over.
            </p>
          </div>
          <div className="card">
            <h3>Causal Understanding</h3>
            <p className="muted">
              Actions have preconditions and effects. Plans must respect causal 
              dependencies. LOGOS models causation explicitly, enabling robust 
              plan validation before execution.
            </p>
          </div>
          <div className="card">
            <h3>Explainable Reasoning</h3>
            <p className="muted">
              Every decision traces back through the knowledge graph. No black boxes, 
              no hallucinations—just transparent graph traversal and logical inference.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="panel">
        <div className="panel__header">
          <h2>Latest from the Blog</h2>
          <p className="text-zinc-400">
            Technical deep-dives on cognitive architectures and AI systems
          </p>
        </div>
        {posts.length > 0 ? (
          <>
            <div className="grid gap-6 mb-16">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="post-card block"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{post.frontmatter.title}</h3>
                    {post.frontmatter.seriesOrder && (
                      <span className="badge shrink-0">Part {post.frontmatter.seriesOrder}</span>
                    )}
                  </div>
                  <p className="text-zinc-400 mb-3">{post.frontmatter.description}</p>
                  <div className="flex gap-3 text-sm text-zinc-500">
                    <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/blog" className="button ghost">
                View all posts →
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-zinc-500">
            <p className="mb-4">Blog posts will appear here once added to the posts/ directory</p>
            <Link href="/blog" className="text-accent hover:underline">
              View blog →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

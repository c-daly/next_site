import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="panel">
      <h1 className="text-6xl font-bold mb-8">Christopher D. Daly</h1>
      
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-accent">About Me</h2>
        <p className="text-xl leading-relaxed mb-6">
          I'm a software engineer with over 15 years of experience building scalable, robust web and cloud-native applications. I recently completed a Master's in Computer Science at Northeastern University, where I focused on intelligent agents, machine learning, and cognitive architectures. I design robots for fun, and I'm passionate about creating modular, explainable systems that address complex, real-world challenges.
        </p>
        <p className="text-xl leading-relaxed mb-6">
          Currently, I'm working on <Link href="https://github.com/c-daly/LOGOS" className="text-accent font-bold hover:text-accent-2 transition-colors">Project LOGOS</Link>, a non-linguistic cognitive architecture that combines symbolic planning with neural embeddings to create agents capable of spatial reasoning, causal understanding, and goal-directed behavior. The project explores how robots can think and plan without relying on language models, drawing inspiration from neuroscience, classical AI, and modern deep learning.
        </p>
        <p className="text-xl leading-relaxed">
          My work sits at the intersection of AI research and practical engineering, where I'm most interested in building systems that are both powerful and interpretable—agents that don't just work, but whose reasoning we can understand and trust.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-accent">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-accent-2">Languages & Core</h3>
            <p className="text-lg">Python, C#, C/C++, Java, JavaScript, TypeScript, PHP, R, SQL</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-accent-2">AI/ML & Research</h3>
            <p className="text-lg">PyTorch, TensorFlow, OpenAI API, LangChain, HuggingFace, Gym, STRIPS Planning</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-accent-2">Infrastructure & Cloud</h3>
            <p className="text-lg">.NET Core, Node.js, Docker, Kubernetes, GCP, Vertex AI</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-accent-2">Data & Knowledge Systems</h3>
            <p className="text-lg">Neo4j (Graph DB), Milvus (Vector DB), Postgres, MongoDB, SQL Server</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-accent-2">Robotics & Hardware</h3>
            <p className="text-lg">ROS2, Arduino, Raspberry Pi, 3D Printing, Fusion 360, SLAM Navigation</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-3 text-accent-2">Modern Web</h3>
            <p className="text-lg">Next.js, React, Tailwind CSS, ASP.NET MVC, MDX</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-accent">Featured Projects</h2>
        
        <div className="space-y-8">
          <div className="card bg-gradient-to-br from-zinc-900/70 to-zinc-900/50 border-2 border-accent/30">
            <h3 className="text-3xl font-bold mb-4 text-accent">
              Project LOGOS - Non-Linguistic Cognitive Architecture
            </h3>
            <p className="text-xl mb-4 leading-relaxed">
              A research project exploring how intelligent agents can reason, plan, and act without language models. LOGOS combines symbolic AI (STRIPS planning, A*), neural embeddings, and graph-based knowledge representation to create explainable, goal-directed behavior.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-bold text-accent-2 mb-2">Core Components:</h4>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Apollo: Symbolic planner using STRIPS/A*</li>
                  <li>Sophia: Memory & embedding system</li>
                  <li>Hermes: Sensor processing & perception</li>
                  <li>Talos: Causal reasoning & world modeling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-accent-2 mb-2">Tech Stack:</h4>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Neo4j for causal & spatial graphs</li>
                  <li>Milvus for vector similarity search</li>
                  <li>PyTorch for neural embeddings</li>
                  <li>ROS2 for robot integration</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-zinc-400">
              Read more in my <Link href="/blog" className="text-accent hover:text-accent-2 transition-colors underline">blog series</Link> exploring the theory and implementation details.
            </p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">
              <Link href="https://github.com/Defiant-Duck/Sophia" className="text-accent hover:text-accent-2 transition-colors">
                Sophia - Intelligent AI Agent (Legacy)
              </Link>
            </h3>
            <p className="text-lg mb-3">
              Early prototype that evolved into the memory component of Project LOGOS. Explored conversational agents with persistent memory, tool usage, and knowledge graph integration.
            </p>
            <p className="text-zinc-400">HuggingFace models, OpenAI API, Milvus DB, Neo4j</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">TurtleBot3 Autonomous Navigation</h3>
            <p className="text-lg mb-3">
              Built and programmed a TurtleBot3 robot with ROS2 for autonomous SLAM navigation. Custom hardware integration with Slamtec RPLidar and Cartographer for real-time mapping. All structural components 3D printed from custom Fusion 360 designs.
            </p>
            <p className="text-zinc-400">ROS2, SLAM, Cartographer, 3D Printing, Fusion 360</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">Exploratory Robotics Research</h3>
            <p className="text-lg mb-3">
              Hands-on experimentation with embedded systems, motor control, and sensor fusion. Built multiple robots from scratch to explore different control paradigms, from simple reactive behaviors to complex state machines.
            </p>
            <p className="text-zinc-400">Arduino, Raspberry Pi, Motor Controllers, Pygame, 3D Printing</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">
              <Link href="https://github.com/c-daly/SCRMBL" className="text-accent hover:text-accent-2 transition-colors">
                SCRMBL - StarCraft II RL Framework
              </Link>
            </h3>
            <p className="text-lg mb-3">
              Extensible reinforcement learning platform built on Blizzard's StarCraft II API. Designed for research into multi-agent systems, real-time strategy, and hierarchical planning in complex game environments.
            </p>
            <p className="text-zinc-400">Python, Gym, StarCraft II API, Reinforcement Learning</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">
              <Link href="https://github.com/c-daly/MixedClusteringSurvey" className="text-accent hover:text-accent-2 transition-colors">
                Mixed Data Clustering Analysis
              </Link>
            </h3>
            <p className="text-lg mb-3">
              Comprehensive survey and empirical comparison of clustering algorithms for mixed numerical and categorical data. Implemented and benchmarked multiple approaches with statistical analysis in R.
            </p>
            <p className="text-zinc-400">R, Statistical Analysis, Machine Learning, Data Mining</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">
              <Link href="https://github.com/c-daly/Notebooks" className="text-accent hover:text-accent-2 transition-colors">
                NLP Embeddings Benchmark
              </Link>
            </h3>
            <p className="text-lg mb-3">
              Systematic evaluation of embedding methods (Word2Vec, FastText, BERT, SBERT) across multiple NLP tasks. Analyzed trade-offs in speed, quality, and computational requirements for different use cases.
            </p>
            <p className="text-zinc-400">PyTorch, Transformers, scikit-learn, NLP</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-3">
              <Link href="https://github.com/c-daly/MinMaxPriorityQueue" className="text-accent hover:text-accent-2 transition-colors">
                MinMax Priority Queue
              </Link>
            </h3>
            <p className="text-lg mb-3">
              High-performance implementation of a double-ended priority queue supporting O(1) min/max retrieval. Demonstrates efficient heap-based data structure design with rigorous complexity analysis.
            </p>
            <p className="text-zinc-400">Data Structures, Algorithms, Heap Implementation</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-accent">Professional Experience</h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
            <p className="text-accent-2 font-semibold mb-3">Kessel Run (USAF/Concept Solutions) · Boston, MA · 2020-2021</p>
            <p className="text-lg mb-3">
              Developed mission-critical cloud-native backend services and real-time rule engines for Air Force operations. Architected microservices deployed via Docker and Kubernetes with focus on reliability and performance under high-stress scenarios.
            </p>
            <p className="text-zinc-400">C#, .NET Core, Kubernetes, Docker, Microservices</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
            <p className="text-accent-2 font-semibold mb-3">WordStream Inc. · Boston, MA · 2017-2020</p>
            <p className="text-lg mb-3">
              Built SaaS applications with complex integrations into Salesforce and Intercom ecosystems. Optimized high-volume billing systems and data analytics pipelines serving thousands of enterprise customers.
            </p>
            <p className="text-zinc-400">C#, JavaScript, Salesforce API, Data Analytics, SaaS</p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Senior Developer</h3>
            <p className="text-accent-2 font-semibold mb-3">Rightpoint Consulting · Boston, MA · 2015-2017</p>
            <p className="text-lg mb-3">
              Delivered enterprise CMS solutions using Sitecore and EpiServer for Fortune 500 clients. Led technical training initiatives and mentored junior developers in .NET best practices and architecture patterns.
            </p>
            <p className="text-zinc-400">C#, Sitecore, EpiServer, Enterprise Architecture, Mentorship</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-accent">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Master of Science, Computer Science</h3>
            <p className="text-accent-2 font-semibold mb-2">Northeastern University</p>
            <p className="text-zinc-400 mb-3">Boston, MA · 2023</p>
            <p className="text-lg">Focus: Intelligent Agents, Machine Learning, Cognitive Architectures</p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science, Computer Science</h3>
            <p className="text-accent-2 font-semibold mb-2">Millersville University</p>
            <p className="text-zinc-400">Millersville, PA · 2005</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-accent">Get in Touch</h2>
        <p className="text-xl mb-6 leading-relaxed">
          I'm actively seeking opportunities in AI/ML research, intelligent systems, and robotics. Whether you're working on cognitive architectures, autonomous agents, or building interpretable AI systems, I'd love to connect.
        </p>
        <div className="flex flex-wrap gap-6 text-lg">
          <Link href="https://linkedin.com/in/c-daly" className="px-6 py-3 rounded bg-accent text-black font-semibold hover:bg-accent-2 transition-colors">
            LinkedIn
          </Link>
          <Link href="https://github.com/c-daly" className="px-6 py-3 rounded bg-zinc-800 text-accent font-semibold hover:bg-zinc-700 transition-colors">
            GitHub
          </Link>
          <Link href="/blog" className="px-6 py-3 rounded bg-zinc-800 text-accent-2 font-semibold hover:bg-zinc-700 transition-colors">
            Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { getAllPosts, getAllSeries } from '@/lib/posts';

export const metadata = {
  title: 'Blog - Project LOGOS',
  description: 'Technical blog posts on cognitive architectures, AI, and graph-based reasoning',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const series = getAllSeries();

  // Group posts by series
  const postsBySeries = series.map((seriesName) => ({
    name: seriesName,
    posts: posts.filter((p) => p.frontmatter.series === seriesName),
  }));

  const standalonePosts = posts.filter((p) => !p.frontmatter.series);

  return (
    <div className="panel">
      <div className="panel__header">
        <h1>Blog</h1>
        <p className="text-zinc-400 text-lg">
          Technical articles on cognitive architectures, AI systems, and graph-based reasoning
        </p>
      </div>

      {postsBySeries.map((series) => (
        <div key={series.name} className="mb-12">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">{series.name}</h2>
            <div className="text-sm text-zinc-500">
              {series.posts.length} {series.posts.length === 1 ? 'post' : 'posts'} in this series
            </div>
          </div>
          <div className="grid gap-4">
            {series.posts.map((post) => (
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
        </div>
      ))}

      {standalonePosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Articles</h2>
          <div className="grid gap-4">
            {standalonePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="post-card block"
              >
                <h3 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h3>
                <p className="text-zinc-400 mb-3">{post.frontmatter.description}</p>
                <div className="flex gap-3 text-sm text-zinc-500">
                  <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

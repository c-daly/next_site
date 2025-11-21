import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getPostsBySeries, generateTableOfContents } from '@/lib/posts';
import { compileMDXContent } from '@/lib/mdx';
import TableOfContents from '@/components/TableOfContents';
import SeriesNavigation from '@/components/SeriesNavigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} - Project LOGOS`,
    description: post.frontmatter.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content: mdxContent } = await compileMDXContent(post.content);
  const toc = generateTableOfContents(post.content);
  
  const seriesPosts = post.frontmatter.series 
    ? getPostsBySeries(post.frontmatter.series)
    : [];

  return (
    <div className="panel">
      <article className="max-w-6xl mx-auto">
        {/* Post Header */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <h1 className="text-6xl font-bold mb-6 leading-tight">{post.frontmatter.title}</h1>
          <div className="flex flex-wrap gap-4 text-[17px] text-zinc-400">
            <span>{new Date(post.frontmatter.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{post.frontmatter.author}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span key={tag} className="badge text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Series Navigation - Top */}
        {post.frontmatter.series && seriesPosts.length > 1 && (
          <div className="mb-8">
            <SeriesNavigation 
              currentSlug={slug} 
              seriesPosts={seriesPosts}
              seriesName={post.frontmatter.series}
            />
          </div>
        )}

        {/* Post Content with TOC */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-16">
          <div className="prose prose-invert prose-zinc max-w-none">
            {mdxContent}
          </div>
          
          {/* Table of Contents - Desktop */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={toc} />
              </div>
            </aside>
          )}
        </div>

        {/* Series Navigation - Bottom */}
        {post.frontmatter.series && seriesPosts.length > 1 && (
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <SeriesNavigation 
              currentSlug={slug} 
              seriesPosts={seriesPosts}
              seriesName={post.frontmatter.series}
            />
          </div>
        )}
      </article>
    </div>
  );
}

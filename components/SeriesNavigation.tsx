import Link from 'next/link';
import { Post } from '@/lib/posts';

interface SeriesNavigationProps {
  currentSlug: string;
  seriesPosts: Post[];
  seriesName: string;
}

export default function SeriesNavigation({ currentSlug, seriesPosts, seriesName }: SeriesNavigationProps) {
  const currentIndex = seriesPosts.findIndex((p) => p.slug === currentSlug);
  const previousPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null;

  return (
    <div className="series-nav">
      <div className="mb-6 p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
        <div className="flex items-baseline gap-3 flex-wrap mb-6">
          <div className="text-sm text-zinc-500">Part of series:</div>
          <div className="text-xl font-semibold text-accent flex-1">{seriesName}</div>
          <div className="text-base text-zinc-400 font-medium">
            Part {currentIndex + 1} of {seriesPosts.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group p-4 rounded hover:bg-zinc-800/50 border border-transparent hover:border-accent transition-all"
            >
              <div className="text-xs text-zinc-500 mb-2 font-medium">← Previous</div>
              <div className="font-semibold text-zinc-200 leading-snug group-hover:text-accent transition-colors">
                {previousPost.frontmatter.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-4 rounded hover:bg-zinc-800/50 border border-transparent hover:border-accent transition-all text-right"
            >
              <div className="text-xs text-zinc-500 mb-2 font-medium">Next →</div>
              <div className="font-semibold text-zinc-200 leading-snug group-hover:text-accent transition-colors">
                {nextPost.frontmatter.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

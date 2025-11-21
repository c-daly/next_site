import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  author: string;
  series?: string;
  seriesOrder?: number;
  description: string;
  tags?: string[];
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const readingStats = readingTime(content);

      return {
        slug,
        frontmatter: data as PostFrontmatter,
        content,
        readingTime: readingStats.text,
      };
    })
    .sort((a, b) => {
      // Sort by date descending
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getPostsBySeries(series: string): Post[] {
  const posts = getAllPosts();
  return posts
    .filter((post) => post.frontmatter.series === series)
    .sort((a, b) => {
      // Sort by series order
      const orderA = a.frontmatter.seriesOrder || 0;
      const orderB = b.frontmatter.seriesOrder || 0;
      return orderA - orderB;
    });
}

export function getAllSeries(): string[] {
  const posts = getAllPosts();
  const seriesSet = new Set<string>();
  posts.forEach((post) => {
    if (post.frontmatter.series) {
      seriesSet.add(post.frontmatter.series);
    }
  });
  return Array.from(seriesSet);
}

export function generateTableOfContents(content: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: { id: string; title: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    
    toc.push({ id, title, level });
  }

  return toc;
}

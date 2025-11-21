import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { getMDXComponents } from './mdx-components';

export async function compileMDXContent(content: string) {
  return await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
          [
            // @ts-ignore
            rehypePrettyCode,
            {
              theme: 'github-dark',
              keepBackground: true,
            },
          ],
          rehypeKatex,
        ],
      },
    },
    components: getMDXComponents(),
  });
}

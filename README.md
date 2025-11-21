# Project LOGOS Website

A Next.js-based technical blog and project site for Project LOGOS, featuring long-form technical posts with LaTeX math, code highlighting, and academic formatting.

## Features

- **MDX Blog** with full markdown support
- **LaTeX Math Rendering** using KaTeX
- **Syntax Highlighting** with rehype-pretty-code
- **Series Navigation** for multi-part blog posts
- **Table of Contents** with active section highlighting
- **Dark Theme** inspired by the original LOGOS site aesthetic
- **Auto-discovery** of posts from the `posts/` directory
- **Frontmatter Support** for metadata (title, date, author, series, tags)

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding Blog Posts

1. Create a new `.md` or `.mdx` file in the `posts/` directory
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: "2024-11-21"
author: "Your Name"
series: "Optional Series Name"
seriesOrder: 1
description: "Brief description of the post"
tags: ["tag1", "tag2"]
---
```

3. Write your content with full markdown, LaTeX math, and code blocks
4. The post will automatically appear on the blog page

### LaTeX Math

Use inline math with single `$`: `$E = mc^2$`

Use display math with double `$$`:
```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

### Code Blocks

Use fenced code blocks with language identifiers:

````markdown
```python
def hello():
    print("Hello, LOGOS!")
```
````

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual post pages
│   ├── architecture/         # Architecture overview
│   ├── layout.tsx            # Root layout with navigation
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Site navigation
│   ├── TableOfContents.tsx   # TOC component
│   └── SeriesNavigation.tsx  # Series navigation
├── lib/
│   ├── posts.ts              # Post discovery and metadata
│   └── mdx.ts                # MDX compilation config
└── posts/                    # Blog posts directory
    ├── ai-as-search.md
    └── non-linguistic-cognition.md
```

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **MDX** - Markdown with JSX components
- **KaTeX** - LaTeX math rendering
- **Shiki** - Code syntax highlighting
- **Gray Matter** - Frontmatter parsing

## Deployment

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.

## License

Part of Project LOGOS

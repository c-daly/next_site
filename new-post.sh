#!/bin/bash

# Script to create a new blog post with proper frontmatter

if [ $# -lt 2 ]; then
    echo "Usage: ./new-post.sh <slug> <title>"
    echo "Example: ./new-post.sh my-post-slug \"My Amazing Post Title\""
    exit 1
fi

SLUG=$1
TITLE=$2
DATE=$(date +%Y-%m-%d)
FILENAME="posts/${SLUG}.md"

if [ -f "$FILENAME" ]; then
    echo "Error: Post $FILENAME already exists!"
    exit 1
fi

cat > "$FILENAME" << EOF
---
title: "$TITLE"
date: "$DATE"
author: "Project LOGOS"
description: "Add your post description here"
tags: []
---

# $TITLE

Write your post content here. You can use:

- **Markdown** formatting
- \`inline code\`
- Code blocks:

\`\`\`python
def example():
    print("Hello, world!")
\`\`\`

- LaTeX math: \$E = mc^2\$

- Display equations:

\$\$
\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
\$\$

## Section Heading

Your content continues here...
EOF

echo "✓ Created new post: $FILENAME"
echo "Edit the file to add your content, then it will appear on /blog"

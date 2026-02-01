---
name: write-blog-post
description: Draft a developer-blog style post in markdown with minimal and friendly tone.
---

# Write Blog Post

Draft developer-blog style posts with a minimal and friendly tone.

## Inputs

- **topic**: The main subject of the blog post
- **outline**: Optional structure/sections for the post
- **bullet_points**: Key points to cover in the content

## Output

A markdown blog post file ready for `src/content/blog/`.

## Instructions

1. **Collect Information**
   - Get the topic from the user
   - Ask for an outline or key sections (optional)
   - Gather bullet points of ideas to cover

2. **Writing Style**
   - Use a minimal, friendly, conversational tone
   - Write short paragraphs (2-3 sentences max)
   - Use simple language, avoid jargon unless necessary
   - Include code examples when relevant

3. **Structure**
   - Start with a brief intro (1-2 sentences)
   - Use clear headings for sections
   - End with a short conclusion or takeaway

4. **Frontmatter**

   ```yaml
   ---
   title: 'Post Title'
   description: 'Brief description'
   pubDate: YYYY-MM-DD
   tags: ['tag1', 'tag2']
   ---
   ```

5. **Suggest Tags**
   - Recommend 2-4 relevant tags based on content
   - Use lowercase, kebab-case format

6. **Save Location**
   - Save to `src/content/blog/[slug].md`
   - Use kebab-case for filename

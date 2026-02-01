---
name: add-book-note
description: Create a raw book note entry with book name, author, and sentences.
---

# Add Book Note

Create book note entries with highlights and memorable sentences.

## Inputs

- **book_name**: Title of the book
- **author**: Author's name
- **sentences**: Highlighted sentences or notes from the book

## Output

A markdown book note file ready for `src/content/books/`.

## Instructions

1. **Collect Information**
   - Get the book title
   - Get the author name
   - Collect highlighted sentences or notes

2. **Format Notes**
   - Keep sentences as raw quotes
   - Use blockquote format for highlights
   - Preserve the original wording

3. **Structure**
   - Title: Book name
   - Author: Author name
   - Notes: List of highlighted sentences

4. **Frontmatter**

   ```yaml
   ---
   title: 'Book Title'
   author: 'Author Name'
   dateRead: YYYY-MM-DD
   rating: 5
   tags: ['genre', 'topic']
   ---
   ```

5. **Content Format**

   ```markdown
   ## Highlights

   > "First highlighted sentence from the book."

   > "Second highlighted sentence from the book."
   ```

6. **Optional Fields**
   - Rating (1-5)
   - Genre/topic tags
   - Personal thoughts section

7. **Save Location**
   - Save to `src/content/books/[book-slug].md`
   - Use kebab-case for filename

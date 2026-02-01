---
name: generate-tech-stack-page
description: Generate a grouped tech stack page by category (frontend, backend, tools, etc).
---

# Generate Tech Stack Page

Generate a tech stack page organized by category.

## Inputs

- **tech_stack_list**: List of technologies with their categories

## Output

A markdown tech stack page with technologies grouped by category.

## Instructions

1. **Collect Information**
   - Get the list of technologies
   - Categorize each technology

2. **Categories**
   Organize technologies into these groups:
   - **Frontend**: React, Vue, Astro, Tailwind, etc.
   - **Backend**: Node.js, Python, Go, etc.
   - **Database**: PostgreSQL, MongoDB, Redis, etc.
   - **DevOps**: Docker, AWS, Vercel, etc.
   - **Tools**: Git, VS Code, Figma, etc.
   - **Languages**: TypeScript, JavaScript, Python, etc.

3. **Format**

   ```markdown
   ## Frontend

   - **React** - UI library for building interfaces
   - **Tailwind CSS** - Utility-first CSS framework

   ## Backend

   - **Node.js** - JavaScript runtime
   - **Express** - Web framework for Node.js
   ```

4. **Technology Entry Format**
   - Name in bold
   - Brief description (one line)
   - Optional: years of experience or proficiency level

5. **Ordering**
   - Order categories logically (Frontend → Backend → Database → DevOps → Tools)
   - Within categories, order by relevance or proficiency

6. **Save Location**
   - Save to `src/content/stack.md` or appropriate location
   - Can also update existing tech stack page

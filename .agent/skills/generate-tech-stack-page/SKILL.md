---
name: generate-tech-stack-page
description: Generate a grouped tech stack page by category (frontend, backend, tools, etc).
---

# Generate Tech Stack

Generate tech stack entries for `src/data/stack.ts`.

## Inputs

- **tech_stack_list**: List of technologies with their categories

## Output

- TypeScript objects to append to `src/data/stack.ts`

## Instructions

1. **Collect Information**
   - Get the list of technologies
   - Categorize each technology into: 'frontend', 'backend', 'devops', 'tools', 'languages', 'testing'

2. **Format**
   Create objects matching `TechItem` interface:

   ```typescript
   { name: 'Name', icon: 'fa6-brands:icon-name', category: 'frontend' },
   ```

3. **Icons**
   - Use `fa6-brands` or `fa6-solid` from Iconify.
   - Fallback to generic icons if specific brand is missing.

4. **Update File**
   - Append to the `stack` array in `src/data/stack.ts`

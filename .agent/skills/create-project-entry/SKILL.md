---
name: create-project-entry
description: Generate a project entry using only the tech stack and website URL.
---

# Create Project Entry

Generate project entries from a website URL and tech stack.

## Inputs

- **project_url**: The live project URL or repository link
- **tech_stack**: List of technologies used in the project

## Output

A markdown project entry file ready for `src/content/projects/`.

## Instructions

1. **Collect Information**
   - Get the project URL
   - Get the tech stack (frameworks, libraries, tools)

2. **Generate Description**
   - Write a simple, concise project description
   - Focus on what it does, not how it was built
   - Keep it to 1-2 sentences

3. **Structure**
   - Title: Project name (inferred from URL or ask user)
   - Description: Brief summary
   - URL: Live link
   - Tech stack: Array of technologies

4. **Frontmatter**

   ```yaml
   ---
   title: 'Project Name'
   description: 'Brief description'
   url: 'https://example.com'
   repo: 'https://github.com/user/repo'
   techStack: ['React', 'TypeScript', 'Node.js']
   featured: false
   ---
   ```

5. **Tech Stack Format**
   - Use proper casing (e.g., "React", "TypeScript", "Node.js")
   - List in order of importance/relevance
   - Include both frontend and backend technologies

6. **Save Location**
   - Save to `src/content/projects/[project-slug].md`
   - Use kebab-case for filename

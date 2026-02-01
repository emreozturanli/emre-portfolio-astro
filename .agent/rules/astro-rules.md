---
trigger: always_on
---

You are an expert in Astro for building content-driven websites.

Primary Goal:
Build fast, SEO-friendly, content-focused websites using Astro’s MPA architecture and partial hydration.

Core Principles:

- Content-first architecture (MPA, not SPA)
- Zero JavaScript by default
- Islands Architecture (hydrate only when needed)
- UI-agnostic (frameworks only when required)
- Server-first rendering
- Accessibility and SEO are always priorities
- **Mobile-first approach** always
- **Animate** all opening/closing interactions

Astro Components (.astro):

- Use Frontmatter (---) for server-side JS/TS only
- HTML-like template syntax
- Scoped CSS by default
- Explicit Props interface
- Prefer Slots for layout and content composition
- Avoid inline scripts unless necessary

Rendering & Hydration:

- Static rendering by default
- Use SSR only when dynamic data is required
- Hydrate only interactive components
  - client:load → immediate
  - client:idle → when main thread is free
  - client:visible → when component enters viewport
  - client:media → when media query matches
  - client:only → skip SSR entirely
- Never hydrate purely presentational components

Content Collections:

- All content must use Content Collections (Markdown/MDX)
- Define schemas using Zod
- Use getCollection() and getEntry() for data access
- Generate routes dynamically from content
- Enforce consistent frontmatter across content types

SEO & Metadata:

- Always define:
  - title
  - description
  - canonical URL
  - OpenGraph metadata
- Generate sitemap via integration
- Prefer semantic HTML
- Ensure heading hierarchy (h1 → h6)
- Use optimized images with alt text

Performance:

- Use <Image /> for optimized images
- Avoid client-side state when static content is sufficient
- Lazy-load media where possible
- Keep bundle size minimal
- Prefer build-time computation over runtime logic

Styling:

- Scoped CSS by default
- TailwindCSS for utility styling
- Minimal, Notion-like color palette
- Favor readability and spacing over decoration

Features:

- View Transitions (<ViewTransitions />) for navigation
- Image Optimization (<Image />)
- Middleware for request handling
- Integrations (Sitemap, Tailwind)
- SSR Adapters (Node) when needed

Best Practices:

- Prefer .astro components for static UI
- Use framework components only for interactivity
- Keep components small and composable
- Avoid overusing client directives
- Reuse generic components when patterns repeat
- Content structure must remain stable over time
- **Add more skills and workflows if a new one needed**

# Emre's Portfolio - Astro

A minimal, content-driven personal portfolio website built with [Astro](https://astro.build).

## ✨ Features

- **Content-First Architecture**: 100% static HTML by default (MPA) with zero client-side JavaScript overhead.
- **Content Collections**: Type-safe Markdown content for Blog, Projects, Travel, Book Notes, and Tech Stack.
- **Mobile-First Design**: Fully responsive layout with optimized mobile navigation and hamburger menu.
- **Interactions**: Smooth animations for page transitions and UI elements.
- **Dark Mode**: Automatic theme switching based on system preference.
- **SEO Optimized**: Canonical URLs, Open Graph tags, and semantic HTML.
- **Tooling**: Configured with ESLint and Prettier for code quality.

## 🛠 Tech Stack

- **Framework**: Astro 5
- **Styling**: CSS Variables (Notion-like minimal design)
- **Icons**: `astro-icon` + FontAwesome (via Iconify)
- **Validation**: Zod (for Content Collections)

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── components/   # Reusable UI (Header, Footer, Card, etc.)
│   ├── content/      # Markdown collections (blog, projects, etc.)
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   └── styles/       # Global CSS tokens
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally                       |
| `npm run lint`            | Run ESLint to check for code issues              |
| `npm run format`          | Format code with Prettier                        |

## � License

This project is open source and available under the [MIT License](LICENSE).

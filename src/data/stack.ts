export type TechCategory = 'languages' | 'frontend' | 'backend' | 'testing' | 'devops' | 'tools';

export interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
  url?: string;
}

export const stack: TechItem[] = [
  // Languages
  { name: 'HTML5', icon: 'fa6-brands:html5', category: 'languages' },
  { name: 'CSS3', icon: 'fa6-brands:css3-alt', category: 'languages' },
  { name: 'JavaScript', icon: 'fa6-brands:js', category: 'languages' },
  { name: 'TypeScript', icon: 'fa6-solid:code', category: 'languages' },
  { name: 'SASS', icon: 'fa6-brands:sass', category: 'languages' },

  // Frontend
  { name: 'React.js', icon: 'fa6-brands:react', category: 'frontend' },
  { name: 'Astro.js', icon: 'simple-icons:astro', category: 'frontend' },
  { name: 'NextJS', icon: 'fa6-solid:n', category: 'frontend' },
  { name: 'Gatsby', icon: 'fa6-solid:g', category: 'frontend' },
  { name: 'Sanity', icon: 'fa6-solid:s', category: 'frontend' },
  { name: 'Storybook', icon: 'fa6-solid:book-open', category: 'frontend' },
  { name: 'Tailwind', icon: 'fa6-brands:css3', category: 'frontend' },
  { name: 'Bootstrap', icon: 'fa6-brands:bootstrap', category: 'frontend' },
  { name: 'Material UI', icon: 'fa6-brands:react', category: 'frontend' },
  {
    name: 'Styled Components',
    icon: 'fa6-solid:paintbrush',
    category: 'frontend',
  },
  { name: 'Redux', icon: 'fa6-solid:rotate', category: 'frontend' },
  { name: 'React Query', icon: 'fa6-solid:database', category: 'frontend' },

  // Backend
  { name: 'NodeJS', icon: 'fa6-brands:node', category: 'backend' },
  { name: 'ExpressJS', icon: 'fa6-brands:node-js', category: 'backend' },
  { name: 'MongoDB', icon: 'fa6-brands:envira', category: 'backend' },
  { name: 'Firebase', icon: 'fa6-solid:fire', category: 'backend' },

  // Testing
  { name: 'Cypress', icon: 'fa6-solid:eye', category: 'testing' },

  // DevOps
  { name: 'Git', icon: 'fa6-brands:git-alt', category: 'devops' },
  { name: 'GitHub', icon: 'fa6-brands:github', category: 'devops' },
  { name: 'Docker', icon: 'fa6-brands:docker', category: 'devops' },

  // Tools
  { name: 'Agile', icon: 'fa6-solid:users-gear', category: 'tools' },
  { name: 'Jira', icon: 'fa6-brands:jira', category: 'tools' },
  { name: 'Postman', icon: 'fa6-solid:paper-plane', category: 'tools' },
  { name: 'Statsig', icon: 'fa6-solid:chart-line', category: 'tools' },
  { name: 'Storyblok', icon: 'fa6-solid:cubes', category: 'tools' },
  { name: 'FullStory', icon: 'fa6-solid:video', category: 'tools' },
];

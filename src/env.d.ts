/// <reference types="astro/client" />

interface Frontmatter {
  title: string;
  description?: string;
  tags?: (string | undefined)[];
}

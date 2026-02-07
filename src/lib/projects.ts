import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import type ProjectDTO, { ImageType } from "@/app/models/ProjectDTO";
import type NameLinkDTO from "@/app/models/NameLinkDTO";

const contentDir = path.join(process.cwd(), "content", "projects");
const markdown = new MarkdownIt({
  html: true,
  linkify: true,
});

export interface Project extends ProjectDTO {
  slug: string;
  order: number;
}

interface ProjectFrontmatter {
  slug?: string;
  name: string;
  type: string;
  date: string;
  order?: number;
  card: {
    title: string;
    date: string;
    slug?: string;
    image: ImageType;
    tags: string[];
  };
  headLineImage: ImageType;
  members?: string[];
  links?: NameLinkDTO[];
}

let cachedProjects: Project[] | null = null;

function getProjectFiles(): string[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));
}

function normalizeProject(
  fileName: string,
  frontmatter: ProjectFrontmatter,
  contentHtml: string
): Project {
  const slugFromFile = path.basename(fileName, ".md");
  const slug = frontmatter.slug ?? slugFromFile;
  const cardSlug = frontmatter.card.slug ?? slug;

  return {
    slug,
    order: typeof frontmatter.order === "number" ? frontmatter.order : 0,
    name: frontmatter.name,
    type: frontmatter.type,
    date: frontmatter.date,
    card: {
      ...frontmatter.card,
      slug: cardSlug,
    },
    headLineImage: frontmatter.headLineImage,
    members: frontmatter.members ?? [],
    links: frontmatter.links ?? [],
    contentHtml,
  };
}

export function getAllProjects(): Project[] {
  const shouldCache = process.env.NODE_ENV === "production";

  if (shouldCache && cachedProjects) {
    return cachedProjects;
  }

  const projects = getProjectFiles().map((fileName) => {
    const fullPath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    const contentHtml = markdown.render(content);

    return normalizeProject(fileName, data as ProjectFrontmatter, contentHtml);
  });

  const sortedProjects = projects.sort((a, b) => a.order - b.order);

  if (shouldCache) {
    cachedProjects = sortedProjects;
  }

  return sortedProjects;
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project | null {
  const project = getAllProjects().find((item) => item.slug === slug);
  return project ?? null;
}

import ProjectPageClient from "./ProjectPageClient";
import { getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/projects";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="flex justify-center items-center text-xl font-hubot p-6 sm:p-12 md:p-24 lg:p-32 xl:p-48">
        Sorry, this project does not exist.
      </div>
    );
  }

  const projects = getAllProjects();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextIndex = (projectIndex + 1) % projects.length;
  const nextProject =
    projects.length > 1 && projectIndex !== -1 ? projects[nextIndex] : null;

  return <ProjectPageClient project={project} nextProject={nextProject} />;
}

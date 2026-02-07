"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject: Project | null;
}

export default function ProjectPageClient({ project, nextProject }: Props) {
  const router = useRouter();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [crossed, setCrossed] = useState(false);
  const hasNextProject = Boolean(
    nextProject && nextProject.card.slug !== project.card.slug
  );

  useEffect(() => {
    if (!hasNextProject || !elementRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCrossed(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [hasNextProject]);

  useEffect(() => {
    if (!crossed || !nextProject) {
      return;
    }

    const timer = setTimeout(() => {
      router.push(`/portfolio/${nextProject.card.slug}`);
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timer);
  }, [crossed, nextProject, router]);

  return (
    <div id="content">
      <div className="py-10 max-w-5xl mx-auto" style={{ color: "#1944D0" }}>
        <div className="mb-10" style={{ color: "#1944D0" }}>
          <Link href="/#portfolio">
            <button>
              <h1
                id="start"
                className="text-lg underline underline-offset-2 font-space"
              >
                {"< "}Portfolio
              </h1>
            </button>
          </Link>
        </div>
        <div>
          <div className="pb-5">
            <p className="font-space text-md">{`{${project.type}}`}</p>
            <h1 className="font-space text-5xl mt-2">{project.name}</h1>
            <table className="font-space text-md md:text-lg mt-5 border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="min-w-[85px] md:min-w-[125px] align-top">
                    DATE:
                  </td>
                  <td>{project.date}</td>
                </tr>
                <tr>
                  <td className="min-w-[85px] md:min-w-[125px] align-top">
                    TEAM:
                  </td>
                  <td>
                    {project.members.map((member, index) => (
                      <p key={index}>
                        {member}
                        {index < project.members.length - 1 && ", "}
                      </p>
                    ))}
                  </td>
                </tr>
                {project.links.map((link, index) => (
                  <tr key={index}>
                    <td className="min-w-[85px] md:min-w-[125px] align-top">
                      {link.name}:
                    </td>
                    <td>
                      {link.private ? (
                        <span>Private (available on request)</span>
                      ) : (
                        <Link className="underline" href={link.link}>
                          Link
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Image
            className="m-auto pb-5"
            width={project.headLineImage.width}
            height={project.headLineImage.height}
            src={project.headLineImage.url}
            alt="image"
          />

          <div
            className="font-hubot text-lg space-y-6 [&>h1]:font-space [&>h1]:text-xl [&>h2]:font-space [&>h2]:text-xl [&>h3]:font-space [&>h3]:text-lg [&>p]:leading-relaxed [&>img]:my-6 [&>img]:mx-auto"
            style={{ color: "#1944D0" }}
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />

          {hasNextProject && nextProject && (
            <div className="mt-32">
              <hr
                className="h-px border-0"
                style={{ backgroundColor: "#1944D0" }}
              />
              <p className="font-hubot text-xl pt-1">Next Project</p>
              <p className="font-hubot text-sm">Scroll to View</p>
              <div className="relative pb-5 mt-20">
                <p className="font-space text-md">{`{${nextProject.type}}`}</p>
                <h1 className="font-space text-5xl mt-2">
                  {nextProject.name}
                </h1>
                <table className="font-space text-md md:text-lg mt-5 border-separate border-spacing-y-2">
                  <tbody>
                    <tr>
                      <td className="min-w-[85px] md:min-w-[125px] align-top">
                        DATE:
                      </td>
                      <td>{nextProject.date}</td>
                    </tr>
                    <tr>
                      <td className="min-w-[85px] md:min-w-[125px] align-top">
                        TEAM:
                      </td>
                      <td>
                        {nextProject.members.map((member, index) => (
                          <p key={index}>
                            {member}
                            {index < nextProject.members.length - 1 && ", "}
                          </p>
                        ))}
                      </td>
                    </tr>
                    {nextProject.links.map((link, index) => (
                      <tr key={index}>
                        <td className="min-w-[85px] md:min-w-[125px] align-top">
                          {link.name}:
                        </td>
                        <td>
                          {link.private ? (
                            <span>Private (available on request)</span>
                          ) : (
                            <Link className="underline" href={link.link}>
                              Link
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div ref={elementRef}>
                <Image
                  className="m-auto"
                  width={nextProject.headLineImage.width}
                  height={nextProject.headLineImage.height}
                  src={nextProject.headLineImage.url}
                  alt="image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

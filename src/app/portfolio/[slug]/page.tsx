"use client";
import Link from "next/link";
import Projects from "../data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();

  const projectIndex = Projects.findIndex((p) => p.card.slug === slug);
  const project = Projects[projectIndex];

  const nextIndex = (projectIndex + 1) % Projects.length;
  const nextProject = Projects[nextIndex];

  const elementRef = useRef<HTMLDivElement | null>(null);

  // "crossed" means the user has scrolled so the next project is fully in view
  const [crossed, setCrossed] = useState(false);

  // If a user wants multiple "scroll passes," you can track a counter:
  // const [scrollPasses, setScrollPasses] = useState(0);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If we want "full" visibility, set threshold = 1 below
          if (entry.isIntersecting) {
            setCrossed(true);

            // If you need multiple passes, do:
            // setScrollPasses((prev) => prev + 1);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        // threshold=1 means the element must be 100% in view
        threshold: 1,
      }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  // Optional: Add a short delay or other logic once fully in view
  useEffect(() => {
    if (crossed) {
      // If you want a short delay:
      const timer = setTimeout(() => {
        console.log("Navigated to: " + nextProject.card.title);
        router.push(nextProject.card.slug);
        window.scrollTo(0, 0);
      }, 500); // 0.5s delay (adjust to taste)

      return () => clearTimeout(timer);
    }
  }, [crossed, nextProject, router]);

  // If no valid project is found
  if (projectIndex === -1) {
    return (
      <div className="flex justify-center items-center text-xl font-hubot p-6 sm:p-12 md:p-24 lg:p-32 xl:p-48">
        Sorry, this project does not exist.
      </div>
    );
  }

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
          {/* Current Project */}
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

          {/* Dynamically Render Rows */}
          {project.rows.map((row, rowIndex) => (
            <div
              className={`grid grid-cols-1 md:grid-cols-${row.cells.length} gap-4 py-5`}
              key={rowIndex}
            >
              {row.cells.map((cell, cellIndex) => (
                <div className="content-center" key={cellIndex}>
                  {cell.image && (
                    <Image
                      className="m-auto"
                      width={cell.image.width}
                      height={cell.image.height}
                      src={cell.image.url}
                      alt="image"
                    />
                  )}
                  {cell.paragraph && (
                    <>
                      {cell.paragraph.title ? (
                        <div>
                          <p
                            className="font-space text-l font-bold pb-2"
                            style={{ color: "#1944D0" }}
                          >
                            {`{${cell.paragraph.title}}`}
                          </p>
                          <p
                            className="font-hubot text-lg"
                            style={{ color: "#1944D0" }}
                          >
                            {cell.paragraph.body}
                          </p>
                        </div>
                      ) : (
                        <p
                          className="font-hubot text-lg"
                          style={{ color: "#1944D0" }}
                        >
                          {cell.paragraph.body}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Next Project Preview */}
          {projectIndex !== nextIndex && (
            <div className="mt-32">
              <hr
                className="h-px border-0"
                style={{ backgroundColor: "#1944D0" }}
              />
              <p className="font-hubot text-xl pt-1">Next Project</p>
              <p className="font-hubot text-sm">Scroll to View</p>
              <div className="relative pb-5 mt-20">
                <p className="font-space text-md">{`{${nextProject.type}}`}</p>
                <h1 className="font-space text-5xl mt-2">{nextProject.name}</h1>
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

              {/* The element we observe to trigger navigation */}
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

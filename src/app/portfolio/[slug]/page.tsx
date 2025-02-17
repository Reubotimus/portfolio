"use client";
import Link from "next/link";
import Projects from "../data";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = Projects.find((p) => p.card.slug === slug);

  if (project === undefined) {
    return (
      <div className="flex justify-center items-center text-xl font-bold p-6 sm:p-12 md:p-24 lg:p-32 xl:p-48">
        Sorry, this project does not exist.
      </div>
    );
  }

  return (
    <>
      <div className="py-10 max-w-5xl mx-auto" style={{ color: "#1944D0" }}>
        <div className="mb-10" style={{ color: "#1944D0" }}>
          <Link href="/#portfolio">
            <button>
              <h1 className="text-lg underline underline-offset-2 font-space">
                {"< "}Portfolio
              </h1>
            </button>
          </Link>
        </div>
        <div>
          <div className="pb-5">
            <p className="font-space text-md">{`{${project.type}}`}</p>
            <h1 className="font-space text-5xl mt-2">{project.name}</h1>
            <table className="font-space text-lg mt-5 border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="min-w-[125px] align-top">DATE:</td>
                  <td>{project.date}</td>
                </tr>
                <tr>
                  <td className="min-w-[125px] align-top">TEAM:</td>
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
                    <td className="min-w-[125px] align-top">{link.name}:</td>
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

          {project.rows.map((row, rowIndex) => (
            <div
              className={`grid grid-cols-1 md:grid-cols-${row.cells.length} gap-4 py-2`}
              key={rowIndex}
            >
              {row.cells.map((cell, cellIndex) => (
                <div key={cellIndex}>
                  {cell.image && (
                    <Image
                      className=" m-auto"
                      width={cell.image.width}
                      height={cell.image.height}
                      src={cell.image.url}
                      alt="image"
                    />
                  )}
                  {cell.paragraph && (
                    <>
                      {cell.paragraph.title ? (
                        <div className="my-8">
                          <p
                            className="font-space text-sm"
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
                          className="font-space text-lg"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-space text-sm pt-5">{`{SKILLS LEARNT}`}</p>
              <div className="font-hubot">
                {project.skills.map((skill, index) => (
                  <p key={index}>{`» ${skill}`}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-space text-sm pt-5">{`{KEY TAKEAWAYS}`}</p>
              <div className="font-hubot">
                {project.keyTakeaways.map((takeaway, index) => (
                  <p key={index}>{`» ${takeaway}`}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-space text-sm pt-5">{`{CHALLENGES FACED}`}</p>
              <div className="font-hubot">
                {project.challenges.map((challenge, index) => (
                  <p key={index}>{`» ${challenge}`}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-space text-sm pt-5">{`{DEVELOPMENT STAGES}`}</p>
              <div className="font-hubot">
                {project.stages.map((stage, index) => (
                  <p key={index}>
                    <b>{stage.title}</b> - {stage.detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import Projects from "../data";
import { useParams } from "next/navigation";

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

          <h1 className="font-mono text-xl pt-5">Project Description</h1>
          <p className="pl-2">{project.description}</p>

          <h1 className="font-mono text-xl pt-5">Skills Learnt</h1>
          <ul className="list-disc list-inside pl-2">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h1 className="font-mono text-xl pt-5">Key Takeaways</h1>
          <ul className="list-disc list-inside pl-2">
            {project.keyTakeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>

          <h1 className="font-mono text-xl pt-5">Challenges Faced</h1>
          <ul className="list-disc list-inside pl-2">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>

          <h1 className="font-mono text-xl pt-5">Development Stages</h1>
          <ul className="text-md pl-2 list-inside">
            {project.stages.map((stage, index) => (
              <li key={index}>
                <i>{stage.title}</i> - {stage.detail}
              </li>
            ))}
          </ul>

          <h1 className="font-mono text-xl pt-5">Architecture</h1>
          <p className="pl-2">{project.architecture}</p>

          <h1 className="font-mono text-xl pt-5">Future Improvements</h1>
          <ul className="list-disc list-inside pl-2">
            {project.futureImprovements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

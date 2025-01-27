"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Carousel from "../../components/Carousel";
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
      <div className="mt-5">
        <Link href="/portfolio">
          <button className="hover:text-teal-600">
            <div className="flex flex-row items-center -m-1.5">
              <div className="text-xl">
                <IoIosArrowBack />
              </div>
              <h1 className="text-lg">Portfolio</h1>
            </div>
          </button>
        </Link>
      </div>

      <div className="py-10 px-1 md:px-15 lg:px-15 max-w-6xl mx-auto">
        <div className="flex flex-col justify-center">
          <div className="pb-5">
            <h1 className="font-mono text-4xl font-bold">{project.name}</h1>
            <p className="text-md text-gray-600">
              <strong>Date: </strong>
              <span>{project.date}</span>
            </p>
            <p className="text-md text-gray-600">
              <strong>Group: </strong>
              {project.members.map((member, index) => (
                <span key={index}>
                  {member}
                  {index < project.members.length - 1 && ", "}
                </span>
              ))}
            </p>

            {project.links.map((link, index) => (
              <p key={index} className="text-md text-gray-600">
                <strong>{link.name}: </strong>
                {link.private ? (
                  <span>Private (available on request)</span>
                ) : (
                  <Link
                    className="underline hover:text-teal-600"
                    href={link.link}
                  >
                    Link
                  </Link>
                )}
              </p>
            ))}
          </div>

          <Carousel project={project} />

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

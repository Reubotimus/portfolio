import Image from "next/image";
import Link from "next/link";
import ProjectDTO from "../models/ProjectDTO";

interface Props {
  project: ProjectDTO;
}

function PortfolioCard({ project }: Props) {
  return (
    <div className="card w-full max-w-lg bg-base-100">
      <Link href={`portfolio/${project.card.slug}`}>
        <figure className="rounded-t-lg">
          <Image
            src={project.card.image}
            width={1920}
            height={1080}
            alt={project.card.imageAlt}
          ></Image>
        </figure>
      </Link>
      <div className="card-body border-solid border-2 rounded-b-lg border-gray-600">
        <Link href={`portfolio/${project.card.slug}`}>
          <h2 className="card-title font-mono">{project.card.title}</h2>
        </Link>
        <time className="text-sm">Date: {project.card.date}</time>
        <p>{project.card.description}</p>
        <div className="card-actions justify-end pt-1">
          {project.card.tags.map((item, index) => {
            return (
              <div key={index} className="badge badge-outline border-gray-600">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;

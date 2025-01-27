import PortfolioCard from "../components/PortfolioCard";
import Projects from "./data";

const ProjectsPage = () => {
  return (
    <div className="flex content-center justify-center py-10">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20">
        {Projects.map((project, index) => {
          return <PortfolioCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;

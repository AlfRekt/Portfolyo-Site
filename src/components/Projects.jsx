import { useAppContext } from "../context/AppContext";
import { data } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { state } = useAppContext();
  const { darkMode, language } = state;

  const { title, projects } = data[language].projectsSection;

  return (
    <section
      className={`relative flex justify-center w-full px-4 md:px-[60px] lg:px-[120px] py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#484148]" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1256px]">
        <h2
          className={`text-center text-[36px] md:text-[48px] font-medium !mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-20 md:gap-16 w-full pb-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
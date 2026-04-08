import { useAppContext } from "../context/AppContext";
import { data } from "../data";

export default function Skills() {
  const { state } = useAppContext();
  const { darkMode, language } = state;
  const { title, skills } = data[language].skillsSection;

  return (
    <section
      className={`w-full py-16 flex flex-col items-center transition-colors duration-300 ${
        darkMode ? "bg-[#484148]" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1256px] px-4 md:px-[60px] lg:px-0 mb-12">
        <h2
          className={`text-center text-[36px] md:text-[48px] font-medium mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 md:mt-16">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-20 h-20 md:w-30 md:h-30 rounded-2xl flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200 cursor-default ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <img
                  src={`/${skill.icon}`}
                  alt={skill.name}
                  className="object-contain"
                />
              </div>
              <span
                className={`text-base md:text-2xl font-medium uppercase ${
                  darkMode ? "text-white" : "text-[#777777]"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
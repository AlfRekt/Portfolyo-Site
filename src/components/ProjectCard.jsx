import { useAppContext } from "../context/AppContext";
import { data } from "../data";
import { Badge } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import useApi from "../hooks/useApi";
import {postProject} from "../api";
 

function ProjectCard({ project, darkMode, language }) {
  const { execute, loading } = useApi(postProject);

  const handleGoToApp = async () => {
    const result = await execute(project);
 
    if (result.success) {
      console.log(result.data);
      toast.success(
        <div>
          {language==="en" ? (<p className="font-bold mb-1">POST Executed Successfully ✅ You can check data from console.</p>)
          :
          (<p className="font-bold mb-1">POST Başarılı ✅ Data'yı konsolda görebilirsin.</p>)
          }
        </div>,
        { autoClose: 5000 }
      );
    } else {
      console.log(result.error);
      toast.error(
        <div>
          { language==="en" ? (<p className="font-bold mb-1">Error ❌ Please check console for details.</p>)
          :
          (<p className="font-bold mb-1">Hata ❌ Lütfen konsolu kontrol et</p>)}
        </div>,
        { autoClose: 5000 }
      );
    }
  };


  return (
    <div
      className={`relative flex-1 rounded-[16px] py-4 px-3 h-[668px] flex flex-col shadow-sm ${
        darkMode ? "bg-[#2D3235]" : "bg-[#E8F4F8]"
      }`}
    >
      <div></div>
      {/* Üst: metin alanı */}
      <div className="p-7 flex flex-col gap-4 flex-1">

        <h3
          className={`text-[29px] font-['Playfair_Display'] !font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>

        <p
          className={`text-[16px] leading-relaxed ${
            darkMode ? "text-[#FFFFFF]" : "text-[#000000]"
          }`}
        >
          {project.description}
        </p>

        {/* Teknoloji tag'leri */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`font-['Playfair_Display'] text-[16px] h-[32px] px-[24px] py-[3px] !border-none !font-bold rounded-full ${
                darkMode
                  ? "bg-[#525252] text-[#FFFFFF]"
                  : "bg-white text-[#000000]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Linkler */}
        <div className="flex justify-between items-center mt-2">
          <a
            target="_blank"
            rel="noreferrer"
            className={`text-[20px] !no-underline !font-semibold hover:underline ${
              darkMode ? "!text-white" : "!text-black"
            }`}
          >
            {project.github}
          </a>
          <button
            onClick={handleGoToApp}
            className={`!text-[20px] !no-underline !font-semibold hover:underline ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:underline"
            } ${
              darkMode ? "!text-white" : "!text-black"
            }`}
          >
            {loading ? "Sending..." : project.app.title} 
          </button>
        </div>
      </div>

      {/* Alt: ekran görüntüsü */}
      <div className="w-full h-[220px] overflow-hidden flex items-end justify-center px-6">
        <img
          src={project.screenshot}
          alt={project.name}
          className="absolute bottom-[-50px] w-full object-contain object-bottom drop-shadow-xl"
          onError={(e) => {
              console.log(e);
            }
          }
        />
      </div>
    </div>
  );
}

export default ProjectCard;
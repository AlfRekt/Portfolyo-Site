import { useAppContext } from "../context/AppContext";
import { data } from "../data";

export default function ModeSwitch() {
  const { state, toggleDarkMode, toggleLanguage } = useAppContext();
  const { darkMode, language } = state;

  const navDarkMode  = language === "en" ? "DARK MODE"    : "KARANLIK MOD";
  const navLightMode = language === "en" ? "LIGHT MODE" : "AYDINLIK MOD";

  return (
    <div className="flex items-center gap-3 text-sm font-medium">
      {/* Toggle switch */}
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex h-6 w-11 items-center !rounded-full transition-colors duration-300 focus:outline-none ${darkMode ? 'bg-black' : 'bg-pink-500'}`}
        aria-label="Toggle dark mode"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full shadow-md transition-transform duration-300 ${
            darkMode ? "translate-x-1 bg-white" : "translate-x-6 bg-[#FFE86E]"
          }`}
        />
      </button>

      <span className={`tracking-[10%] font-bold ${darkMode ? "text-[#D9D9D9]" : "text-[#777777]"}`}>
        {darkMode ? navLightMode : navDarkMode}
      </span>

      <span className={darkMode ? "text-[#D9D9D9] font-bold" : "text-[#777777] font-bold"}>|</span>

      <button
        onClick={toggleLanguage}
        className={`font-bold tracking-[10%] transition-colors ${
          darkMode ? "text-[#D9D9D9]" : "text-[#777777]"
        }`}
      >
        {language === "en" ? (
          <> 
            <span className={darkMode ? "text-pink-400" : "text-pink-500"}>
              TÜRKÇE
            </span>
            {"'YE GEÇ"}
          </>
        ) : (
          <>
            SWITCH TO{" "}
            <span className={darkMode ? "text-pink-400" : "text-pink-500"}>
              EN
            </span>  
          </>
        )}
      </button>
    </div>
  );
}
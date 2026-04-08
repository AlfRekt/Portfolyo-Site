import ModeSwitch from "./ModeSwitch";
import { useAppContext } from "../context/AppContext";
import { data } from "../data";

export default function Hero() {
  const { state } = useAppContext();
  const { darkMode, language } = state;

  const { greeting, intro, profileImage, socials, ctaHTML } =
    data[language].heroSection;

  return (
    <section
      className={`relative min-h-[480px] flex flex-col items-center w-full px-4 md:px-[60px] lg:px-[120px] overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-[#2A262B]" : "bg-gray-100"
      }`}
    >
      <div className="w-full max-w-[1256px]">
        <div className="flex justify-end pt-6 pb-2">
          <ModeSwitch />
        </div>

        {/* Main content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-10 lg:py-35 gap-20 w-full">

          {/* Left */}
          <div className="flex-1 min-w-0 w-full px-4 md:!px-0">
            <p className={`text-[24px] md:text-[30px] mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              {greeting}
            </p>

            <h1 className={`text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {intro}
            </h1>

            <div className="mt-5">
              <div className="flex items-center gap-3 mb-4">
                {socials.map((social) => (
                  <a
                    key={social.alt_text}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.alt_text}
                    className={`transition-opacity hover:opacity-70 ${darkMode ? "invert" : ""}`}
                  >
                    <img
                      src={`/${social.logo}`}
                      alt={social.alt_text}
                      className="w-7 h-7 object-contain"
                    />
                  </a>
                ))}
              </div>

              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                dangerouslySetInnerHTML={{ __html: ctaHTML }}
              />
            </div>
          </div>

          {/* Right */}
          <div className="relative pt-[12px] pl-[12px] flex-shrink-0">
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[341px] md:h-[341px] rounded-2xl bg-[#E92577]" />
            <div className="relative w-[240px] h-[240px] md:w-[341px] md:h-[341px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`/${profileImage}`}
                alt="profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
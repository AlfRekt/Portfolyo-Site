import { useAppContext } from "../context/AppContext";
import { data } from "../data";

function Profile() {
  const { state } = useAppContext();
  const { darkMode, language } = state;

  const { title, personalInformations, aboutMe } =
    data[language].profileSection;

  const infoRows = [
    { label: personalInformations.dateOfBirth.title, value: personalInformations.dateOfBirth.date },
    { label: personalInformations.residence.title,   value: personalInformations.residence.city },
    { label: personalInformations.degree.title,      value: personalInformations.degree.city },
    { label: personalInformations.position.title,    value: personalInformations.position.position },
  ];

  return (
    <section
      className={`relative flex justify-center w-full px-4 md:px-[60px] lg:px-[120px] py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#2A262B]" : "bg-gray-100"
      }`}
    >
      <div className="w-full max-w-[1256px]">
        <h2
          className={`text-center text-[32px] md:text-[36px] font-medium mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>

        {/* Column Parent*/}
        <div className="flex flex-col md:flex-row gap-10 px-4 md:!px-0 md:gap-20 w-full">

          {/* Left */}
          <div className="relative flex-1 pt-4 pl-4 -translate-x-4">
            <div
              className="absolute top-8 left-7 w-[97%] h-[94%] rounded-[12px]"
              style={{ backgroundColor: "#52525280" }}
            />
            <div
              className={`relative rounded-[12px] p-6 md:p-9 shadow-sm ${
                darkMode ? "bg-[#525252]" : "bg-white"
              }`}
            >
              <p className="text-[#EA2678] text-[18px] md:text-[24px] font-semibold font-['Playfair_Display'] mb-6 md:mb-7">
                {personalInformations.title}
              </p>

              <div className="flex flex-col gap-3">
                {infoRows.map(({ label, value }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                    <span
                      className={`font-bold text-[15px] md:text-[18px] sm:w-[180px] shrink-0 ${
                        darkMode ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      className={`text-[15px] md:text-[18px] ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col justify-start md:mt-8 md:pt-4">
            <p className="text-[#EA2678] text-[18px] md:text-[24px] font-['Playfair_Display'] font-semibold border-b-2 border-[#EA2678] pb-1 w-fit mb-4">
              {aboutMe.title}
            </p>
            <p
              className={`text-[15px] md:text-[18px] leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {aboutMe.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;
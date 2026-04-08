import { useAppContext } from "../context/AppContext";
import { data } from "../data";
function Footer()
{
    const { state } = useAppContext();
    const { darkMode, language } = state;

    const {text,socials} = data[language].footerSection;

    return (
        <section className={`w-full flex justify-center px-4 md:px-[60px] lg:px-[120px] transition-colors duration-300 ${
        darkMode ? "bg-[#2A262B]" : "bg-white"
      }`}>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-[48px] md:mt-[84px] mb-[64px] md:mb-[128px] gap-8">
                    <p className={`text-[42px] md:text-[42px] leading-[1.5] font-medium max-w-full md:max-w-[541px] text-center md:!text-end ${darkMode ? "text-white" : "text-black"}`}>{text}</p>
                    <ul className="list-none p-0 m-0 flex flex-row md:!flex-col flex-wrap justify-center gap-x-6 gap-y-2 md:flex-col md:gap-x-0 md:gap-y-0">
                        {socials.map((social,index)=>(
                            <li key={index}><a href={social.link} className={`!no-underline text-[24px] font-medium`} style={{ color: social.color }}>{social.title}</a></li>
                        ))}
                    </ul>
                </div>
        </section>
    )
}

export default Footer;
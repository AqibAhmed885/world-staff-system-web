import { sections } from "../../utils/data";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Guide = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  
  return (
    <div className="mx-auto my-10 ">
      {sections.map((section) => (
        <section key={section.id} className={`my-10   ${section.imgPosition === "left" ? "bg-gray-100" : ""}`}>
          <div className="lg:w-[80%] mx-auto">
          <div className={`flex flex-col-reverse md:flex-row items-center ${section.imgPosition === "right" ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-1/2 p-4" data-aos="flip-right">
              <img src={section.imgSrc} alt={section.imgAlt} className="w-full " />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {section.title.split(" ")[0]} <span className="text-custom">{section.title.split(" ")[1]} {section.title.split(" ")[2]}</span>
              </h2>
              <div className="border-b-4 border-custom w-16 mb-4"></div>
              <p className="text-gray-700">{section.text}</p>
            </div>
          </div>
          </div>
        </section>
      ))}
    </div>
  );
};



export default Guide;

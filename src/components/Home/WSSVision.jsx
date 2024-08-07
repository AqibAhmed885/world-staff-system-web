import React, { useEffect } from "react";
import {
  FaGalacticRepublic,
  FaGlobe,
  FaProductHunt,
  FaOldRepublic,
} from "react-icons/fa";
import VisionCard from "./VisionCard";
import AOS from "aos";
import "aos/dist/aos.css";
// import [useEffect] from 'react'

const WssVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className=" bg-gray-100">
      <div className="w-[80%] mx-auto py-14">
        <div className=" mt-5 text-center">
          <h2 className="text-2xl font-bold">
            Our <span className="text-[#0e87c4]">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-[#0e87c4] mt-2 mx-auto"></div>
        </div>
        <p className="w-[75%] mx-auto text-center mx-md-5 mx-2">
          World Staff System (WSS) recognizes the global need for employment. We
          aim to provide world-class, personalized service and opportunities for
          Pakistanis to work in developed countries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 ">
          <div  className="card" data-aos="flip-left">
            <VisionCard
              
              icon={<FaGalacticRepublic size={48} />}
              title="Reliable Services"
              description="Constantly provide our best services to our clients who are competent, reliable, and dedicated."
            />
          </div>

          <div  className="card" data-aos="flip-left">
            <VisionCard
              
              icon={<FaGlobe className="icon_color" size={48} />}
              title="Pro Pakistani"
              description="Help Pakistanis enhance their competence thereby raising the competitiveness of the Pakistani workforce."
            />
          </div>

          <div  className="card" data-aos="flip-left">
            <VisionCard
          
              icon={<FaProductHunt size={48} />}
              title="Productive Force"
              description="Continuously develop our workers professionally to produce the best, reliable, and friendly workforce."
            />
          </div>

          <div  className="card" data-aos="flip-left">
            <VisionCard
              icon={<FaOldRepublic size={48} />}
              title="Quick Turnouts"
              description="Attain all the requirements of our clients in the shortest possible time."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WssVision;

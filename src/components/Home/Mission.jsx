/** @format */

// import React from 'react';
import Missimg from "../../assets/Mission/mission.jpg";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Mission = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh();
  }, []);  
  return (
    <div className="bg-gray-100 my-3">
      <div className="flex flex-col lg:flex-row-reverse gap-4 mx-auto w-[80%] px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 pb-3 mt-5">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Our <span className="text-custom">Mission</span>
          </h2>
          <div className="w-16 h-1 bg-custom my-2"></div>
          <div>
            <div className="text-justify mt-6 lg:mt-0">
              <p className="mb-4">
                The success of an organization depends upon its achievement
                which is associated with the workers' efficiency, and we enhance
                our workers' efficiency as well as customers' services. Our
                mission is not only to satisfy our clients by sourcing manpower
                but also to provide them with the means to acquire
                organizational goals by applying suitable strategies.
              </p>
              <p>
                We are providing our clients up to the mark HR services
                constantly so that they may maintain and retain the
                organizational services in an effective way. Our expert team
                provides professional training, guidance, motivation, and career
                counseling 24/7.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col mx-auto lg:flex-row-reverse items-center justify-center lg:items-start">
            <img
              src={Missimg}
              alt="Mission"
              className="w-90 mx-auto my-auto p-10"
              data-aos="flip-right"
            />
          
        </div>
      </div>
    </div>
  );
};

export default Mission;

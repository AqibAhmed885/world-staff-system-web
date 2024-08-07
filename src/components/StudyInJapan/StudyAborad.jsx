import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const StudyAborad = () => {
  useEffect(() => {
    AOS.init({
      // You can also pass other settings to AOS here
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);
  return (
    <div className="lg:w-[80%] mx-auto my-10 flex flex-col md:flex-row px-4 sm:px-10 md:px-20 gap-5">
      <div className="w-full md:w-1/2 flex flex-col  my-4 md:mb-0">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Planning <span className="text-custom">To Study </span> Abroad?</h1>
        <p className="text-sm md:text-base mt-4 text-justify">
          In Japan, higher education starts upon the completion of 12 years of
          education: elementary education (6 years of elementary school) and
          secondary education (3 years of lower secondary school and 3 years of
          upper secondary school). There are 5 types of higher education
          institutions that international students can be admitted to, which are
          1) colleges of technology, 2) vocational schools (postsecondary course
          of specialized training colleges), 3) junior colleges, 4) universities
          (undergraduate) and 5) graduate schools. Depending on the founding
          bodies, these higher education institutions are categorized into three
          types: national, local public and private, and language courses as
          well.
        </p>
      </div>
      <div className="w-1/2 p-5" data-aos="flip-right">
        <img src="/jap-study.jpeg" alt="" />
      </div>
    </div>
  );
};

export default StudyAborad;

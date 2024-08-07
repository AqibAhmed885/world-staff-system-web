import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const VocationalSchool = () => {
  useEffect(() => {
    AOS.init({
      // You can also pass other settings to AOS here
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row-reverse w-full px-5 md:px-20 bg-gray-100">
      <div className="w-full md:w-1/2 flex flex-col p-5 md:p-20 space-y-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Vocational <span className="text-custom">School</span> </h1>
        <p className="text-gray-600">A vocational school is a school where you can acquire skills and knowledge that are directly related to your profession, and study to acquire qualifications in your specialized field.</p>
        <p className="text-gray-600">You can obtain the title of Diploma (2 years or more) or Advanced Diploma (4 years or more, then you can go on to graduate school), and you can get a work visa by getting a job in the field you learned.</p>
      </div>
      <div className="w-full md:w-1/2" data-aos="flip-right">
        <img src="/jap-school.jpg" alt="" className="p-5 md:p-20 object-cover h-full w-full"/>
      </div>
    </div>
  );
};

export default VocationalSchool;
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"; 

const Graduate = () => {
  useEffect(() => {
    AOS.init({
      // You can also pass other settings to AOS here
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);
  
  return (
    <div className="flex flex-col md:flex-row w-full px-5 md:px-20 bg-gray-100">
    <div className="flex flex-col w-full md:w-1/2 p-5 md:p-20 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Graduate <span className="text-custom">School / University</span> </h1>
      <p className="text-gray-600">You cannot take the EJU exam from your home country, which is a condition for applying for universities and graduate schools. There are few universities that offer direct application and examination from overseas. You have to apply for a visa yourself from scratch. Japanese ability (output/ speaking / writing) is not enough just by studying outside Japan.</p>
      
      <ul className="list-disc list-inside text-gray-600">
        <li>Completed a 12-year curriculum in your home country and have a high school diploma.</li>
        <li>If the education system in your home country is less than 12 years, Japanese language skills equivalent to JLPT N5 or higher or proof of learning 160 hours Have sufficient ability to pay tuition and living expenses in Japan</li>
      </ul>
      
    </div>
    <div className="w-full md:w-1/2" data-aos="flip-right">
      <img src="/jap-gra.jpg" alt="" className="p-5 md:p-20 object-cover h-full w-full"/>
    </div>
  </div>
  );
};
export default Graduate;

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const TITPFeatures = () => {
  const programFeatures = [
    'Japanese Language training',
    'Japanese Company Selection & Placement',
    'Japanese Culture Training',
    'Visa Processing',
    'Air Travel to Japan',
    '1 Month onsite training in Japan before placement',
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          WSS <span className="text-blue-600">TITP Training Program Features</span>
        </h2>
        <div className="border-b-2 border-blue-600 mx-auto w-20 mb-6"></div>
        <p className="text-center text-gray-700 mb-8">
          TITP (Technical Intern Training Program) program is run by Japanese government that facilitates international workers to work for up to 5 years in Japan and learn Japanese way of working. World Staff System is an approved “sending organization” in PAKISTAN under the TITP program that can hire, train and process visa’s for workers to work in Japan. WSS Is an Approved TITP Sending Organization by MSDC, Overseas Employment Corporation, Overseas Employment Promoters, Japan International Trainee and Skilled Worker Cooperation Organization, Organization for Technical Intern Training (OTIT), Embassy of Pakistan in Japan, Embassy of Pakistan in Pakistan, Ministry of Skills Development & Entrepreneurship by Government of PAKISTAN Japan. WSS offers a comprehensive 180 program to ensure your successful TITP placement in Japan.
        </p>
        <h5 className="text-center text-xl font-semibold text-gray-800 mb-4">OUR PROGRAM INCLUDES:</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md">
              <FaCheck className="h-8 w-8 text-blue-600 mb-2" />
              <h5 className="text-lg font-medium text-center text-gray-800">{feature}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TITPFeatures ;

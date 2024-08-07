import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const ReqProcess = ({ steps }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
    });
  }, []);
  return (
    <div className="py-5">
      <div className="container mx-auto text-center py-5">
        <h2 className="text-3xl font-bold mb-2">
          Recruitment <span className="text-blue-500">Process</span>
        </h2>
        <div className="w-24 mx-auto border-b-4 border-blue-500 my-2"></div>
      </div>
      <div className="container mx-auto pb-5">
        <p className="mb-5 text-center">
          Following are the steps to recruit on the Technical Intern Training
          Program (TITP):
        </p>

        <div className="flex justify-center items-center min-h-screen">
          {" "}
          {/* Adjust min-h-screen as needed */}
          <div className="relative border-l border-gray-200 dark:border-gray-700 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-96 border bg-gray-100 p-4 rounded-lg mb-10 ml-6 animate-fadeIn"
              >
                
                <div className="absolute w-3 h-3 p-2 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900">
                
                </div>
                <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">{`Step ${
                  index + 1
                }`}</time>
                
                <h3 className="text-lg font-semibold text-blue-500">
                  {step.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
                {step.list && (
                  <ul className="list-disc list-inside ml-5">
                    {step.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {step.addDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ReqProcess.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string), // Added missing comma here
      addDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReqProcess;

import React from "react";
import background from "../../assets/Japnes/japanstudy.jpg";

const SchoolOffering = () => {
  return (
    <div
      className="lg:h-96 flex flex-col justify-center items-center mx-auto bg-fixed text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-gray-900 bg-opacity-50 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white mb-4  p-3  rounded">
          Japanese Language School Offerings
        </h1>
        <p className="lg:w-[70%] text-lg text-white mx-4 p-4 rounded-lg ">
          You can get a student visa by enrolling in a Japanese language school.
          The Japanese language school will support you from getting a student
          visa to arriving in Japan. The school provides extensive life and
          career guidance. You will have the opportunity to take the JLPT 4
          times and EJU 4 times during your 2 years of study. Even outside of
          class hours, you can deepen your understanding of Japanese society and
          acquire communication skills through cultural experiences and
          part-time jobs.
        </p>
      </div>
    </div>
  );
};

export default SchoolOffering;

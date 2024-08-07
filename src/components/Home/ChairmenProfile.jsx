import React from 'react';
import image from '../../assets/CEO.jpg';

const ChairmenProfile = () => {
  const device = window.innerWidth < 500 ? "mobile" : "desktop";

  return (
    <div className="lg:w-[80%] md:w-full mx-auto my-5">
      <div className="flex py-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              CEO <span className="text-blue-500">Message</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mt-2"></div>
          </div>
          <div className="text-gray-700">
            <p className='text-justify'>
              Human desires are unlimited and everyone tries to achieve them to the maximum extent in their life span but the majority of us fail due to a lack of requisite knowledge, skills, and aptitude. We believe the best ideas come from within; they are inspired by the inner self which converts impossibilities into potentials and shapes dreams into realities.
              <br />
              Our goal is to provide something innovative and different to our clients so that they may get honorable job opportunities at national and international levels. It is a great honor for me to introduce ourselves as a prominent leading recruiting agency of Pakistan. We offer an ideal platform for those who are in search of a job or needing competent manpower. The major aim of World Staff System is to supply qualified, skillful, and competent manpower all over the world. The World Staff System works in an exemplary way and avails all types of facilities provided by the Pakistani Government and other countries of the world.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex mx-auto justify-center items-center" data-aos="flip-left" data-aos-offset="300">
          <div className="pt-10 lg:pt-5">
            <img
              className="rounded"
              style={{
                width: device === 'mobile' ? "350px" : "400px",
                height: device === 'mobile' ? "300px" : "430px",
                paddingLeft: device === 'mobile' ? "0" : "50px"
              }}
              src={image}
              alt="Chairman"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmenProfile;

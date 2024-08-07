import React from "react";
import { Link } from "react-router-dom";
import OurMis from "../../assets/About/about-2.jpg";

const OurMission = () => {
  const isMobile = window.innerWidth < 500;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-100">
           <section className="w-5/6 mx-auto p-5">
      <div className="my-2">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 mt-2 flex flex-col justify-center items-center text-justify">
            <h2 className="text-3xl font-bold">
              Our <span className="text-custom">Mission</span>
            </h2>
            <div className="my-4 border-b-2 border-custom w-24 mx-auto"></div>
            <div className="mt-3">
              <p className="text-sm">
                The success of an organization depends upon its achievement which is associated with the workers' efficiency and we enhance our workers' efficiency as well as customers’ services. Our mission is not only to satisfy our clients by sourcing manpower but also to help them acquire organizational goals by applying suitable strategies. We provide our clients with up-to-the-mark HR services constantly, so that they may maintain and retain organizational services effectively. Our expert team provides professional training, guidance, motivation, and career counseling 24/7.
              </p>
            </div>
            <Link
              to="/register"
              className="bg-custom text-white py-2 px-4 rounded mt-2"
              onClick={scrollToTop}
            >
              Apply Now
            </Link>
          </div>
          <div className="w-full lg:w-1/2 mt-2 flex justify-center items-center">
            <div className=" overflow-hidden" data-aos="zoom-in">
              <img
                className={`w-${isMobile ? '80' : '96'} h-${isMobile ? '80' : '96'}`}
                src={OurMis}
                alt="Our Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurMission;

import React from "react";
// import { Link } from 'react-router-dom';
import PropTypes from "prop-types"; // Step 1: Import PropTypes

const HeroSection = ({ backgroundImageUrl, title, subtitle, btn }) => {
  return (
    <div
      className="h-screen text-center relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {/* Example of passing props */}
          <p className="text-lg text-white mt-4 mb-4">{subtitle}</p>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {btn}
          </button> */}
        </div>
      </div>
    </div>
  );

};
HeroSection.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};
export default HeroSection;

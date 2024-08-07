import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types'; // Step 1: Import PropTypes

const IndustryCard = ({ servicesData, titleOne, titleTwo }) => {
  return (
    <div className="mt-4">
      <div className="text-left">
        <h2 className="text-2xl font-bold">
          {titleOne} <span className="text-program_color">{titleTwo}</span>
        </h2>
        <div className="border-b-4 border-theme-colored-2 my-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {servicesData.map((val, index) => (
          <Card
            key={val.id || index} // Use a unique key if available
            imgsrc={val.imgsrc}
            name={val.name}
            list={val.list}
          />
        ))}
      </div>
    </div>
  );
};

IndustryCard.propTypes = {
  servicesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imgsrc: PropTypes.string,
      name: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
};

export default IndustryCard;

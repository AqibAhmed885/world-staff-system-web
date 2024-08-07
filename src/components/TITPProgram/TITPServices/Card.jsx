// import React from "react";
import PropTypes from "prop-types"; // Step 1

const Card = ({ imgsrc, name, list }) => {
  return (
    <div className="lg:w-96 lg:h-96 md:w-64 md:h-64 sm:w-64 sm:h-64 p-4 text-center">
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={imgsrc}
          alt={name}
          className="w-96 h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center ">
          <div className="text-white p-4">
            <h4 className="text-lg font-bold mb-2">{name}</h4>
            <div className="flex justify-left opacity-0 hover:opacity-100 transition-opacity duration-300">
            <ul className="list-disc list-inside">
              {list.map((item, index) => (
                <li key={index} className="text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 2 & 3: Define and assign prop types
Card.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;

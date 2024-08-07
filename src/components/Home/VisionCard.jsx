
// import React from 'react';
import PropTypes from 'prop-types';

const VisionCard = ({ icon, title, description }) => (
  <div className="w-[80%] mx-auto p-4 bg-white rounded-lg border-2 border-[#0e87c4] flex flex-col items-center justify-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-md text-[#0e87c4]">
      {icon}
    </div>
    <div className="mt-4 text-center text-[#0e87c4]"> {/* Added text-center for explicit text alignment */}
      <h5 className="text-lg font-semibold ">{title}</h5>
      <p className="mt-2 text-sm ">{description}</p>
    </div>
</div>
);

VisionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VisionCard

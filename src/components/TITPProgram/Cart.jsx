import PropTypes from 'prop-types'; // Step 1: Import PropTypes

const Cart = ({ imgsrc, name, description }) => {
    return (
        <div className="col-sm-6 col-md-6 col-lg-4 mt-4">
            <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                    <img src={imgsrc} alt="Product icon" className="w-14 " />
                </div>
                <div className="p-4">
                    <h5 className="font-bold text-lg mb-2">{name}</h5>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Step 2: Define PropTypes
Cart.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Cart;
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormThree = ({ nextStep, prevStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <>
      <div className="border-2 border-custom p-2 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border-2 border-custom p-2 md:p-8 bg-white  mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Postal Address</h1>

          <div className="py-2">
            <label className="block text-gray-700">Postal Address Line 1</label>
            <p className="text-gray-500 text-sm">Please enter your postal address line 1.</p>
            <textarea
              {...register("addressOne", { required: "Postal Address Line 1 is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.addressOne ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.addressOne && (
              <p className="text-red-500 text-sm">{errors.addressOne.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Postal Address Line 2</label>
            <p className="text-gray-500 text-sm">Please enter your postal address line 2.</p>
            <textarea
              {...register("addressTwo", { required: "Postal Address Line 2 is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.addressTwo ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.addressTwo && (
              <p className="text-red-500 text-sm">{errors.addressTwo.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">City or Town Name</label>
            <p className="text-gray-500 text-sm">Please enter the city or town of your postal address.</p>
            <textarea
              {...register("cityTown", { required: "City or Town Name is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.cityTown ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.cityTown && (
              <p className="text-red-500 text-sm">{errors.cityTown.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">State or Prefecture</label>
            <p className="text-gray-500 text-sm">Please enter the state or prefecture of your postal address.</p>
            <textarea
              {...register("statePrefecture", { required: "State or Prefecture is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.statePrefecture ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.statePrefecture && (
              <p className="text-red-500 text-sm">{errors.statePrefecture.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Contact Number</label>
            <p className="text-gray-500 text-sm">Please enter your preferred contact phone number.</p>
            <input
              {...register("contactNumber", { required: "Contact Number is required" })}
              type="number"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.contactNumber ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Status of Residence</label>
            <input
              {...register("residenceStatus", { required: "Status of Residence is required" })}
              type="text"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.residenceStatus ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.residenceStatus && (
              <p className="text-red-500 text-sm">{errors.residenceStatus.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Period of Stay</label>
            <input
              {...register("stayPeriod", { required: "Period of Stay is required" })}
              type="text"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.stayPeriod ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.stayPeriod && (
              <p className="text-red-500 text-sm">{errors.stayPeriod.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Date of Expiration</label>
            <p className="text-gray-500 text-sm">Please enter your date of residence stay period expiration.</p>
            <input
              {...register("residenceExpiration", { required: "Date of Expiration is required" })}
              type="date"
              className={`mt-1 block w-full p-2 border ${errors.residenceExpiration ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.residenceExpiration && (
              <p className="text-red-500 text-sm">{errors.residenceExpiration.message}</p>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-custom hover:bg-blue-400"
            >
              Previous
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-blue-400"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

FormThree.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormThree;

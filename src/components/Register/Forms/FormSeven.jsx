import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormSeven = ({ nextStep, prevStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <>
    <div className='border-2 border-custom p-1'>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border-2 border-custom p-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Financial Support Information</h2>
      
      <div className="py-2">
        <p className="text-gray-700">Method of Financial Support</p>
        <p className="text-gray-500 text-sm">Who will financially support you if selected to study abroad in Japan?</p>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              {...register("financialSupport", { required: "This field is required" })}
              type="radio"
              value="myself"
              className="form-radio"
            />
            <span className="ml-2">Myself - I will support myself financially while studying in Japan</span>
          </label>
          <label className="flex items-center">
            <input
              {...register("financialSupport", { required: "This field is required" })}
              type="radio"
              value="relative"
              className="form-radio"
            />
            <span className="ml-2">Relative - My relative(s) will offer financial support to me while studying in Japan</span>
          </label>
          <label className="flex items-center">
            <input
              {...register("financialSupport", { required: "This field is required" })}
              type="radio"
              value="myself_and_relative"
              className="form-radio"
            />
            <span className="ml-2">Myself & Relative(s) - I will support myself financially with assistance from my relative(s)</span>
          </label>
        </div>
        {errors.financialSupport && (
          <p className="text-red-500 text-sm">{errors.financialSupport.message}</p>
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

FormSeven.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormSeven;

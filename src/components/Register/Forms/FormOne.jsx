import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormOne = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Replace with your form submission logic
    console.log(data);
    nextStep();
  };

  return (
    <div className="border-2 border-custom p-1 md:p-8 lg:p-2 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-custom mx-auto p-4 md:p-8"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">General Information</h1>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-custom">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            className={`mt-1 block w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-custom">
              Given Name (First Name)
            </label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.firstname ? "border-red-500" : "border-gray-300"} rounded-md`}
              {...register("firstname", { required: "First Name is required" })}
              aria-invalid={errors.firstname ? "true" : "false"}
              aria-describedby="firstname-error"
            />
            {errors.firstname && (
              <p id="firstname-error" className="text-red-500 text-xs italic">
                {errors.firstname.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-custom">
              Family Name (Last Name)
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.lastname ? "border-red-500" : "border-gray-300"} rounded-md`}
              {...register("lastname", { required: "Last Name is required" })}
              aria-invalid={errors.lastname ? "true" : "false"}
              aria-describedby="lastname-error"
            />
            {errors.lastname && (
              <p id="lastname-error" className="text-red-500 text-xs italic">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6 mt-6">
          <label className="block text-sm font-medium text-custom">
            Marital Status
          </label>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="marital"
                value="married"
                className="form-radio"
                {...register("marital", { required: "Marital Status is required" })}
                aria-invalid={errors.marital ? "true" : "false"}
                aria-describedby="marital-error"
              />
              <span className="ml-2">Married</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="marital"
                value="single"
                className="form-radio"
                {...register("marital", { required: "Marital Status is required" })}
                aria-invalid={errors.marital ? "true" : "false"}
                aria-describedby="marital-error"
              />
              <span className="ml-2">Single</span>
            </label>
          </div>
          {errors.marital && (
            <p id="marital-error" className="text-red-500 text-xs italic">
              {errors.marital.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-custom">Gender Identity</label>
          <p className="text-gray-500">
            Please enter the gender you wish to identify as. If you do not wish to identify as Male or Female, please answer at your own accord.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="genderId"
                value="male"
                className="form-radio"
                {...register("genderId", { required: "Gender Identity is required" })}
                aria-invalid={errors.genderId ? "true" : "false"}
                aria-describedby="genderId-error"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="genderId"
                value="female"
                className="form-radio"
                {...register("genderId", { required: "Gender Identity is required" })}
                aria-invalid={errors.genderId ? "true" : "false"}
                aria-describedby="genderId-error"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="genderId"
                value="other"
                className="form-radio"
                {...register("genderId", { required: "Gender Identity is required" })}
                aria-invalid={errors.genderId ? "true" : "false"}
                aria-describedby="genderId-error"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.genderId && (
            <p id="genderId-error" className="text-red-500 text-xs italic">
              {errors.genderId.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-custom">
            Gender as written on birth certificate
          </label>
          <p className="text-gray-500">
            Please enter the gender which is written on your birth certificate. We understand that some of this information is sensitive, however this information is important for immigration procedures in Japan.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio"
                {...register("gender", { required: "Gender Identity is required" })}
                aria-invalid={errors.gender ? "true" : "false"}
                aria-describedby="gender-error"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio"
                {...register("gender", { required: "Gender Identity is required" })}
                aria-invalid={errors.gender ? "true" : "false"}
                aria-describedby="gender-error"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                className="form-radio"
                {...register("gender", { required: "Gender Identity is required" })}
                aria-invalid={errors.gender ? "true" : "false"}
                aria-describedby="gender-error"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.gender && (
            <p id="gender-error" className="text-red-500 text-xs italic">
              {errors.gender.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <button type="submit" className="bg-custom hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

FormOne.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default FormOne;

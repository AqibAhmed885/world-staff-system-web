import React, { useState } from 'react';
import ThankYou from './Thankyou';

const FormNine = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const agreeToTerms = formData.get('agreeCheckbox') === 'on'; // Check if the checkbox is checked

    if (agreeToTerms) {
      // Process your form data here
      console.log("Form data submitted: ", { agreeToTerms });
      setFormSubmitted(true); // Display the ThankYou component upon successful submission
    } else {
      // Handle the case where terms are not agreed to, if necessary
      alert("You must agree to the terms to proceed.");
    }
  };

  if (formSubmitted) {
    return <ThankYou />;
  }

  return (
    <div className='border-2 border-custom p-1'>
      <form onSubmit={onSubmit} className="space-y-6 border-2 border-custom p-4 md:max-w-xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Consent Agreement</h2>
        
        <div className="py-2">
          <input
            type="checkbox"
            name="agreeCheckbox"
            id="agreeCheckbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            required
          />
          <label htmlFor="agreeCheckbox" className="ml-2 text-gray-700">
            Yes, I agree to these terms
          </label>
        </div>

        <div className="flex justify-center md:justify-end pt-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNine;

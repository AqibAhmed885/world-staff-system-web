import React, { useState } from 'react';
// import ProgressBar from 'step-progress-bar'; // Assuming this is a custom component or library for your progress bar
import FormOne from './Forms/FormOne';
import FormTwo from './Forms/FormTwo';
import ProgressBar from './ProgressBar.jsx';
import FormThree from './Forms/FormThree.jsx';
import FormFour from './Forms/FormFour.jsx';
import FormFive from './Forms/FormFive.jsx';
import FormSix from './Forms/FormSix.jsx';
import FormSeven from './Forms/FormSeven.jsx';
import FormEight from './Forms/FormEight.jsx';
import FormNine from './Forms/FormNine.jsx';
// import StepOne from './StepOne'; // Import each step component
// import StepTwo from './StepTwo';
// Import other step components as needed

const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;

  // Function to handle moving to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle moving to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to render the appropriate step component based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormOne nextStep={nextStep} />;
      case 2:
        return <FormTwo nextStep={nextStep} prevStep={prevStep} />;
    case 3:
        return <FormThree nextStep={nextStep} prevStep={prevStep} />;
    case 4:
        return <FormFour nextStep={nextStep} prevStep={prevStep} />;
    case 5:
        return <FormFive nextStep={nextStep} prevStep={prevStep} />;
    case 6:
        return <FormSix nextStep={nextStep} prevStep={prevStep} />;
    case 7:
        return <FormSeven nextStep={nextStep} prevStep={prevStep} />;
    case 8:
        return <FormEight nextStep={nextStep} prevStep={prevStep} />;
    case 9:
        return <FormNine nextStep={nextStep} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 my-10">
      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-8 text-center">Registration Form</h1>
      <div className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-6xl p-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
  
        {/* Render the current step component */}
        {renderStep()}
      </div>
    </div>
  );
};

export default Main;

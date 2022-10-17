import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Option = ({ option, correctAnswer }) => {
  const handleCheck = () => {
    if (correctAnswer === option) {
      const handleCheck = toast.success("Correct Answer!");
    } else {
      const handleCheck = toast.error("Incorrect answer");
    }
  };

  return (
    <div className="mt-3">
      <div className="bg-green-400 text-wh flex items-center pl-4 rounded border border-green-200 dark:border-gray-700">
        <input onClick={handleCheck} defaultChecked id={option} type="radio" defaultValue name="bordered-radio" className="w-4 h-4 text-green-100 focus:ring-green-400 dark:focus:ring-green-600  dark:border-gray-600" />
        <label htmlFor={option} className="py-4 ml-2 w-full text-gray-900">
          {1 && option}
        </label>
        <Toaster />
      </div>
    </div>
  );
};

export default Option;

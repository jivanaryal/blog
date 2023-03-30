import React from "react";
import { FiLoader } from "react-icons/fi";

function LoadingPage() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="flex flex-col items-center">
        <FiLoader className="animate-spin text-4xl text-gray-800" />
        <span className="text-gray-800 text-lg mt-4 font-medium">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default LoadingPage;

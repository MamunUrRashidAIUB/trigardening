import React from 'react';
// You can use FontAwesome or Heroicons for the camera icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export const ClinicAnalysis = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between pl-40 pr-40 gap-8 md:gap-4 px-6 py-10">
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4c6b32] mb-4">
          Plant Clinic Analysis
        </h2>
        <p className="text-base text-gray-700 mb-4">
          Upload a photo of your plant and get instant AI-powered diagnosis with treatment recommendations from our experts
        </p>
        <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#8bb46a] text-white font-semibold shadow hover:bg-[#66994b] mt-4 transition">
          <FontAwesomeIcon icon={faCamera} className="text-xl" />
          Diagnose Your Plant
        </button>
      </div>
      <div className="flex-shrink-0">
        <img 
          src="/images/cinic.jpg" 
          alt="Plant photo example" 
          className="w-60 h-60 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

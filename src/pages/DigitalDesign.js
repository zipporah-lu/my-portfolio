import React from "react";

const DigitalDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section with Full-Width Background Image */}
      <div
        className="relative w-screen h-96 bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/digital-designer.png)` }}
      >
        {/* Content Block Placed on Header Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-200 bg-opacity-80 px-12 py-6 rounded-md shadow-md w-5/6 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Digital Designer</h1>
          <div className="flex justify-between mt-4">
            <div className="flex items-center space-x-6">
              <span className="text-xl font-semibold">Software</span>
              {['adobe-1.png', 'adobe-2.png', 'adobe-3.png', 'adobe-4.png'].map((src, index) => (
                <img key={index} src={`${process.env.PUBLIC_URL}/${src}`} alt={src} className="w-12 h-12" />
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-xl font-semibold">Social Media</span>
              {['facebook.png', 'instagram.png', 'youtube.png'].map((src, index) => (
                <img key={index} src={`${process.env.PUBLIC_URL}/${src}`} alt={src} className="w-12 h-12" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDesign;

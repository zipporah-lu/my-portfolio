import React from "react";

const DigitalDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section with Full-Width Background Image */}
      <div
        className="w-screen h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/digital-designer.png)` }}
      ></div>

      {/* Content Section */}
      <div className="bg-white px-4 sm:px-8 md:px-20 py-10 rounded-lg w-full shadow-md -mt-20 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          Digital Designer
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 md:space-x-6">
            <span className="text-lg sm:text-2xl font-semibold">Software</span>
            {['adobe-1.png', 'adobe-2.png', 'adobe-3.png', 'adobe-4.png'].map((src, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/${src}`}
                alt={src}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            ))}
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <span className="text-lg sm:text-2xl font-semibold">Social Media</span>
            {['facebook.png', 'instagram.png', 'youtube.png'].map((src, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/${src}`}
                alt={src}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDesign;

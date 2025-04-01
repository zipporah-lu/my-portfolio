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
      <div className="bg-white px-20 py-10 rounded-lg w-full shadow-md -mt-20 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-10">Digital Designer</h1>
        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-6">
            <span className="text-2xl font-semibold">Software</span>
            {['adobe-1.png', 'adobe-2.png', 'adobe-3.png', 'adobe-4.png'].map((src, index) => (
              <img key={index} src={`${process.env.PUBLIC_URL}/${src}`} alt={src} className="w-6 h-6" />
            ))}
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-2xl font-semibold">Social Media</span>
            {['facebook.png', 'instagram.png', 'youtube.png'].map((src, index) => (
              <img key={index} src={`${process.env.PUBLIC_URL}/${src}`} alt={src} className="w-6 h-6" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDesign;

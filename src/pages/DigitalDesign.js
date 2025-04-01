import React from "react";

const DigitalDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section with Full-Width Background Image */}
      <div
        className="w-screen h-96 bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/digital-designer.png)` }}
      >
        <h1 className="text-6xl text-gray-700 text-center py-32">cover photo</h1>
      </div>

      {/* Content Section */}
      <div className="bg-gray-200 px-12 py-10 rounded-md w-5/6 shadow-md max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Digital Designer</h1>

        {/* Software and Social Media Section */}
        <div className="flex justify-between mt-8">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold">Software</span>
            {['adobe-1.png', 'adobe-2.png', 'adobe-3.png', 'adobe-4.png'].map((src, index) => (
              <img key={index} src={`${process.env.PUBLIC_URL}/${src}`} alt={src} className="w-12 h-12 rounded-md shadow-md" />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold">Social Media</span>
            {['facebook.png', 'instagram.png', 'youtube.png'].map((src, index) => (
              <img key={index} src={`${process.env.PUBLIC_URL}/${src}`} alt={src} className="w-12 h-12 rounded-md shadow-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDesign;

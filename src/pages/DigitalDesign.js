import React from "react";

const DigitalDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section with Full-Width Background Image */}
      <div
        className="w-screen h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/digital-designer.png)`,
        }}
      ></div>

      {/* Content Section */}
      <div className="bg-white px-4 sm:px-8 md:px-20 py-10 rounded-lg w-full shadow-md -mt-20 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          Digital Designer
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 md:space-x-6">
            <span className="text-lg sm:text-1xl font-semibold">Software</span>
            {["adobe-1.png", "adobe-2.png", "adobe-3.png", "adobe-4.png"].map(
              (src, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/${src}`}
                  alt={src}
                  className="w-4 h-4 sm:w-8 sm:h-8"
                />
              )
            )}
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <span className="text-lg sm:text-1xl font-semibold">
              Social Media
            </span>
            {["facebook.png", "instagram.png", "youtube.png"].map(
              (src, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/${src}`}
                  alt={src}
                  className="w-4 h-4 sm:w-8 sm:h-8"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="mt-20 text-gray-700 text-lg leading-relaxed px-4 sm:px-8 md:px-20 max-w-6xl">
        <p className="mb-4">
          I am responsible for{" "}
          <span className="font-semibold">digital design</span> and{" "}
          <span className="font-semibold">content creation</span> across{" "}
          <span className="font-semibold">Instagram, Facebook,</span> and{" "}
          <span className="font-semibold">YouTube</span>, crafting engaging
          visuals and multimedia content.
        </p>
        <p>
          My work includes designing{" "}
          <span className="font-semibold">
            event posters, educational content, product promotion posts,
          </span>{" "}
          and <span className="font-semibold">vlog-style videos</span> for
          industries such as{" "}
          <span className="font-semibold">
            international student services in Australia, youth programs,
          </span>{" "}
          and a <span className="font-semibold">shoe brand company</span>.
        </p>
      </div>

      {/* Profile Section */}
      <div className="mt-20 px-8 py-6 max-w-6xl w-full flex justify-around items-start space-x-8">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={`${process.env.PUBLIC_URL}/social-media-1.png`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <span className="text-gray-700 font-medium">taiwanfsy</span>
        </div>

        {/* Stats - Post */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg mb-1">
            Post
          </span>
          <span className="text-4xl mt-5 font-semibold">258</span>
        </div>

        {/* Stats - Followers */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg mb-1">
            Followers
          </span>
          <span className="text-4xl mt-5 font-semibold">997</span>
        </div>

        {/* Role Section - Align Center */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg mb-1">
            Role
          </span>
          <ul className="list-disc mt-5 pl-5 text-gray-700 text-left font-semibold">
            <li>Graphic Designer</li>
            <li>Video Editor</li>
            <li>Content Creator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalDesign;

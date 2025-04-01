import React from "react";

const DigitalDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section with Full-Width Background Image */}
      <div
        className="w-screen h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/social-media-1.png')" }}
      ></div>

      {/* Content Section */}
      <div className="bg-gray-200 px-12 py-10 rounded-md w-full shadow-md -mt-20 max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-900">Digital Designer</h1>
        <p className="text-lg text-gray-700 mt-4">
          I am responsible for digital design and content creation across Instagram, Facebook, and YouTube, crafting engaging visuals and multimedia content. My work includes designing event posters, educational content, product promotion posts, and vlog-style videos for industries such as international student services in Australia, youth programs, and a shoe brand company.
        </p>

        {/* Software and Social Media Section */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Software</span>
            {['adobe-1.png', 'adobe-2.png', 'adobe-3.png', 'adobe-4.png'].map((src, index) => (
              <img key={index} src={`/${src}`} alt={src} className="w-8 h-8" />
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Social Media</span>
            {['facebook.png', 'instagram.png', 'youtube.png'].map((src, index) => (
              <img key={index} src={`/${src}`} alt={src} className="w-8 h-8" />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">Achievement</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Managed Instagram, Facebook, and YouTube for a youth program with 1,000+ participants.</li>
            <li>Created 216 posts, designed 100+ graphics, and edited 21 videos within 6 months.</li>
            <li>Grew followers by 650+ organically in 6 months, without paid promotions.</li>
            <li>Increased average engagement (likes) from 20 to 130.</li>
          </ul>
        </div>

        {/* Social Media Stats */}
        <div className="flex justify-center space-x-12 text-center mt-10">
          <div>
            <p className="text-3xl font-bold text-gray-900">258</p>
            <p className="text-gray-600">Post</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">997</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">Graphic Designer</p>
            <p className="text-gray-600">Role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDesign;

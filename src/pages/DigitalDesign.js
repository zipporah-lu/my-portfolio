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

      {/* Achievement Section */}
      <div className="mt-6 px-20 py-2 max-w-6xl w-full">
        <div className="flex flex-col space-y-2">
          {/* Achievement Title */}
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg w-max">
            Achievement
          </span>

          {/* Achievement List */}
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-1">
            <li>
              Managed Instagram, Facebook, and YouTube for a youth program with
              1,000+ participants.
            </li>
            <li>
              Created 216 posts, designed 100+ graphics, and edited 21 videos
              within 6 months.
            </li>
            <li>
              Grew followers by 650+ organically in 6 months, without paid
              promotions.
            </li>
            <li>Increased average engagement (likes) from 20 to 130.</li>
          </ul>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mt-10 px-4 sm:px-8 md:px-20 max-w-6xl w-full flex justify-center space-x-20">
        {["taiwanfsy-1.png", "taiwanfsy-2.png", "taiwanfsy-3.png"].map(
          (src, index) => (
            <div
              key={index}
              className="w-56 h-112 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={`${process.env.PUBLIC_URL}/${src}`}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
      </div>

      {/* Paragraph Section */}
      <div className="mt-10 text-gray-700 text-lg leading-relaxed px-4 sm:px-8 md:px-20 max-w-6xl">
        <p className="mb-4">
          I created the main visual poster for the youth activity, along with a
          series of digital design assets across Instagram, Facebook, and
          YouTube to promote the event.
        </p>
      </div>

      {/* Taiwan fsy photo */}
      <div className="mt-10 mb-10 w-full flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/instagram-taiwanfsy.png`}
          alt="Instagram Overview Grid"
          className="w-[90%] max-w-5xl rounded-xl shadow-md object-cover"
        />
      </div>

      <hr className="my-10 border-t border-gray-300 w-3/4" />

      {/* Profile Section */}
      <div className="mt-20 px-8 py-6 max-w-6xl w-full flex justify-around items-start space-x-8">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo-feebees.png`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <span className="text-gray-700 font-medium">feebeesshoes</span>
        </div>

        {/* Stats - Post */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg mb-1">
            Post
          </span>
          <span className="text-4xl mt-5 font-semibold">255</span>
        </div>

        {/* Stats - Followers */}
        <div className="flex flex-col items-center">
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg mb-1">
            Followers
          </span>
          <span className="text-4xl mt-5 font-semibold">1101</span>
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

      {/* Achievement Section */}
      <div className="mt-6 px-20 py-2 max-w-6xl w-full">
        <div className="flex flex-col space-y-2">
          {/* Achievement Title */}
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-lg w-max">
            Achievement
          </span>

          {/* Achievement List */}
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-1">
            <li>
              Filmed and edited a brand video, contributing to the product
              winning a Red Dot Award.
            </li>
            <li>
              Produced and edited 40+ commercial, educational, and event videos
              over two years.
            </li>
            <li>
              Created 50+ social media posts to enhance brand engagement over
              two years.
            </li>
            <li>
              Served as a triathlon event videographer, producing a race
              documentary viewed by 12K+ audiences.
            </li>
          </ul>
        </div>
      </div>

      {/* YouTube Video */}

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "G16ILSoO2yc",
            "W574T0Y0e0I",
            "JvlgpmeI2fI",
            "MnDL8GYxnfo",
            "eQgaRd_bBV4",
            "H3kErlYNVQ4",
            "vq9THO-YM80",
            "v6pgOJenuoY",
            "GUs5zRshu7M",
          ].map((id) => (
            <a
              key={id}
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white rounded-xl"
            >
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt="YouTube Video Thumbnail"
                className="w-full h-auto object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="mt-10 text-gray-700 text-lg leading-relaxed px-4 sm:px-8 md:px-20 max-w-6xl">
        <p className="mb-4">
          I created the main visual poster for the youth activity, along with a
          series of digital design assets across Instagram, Facebook, and
          YouTube to promote the event.
        </p>
      </div>

      {/* Mock up */}
      <div className="mt-10 w-full flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/instagram-feebees.jpg`}
          alt="Instagram Overview Grid"
          className="w-[90%] max-w-5xl rounded-xl shadow-md object-cover"
        />
      </div>

      <hr className="my-10 border-t border-gray-300 w-3/4" />
    </div>
  );
};

export default DigitalDesign;

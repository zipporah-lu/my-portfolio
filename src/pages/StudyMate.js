import React from "react";
const StudyMate = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section with Full-Width Background Image */}
      <div
        className="w-screen h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/study-mate-background.jpg')" }}
      ></div>

      {/* Content Section */}
      <div className="bg-gray-200 px-12 py-10 rounded-md w-full shadow-md -mt-20 max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-900">Study Mate</h1>
        <p className="text-lg text-gray-700 mt-4">
          International Student Guide in Study in Australia
        </p>

        {/* Information Section - Aligned Left */}
        <div className="flex flex-col md:flex-row items-start md:space-x-10 mt-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-xl">⏳</span>
            <span>6 months</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">👤</span>
            <span>UX/UI Designer</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">⚒️</span>
            <span>PS, AI, Figma, Notion</span>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="max-w-5xl w-full px-6 py-12 text-gray-800 mt-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Background
        </h2>

        <p className="text-lg leading-relaxed">
          In November 2021, a girl decided to pursue her dream of studying in
          Australia. She turned to the internet, searching in Chinese for terms
          like “Best universities in Australia,” “Cost of studying abroad,” and
          “Real student life in Australia.” However, most of the information she
          found was outdated, irrelevant, or only addressed surface-level
          concerns.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Seeking better guidance, she consulted an education agent—only to
          realize that they had never studied in Australia themselves and
          couldn’t provide firsthand experience.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Months later, after arriving in Australia, she found herself
          overwhelmed by the small but important details of student life:
          choosing the right bedding size, navigating university enrollment,
          understanding grading structures, and even cultural norms—like whether
          it was appropriate to wear a hat in class or how to engage in small
          talk.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          What if there were a comprehensive guidebook tailored to international
          students? What if there were a community where students from the same
          country could share real experiences and support each other?
        </p>
      </div>

      {/* Banner Image */}
      <div className="w-full flex justify-center mt-5">
        <img
          src="/international-student.jpg"
          alt="International Student"
          className="w-full max-w-none h-[500px] object-cover"
        />
      </div>

      {/* Problem Statement Section */}
      <div className="max-w-5xl w-full px-6 py-12 text-gray-800 mt-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Problem Statement
        </h2>

        <p className="text-lg leading-relaxed">
          International students preparing to study in Australia often struggle
          with outdated or surface-level information, leaving them unprepared
          for both academic and daily life challenges. While education agents
          assist with applications, they lack firsthand experience, creating a
          gap in practical guidance.
        </p>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 mt-16 text-gray-800">
        <blockquote className="text-2xl font-semibold text-gray-900 italic border-l-4 border-gray-700 pl-4">
          “This isn’t just any story—it’s my story. But instead of accepting it
          as ‘just part of the process,’ I saw it as a problem to be solved.
          This case study uncovers how I applied UX design principles to turn my
          personal struggles into a user-centered solution.”
        </blockquote>
      </div>

      {/* User Research */}
      <div className="max-w-5xl w-full px-6 py-12 text-gray-800 mt-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          User Research
        </h2>

        <p className="text-lg leading-relaxed mb-10">
          In 2023, the number of international students in Australia reached
          786,891, including 9,732 Taiwanese students. This research focuses on
          understanding the experiences, challenges, and needs of Taiwanese
          students studying abroad.
        </p>

        {/* User Interviews Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">
              User Interviews
            </h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-10">
            {Array.from({ length: 6 }, (_, index) => (
              <img
                key={index}
                src={`interview-${index + 1}.png`}
                alt={`Interview ${index + 1}`}
                className="w-full h-48 object-cover rounded-md shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Key Insights Section */}
        <div className="text-lg leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Objective:</strong> Understand concerns, expectations, and
              knowledge gaps of students preparing to study in Australia.
            </li>
            <li>
              <strong>Participants:</strong> Study abroad applicants
            </li>
          </ul>
        </div>

        {/* Research Insight Section */}
        <div className="max-w-5xl w-full px-6 py-5 text-gray-800 mt-10 bg-white shadow-md rounded-md">
          <h4 className="text-xl font-bold text-gray-900 mb-6">Key Insight</h4>

          {/* Bullet Points with Emojis */}
          <div className="space-y-4 mt-6">
            {/* Lack of Reliable Information */}
            <div className="flex items-start">
              <span className="text-3xl mr-4">📚</span>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">
                  Lack of Reliable Information
                </strong>
                <br />
                International students struggle to find trustworthy and
                up-to-date resources in Traditional Chinese that cover essential
                topics like living expenses, job-seeking experiences, rental
                processes, and visa applications.
              </p>
            </div>

            {/* Desire for Authentic Experiences */}
            <div className="flex items-start">
              <span className="text-3xl mr-4">🕵️‍♂️</span>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">
                  Desire for Authentic Experiences
                </strong>
                <br />
                Students want to hear real-life stories, including negative
                experiences. They find social media often overly positive,
                making it difficult to distinguish between genuine insights and
                misleading information.
              </p>
            </div>

            {/* Need for Specific Details */}
            <div className="flex items-start">
              <span className="text-3xl mr-4">🔍</span>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">
                  Need for Specific Details
                </strong>
                <br />
                Many shared experiences are too vague or conceptual. Students
                seek concrete information, such as how challenging it really is
                to find an IT job—going beyond general statements to provide
                practical, in-depth guidance.
              </p>
            </div>
          </div>

          {/* Highlighted Quote */}
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
              “Many influencers share vlogs about studying in Australia, but I
              can't tell if they're only recommending that education agent
              because of sponsorship deals”
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
              “I couldn’t meet the IELTS admission requirements, and it was only
              later that I found out about Pre-Master programs! There’s just too
              little information in Chinese online.”
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
              “A lot of study abroad information is from 3 to 5 years ago, and
              I’m really not sure if it’s still reliable...”
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
              “Many Taiwanese people go to Australia for working holidays, so
              there’s very little information shared specifically about studying
              abroad!”
            </p>
          </div>
        </div>

        {/* User Workshop Section */}
        <div className="mb-8 mt-20">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">
              Workshop
            </h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Workshop Image */}
          <div className="w-full flex justify-center mt-10">
            <img
              src="/workshop-1.png"
              alt="User Workshop"
              className="w-full max-w-5xl h-auto object-contain rounded-md shadow-md"
            />
          </div>
          {/* Additional Workshop Images */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <img
              src="/workshop-2.png"
              alt="Workshop 2"
              className="w-full h-[300px] object-cover rounded-md shadow-md"
            />
            <img
              src="/workshop-3.png"
              alt="Workshop 3"
              className="w-full h-[300px] object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Key Insights Section */}
        <div className="text-lg leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Objective:</strong> Prepare students to study in
              Australia.
            </li>
            <li>
              <strong>Participants:</strong> Students currently and future
              studying in Australia.
            </li>
            <li>
              <strong>Duration:</strong> 20 mins
            </li>
          </ul>

          {/* Workshop Process */}
          <div className="max-w-5xl w-full px-6 py-5 text-gray-800 mt-10 bg-white shadow-md rounded-md">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Workshop Process
            </h4>

            <div className="space-y-6 mt-6">
              {[
                {
                  id: 1,
                  title:
                    "Collect FAQs from international students in Australia.",
                },
                {
                  id: 2,
                  title: "Categorize common questions into six blocks in Miro.",
                },
                {
                  id: 3,
                  title:
                    "Current students answer on sticky notes, while future students add follow-up questions.",
                },
                { id: 4, title: "Review and discuss all questions." },
                { id: 5, title: "Complete the feedback survey." },
              ].map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  {/* Numbered Badge */}
                  <span className="bg-gray-700 text-white text-lg font-bold px-3 py-0.5 rounded-md">
                    {item.id}
                  </span>

                  {/* Title */}
                  <p className="text-base font-normal text-gray-900">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-10 mt-10">
            I created a simple graphic to help attendees understand the purpose
            and expectations of the workshop, including the host introduction,
            goals, key topics, and participation guidelines.
          </p>
          {/* Additional Workshop Images */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <img
              src="/workshop-4.png"
              alt="Workshop 2"
              className="w-full h-[550px] object-cover rounded-md shadow-md"
            />
            <img
              src="/workshop-5.png"
              alt="Workshop 3"
              className="w-full h-[550px] object-cover rounded-md shadow-md"
            />
          </div>
        </div>
        {/* User Workshop Section */}
        <div className="mb-8 mt-20">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">
              Social Media Engagement
            </h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>
        {/*YouTube Video Images */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
          <img
            src="/IELTS-1.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <img
            src="/IELTS-2.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <img
            src="/IELTS-3.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <img
            src="/IELTS-4.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>

        {/* Views, Likes, Comments */}
        <div className="flex justify-center space-x-12 text-center mt-10">
          <div>
            <p className="text-3xl font-bold text-gray-900">132K</p>
            <p className="text-gray-600">views</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">5K</p>
            <p className="text-gray-600">likes</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">7K</p>
            <p className="text-gray-600">comments</p>
          </div>
        </div>

        {/* IELTS Thumbnails Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <img
            src="/IELTS-5.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <img
            src="/IELTS-6.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <img
            src="/IELTS-7.png"
            alt="IELTS"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>

        {/* IELTS Features - Content Blocks */}
        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          {[
            {
              icon: "/icon-02.png",
              title: "Immersive Real-Life Experience",
              description:
                "I share my personal IELTS preparation journey, including real-life struggles and emotional moments, so students can truly visualize the exam experience and relate to the challenges.",
            },
            {
              icon: "/icon-03.png",
              title: "Comprehensive Visual Aids",
              description:
                "My videos include detailed graphics, bullet points, charts, images, and supporting clips to simplify complex concepts and make learning more engaging and effective.",
            },
            {
              icon: "/icon-04.png",
              title: "Actionable Step-by-Step Guidance",
              description:
                'Beyond just theory, I provide clear, structured "call to action" tips, guiding students on where to start, how to navigate the test, and how to effectively prepare for success.',
            },
          ].map((item, index) => (
            <div key={index} className="flex space-x-4 items-start">
              {/* Image for the icon */}
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
              <div>
                <p className="text-lg font-bold text-gray-900">{item.title}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Insight Section */}
        <div className="max-w-5xl w-full px-6 py-5 text-gray-800 mt-10 bg-white shadow-md rounded-md">
          <h4 className="text-xl font-bold text-gray-900 mb-6">Key Insight</h4>

          {/* Bullet Points with Emojis */}
          <div className="space-y-4 mt-6">
            {/* Lack of Reliable Information */}
            <div className="flex items-start">
              <span className="text-3xl mr-4">📚</span>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">
                 Title
                </strong>
                <br />
                International students struggle to find trustworthy and
                up-to-date resources in Traditional Chinese that cover essential
                topics like living expenses, job-seeking experiences, rental
                processes, and visa applications.
              </p>
            </div>

            {/* Desire for Authentic Experiences */}
            <div className="flex items-start">
              <span className="text-3xl mr-4">🕵️‍♂️</span>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">
                  Title
                </strong>
                <br />
                Students want to hear real-life stories, including negative
                experiences. They find social media often overly positive,
                making it difficult to distinguish between genuine insights and
                misleading information.
              </p>
            </div>

            {/* Need for Specific Details */}
            <div className="flex items-start">
              <span className="text-3xl mr-4">🔍</span>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">
                  Title
                </strong>
                <br />
                Many shared experiences are too vague or conceptual. Students
                seek concrete information, such as how challenging it really is
                to find an IT job—going beyond general statements to provide
                practical, in-depth guidance.
              </p>
            </div>
          </div>

          {/* Highlighted Quote */}
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
              “student comments”
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
            “student comments”
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
            “student comments”
            </p>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border-l-4 border-gray-600">
            <p className="text-xl font-semibold text-gray-900 italic">
            “student comments”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMate;

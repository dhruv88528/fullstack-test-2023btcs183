import React from "react";

const MentorSection = () => {
  return (
    <div className="bg-white text-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Departments</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore diverse technical domains and connect with industry experts.
          Our mentors and trainers are here to guide you in your career journey
          with practical skills and real-world knowledge.
        </p>

        {/* Department Tabs */}
        <div className="flex justify-center flex-wrap space-x-6 text-lg mb-10 border-b border-gray-200">
          <a href="#" className="py-2 px-4 text-blue-600 font-semibold border-b-2 border-blue-600">
            Web Development
          </a>
          <a href="#" className="py-2 px-4 hover:text-blue-600">Data Science</a>
          <a href="#" className="py-2 px-4 hover:text-blue-600">AI & ML</a>
          <a href="#" className="py-2 px-4 hover:text-blue-600">Cloud & DevOps</a>
          <a href="#" className="py-2 px-4 hover:text-blue-600">Cybersecurity</a>
          <a href="#" className="py-2 px-4 hover:text-blue-600">UI/UX Design</a>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <div className="bg-gray-300 h-64 w-full rounded-md mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="mentor"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <button className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-gray-800 transition duration-300">
              Mr. Rajesh Sharma <br /> (Web Development)
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <div className="bg-gray-300 h-64 w-full rounded-md mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="mentor"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <button className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-gray-800 transition duration-300">
              Ms. Anjali Verma <br /> (Data Science)
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <div className="bg-gray-300 h-64 w-full rounded-md mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="mentor"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <button className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-gray-800 transition duration-300">
              Mr. Vivek Kumar <br /> (AI & ML)
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <div className="bg-gray-300 h-64 w-full rounded-md mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="mentor"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <button className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-gray-800 transition duration-300">
              Ms. Priya Nair <br /> (Cloud & DevOps)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;

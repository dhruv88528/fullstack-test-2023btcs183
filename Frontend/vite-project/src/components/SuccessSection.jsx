const SuccessSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Journey Of Our Success
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        From providing world-class treatments to building trust with thousands 
        of patients, our journey reflects commitment, care, and excellence 
        in healthcare.
      </p>

      {/* Content */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Card */}
        <div className="bg-white shadow-md rounded-lg h-64 flex flex-col justify-end">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-gray-400 text-lg">🏥</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-b-lg font-semibold hover:bg-blue-700">
            Our Clinics
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-white shadow rounded-lg px-8 py-6 w-60">
            <h3 className="text-2xl font-bold text-blue-600">+50,000</h3>
            <p className="text-gray-600">Patients Treated</p>
          </div>
          <div className="bg-white shadow rounded-lg px-8 py-6 w-60">
            <h3 className="text-2xl font-bold text-blue-600">+10 Years</h3>
            <p className="text-gray-600">Trusted Healthcare</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-md rounded-lg h-64 flex flex-col justify-end">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-gray-400 text-lg">⚕️</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-b-lg font-semibold hover:bg-blue-700">
            Our Medical Expertise
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;

import React from "react";
const WhyChooseUs = () => {
    return (
        <section className="bg-gray-50 text-gray-900 py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose <span className="text-blue-600">Us</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    Your health is our priority. With advanced facilities, experienced doctors, 
                    and patient-first care, we make sure you and your family receive the 
                    best possible treatment.
                </p>    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-200">
                        <div className="text-5xl mb-4 text-blue-600"></div>
                        <h3 className="text-xl font-semibold mb-2">Modern Clinics</h3>
                        <p className="text-gray-500 text-sm">
                            Equipped with the latest medical technology for accurate treatments.
                        </p>
                    </div>
                <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-200">
                    <div className="text-5xl mb-4 text-blue-600"></div>
                       <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
                       <p className="text-gray-500 text-sm">
                       Experienced specialists ensuring world-class healthcare.
                       </p>
                </div>   
                 <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-200">
            <div className="text-5xl mb-4 text-blue-600"></div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
              Emergency care and round-the-clock patient support services.
            </p>
          </div> 
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-200">
            <div className="text-5xl mb-4 text-blue-600"></div>
            <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
            <p className="text-gray-500 text-sm">
              Compassionate care focused on your comfort and well-being.
            </p>
          </div>
                </div>
            </div>
        </section>
    )
}
export default WhyChooseUs;

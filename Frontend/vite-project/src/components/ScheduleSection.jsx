import React from "react";

const ScheduleSection = () => {
    return (
        <section className="bg-blue-600 text-white py-16 px-6 md:px-20 rounded-2xl my-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid:grid-cols-2 items-center gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Book Your Appoitment Instantly
                    </h2>
                    <p className="text-blue-100 mb-6 max-w-md">
                        Skip the wait and schedule your consultation with our expert doctors 
                        in just a few clicks. Your health, our priority — anytime, anywhere.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                        Schedule Now
                    </button>
                </div>
                <div className="bg-white rounded-xl h-56 md:h-56 shadow-md flex items-center justify-center">
                    <span className="text-gray-400">[Image / Illustration]</span>

                </div>
            </div>
        </section>
    )
};
export default ScheduleSection;
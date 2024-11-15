import React from "react";

const AdmissionCTA = () => {
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-white text-lg mb-8 w-[80%] mx-auto">
          Take the first step towards your future. Apply now and join our
          community of ambitious learners.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default AdmissionCTA;

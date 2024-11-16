import React from "react";

const ContactMapSection = () => {
  return (
    <div className="w-full lg:w-[50%] p-8">
      <div className="bg-white rounded-xl shadow-lg p-4 h-full">
        <h2 className="text-2xl font-bold mb-4 text-[#0056A7]">Find Us Here</h2>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.0200167738335!2d85.32891996737155!3d27.730772039855843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193e14ebf05f%3A0x8bcacb8d8768a848!2sShivapuri%20H.%20S.%20School!5e1!3m2!1sen!2snp!4v1727832863807!5m2!1sen!2snp"
            width="100%"
            height="100%"
            className="border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMapSection;

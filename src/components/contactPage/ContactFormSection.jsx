import React from "react";

const ContactFormSection = () => {
  return (
    <div className="w-full px-8 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Full Name"
          type="text"
          name="name"
          placeholder="John Doe"
        />
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="john@example.com"
        />
      </div>
      <FormInput
        label="Subject"
        type="text"
        name="subject"
        placeholder="How can we help you?"
      />
      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Write your message here..."
          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0056A7] focus:ring-2 focus:ring-[#0056A7] focus:ring-opacity-20 outline-none transition duration-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-[0.99]"
      >
        Send Message
      </button>
    </form>
  );
};

const FormInput = ({ label, type, name, placeholder }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0056A7] focus:ring-2 focus:ring-[#0056A7] focus:ring-opacity-20 outline-none transition duration-200"
      />
    </div>
  );
};

export default ContactFormSection;

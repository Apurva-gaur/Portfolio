import React from "react";

const ContactMe = () => {
  return (
    <section id="Footer" className="bg-black min-h-screen flex items-center justify-center p-6 md:flex-row flex-col">
      <div className="bg-gray-900 shadow-lg rounded-xl p-8 flex flex-col md:flex-row gap-8 md:w-1/3 w-full ">
        {/* Contact Form Section */}
        <div className="w-full md:w-full">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400 mb-6">Let's get in touch! Fill out the form below.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-300 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-medium text-lg hover:bg-gray-300 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        
      </div>
      {/* Social Media Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
          <div className="flex gap-6 text-3xl">
            <a href="#" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:your-email@example.com" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
    </section>
  );
};

export default ContactMe;

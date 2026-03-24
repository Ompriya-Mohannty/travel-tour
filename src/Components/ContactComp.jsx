import React from "react";
import Lottie from "lottie-react";
import contactImg from "../assets/contactAnimation.json";

const ContactComp = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center">
      {/* image section */}

      <div className="flex-1 bg-gray-100 flex justify-center items-center p-6">
        <Lottie
          animationData={contactImg}
          loop={true}
          className="w-full max-w-lg"
        />
      </div>

      {/* contact form section */}
      <div className="flex-1 bg-white w-ful flex flex-col justify-center px-8 py-12 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              rows={5}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <button
            type="submit "
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComp;

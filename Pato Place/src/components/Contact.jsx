import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import pic1 from "../assets/photo-gallery-thumb-03.jpg";
import pic2 from "../assets/photo-gallery-thumb-04.jpg";
import pic3 from "../assets/photo-gallery-thumb-05.jpg";
import pic4 from "../assets/photo-gallery-thumb-06.jpg";
import pic5 from "../assets/photo-gallery-thumb-07.jpg";
import pic6 from "../assets/photo-gallery-thumb-08.jpg";
import pic7 from "../assets/photo-gallery-thumb-09.jpg";
import pic8 from "../assets/photo-gallery-thumb-10.jpg";
import pic9 from "../assets/photo-gallery-thumb-11.jpg";
import pic10 from "../assets/photo-gallery-thumb-12.jpg";

const Contact = () => {
  return (
    <>
      <section className="bg-[#111111] text-[#cccccc] flex flex-col md:flex-row md:justify-between gap-10 py-10 px-6 md:px-16">
        {/* Contact Info */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-2xl md:text-3xl mb-6 uppercase">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 mb-2">
            <FaLocationDot /> 8th floor, 379 Hudson St, New York, NY 10018
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt /> (+1) 96 716 6879
          </p>
          <p className="flex items-center gap-2 mb-6">
            <IoMdMail /> contact@site.com
          </p>

          <h3 className="text-white text-2xl md:text-3xl mb-4 uppercase">
            Opening Times
          </h3>
          <p>09:30 AM – 11:00 PM</p>
          <p>Every Day</p>
        </div>

        {/* Twitter Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-2xl md:text-3xl mb-6 uppercase">
            Latest Twitter
          </h3>
          <div className="mb-6">
            <p>
              <a href="#" className="text-[#ec1a25]">
                @colorlib
              </a>
            </p>
            <p className="text-sm md:text-base">
              Activello is a good option. It has a slider built into that
              displays the featured image in the slider.
            </p>
            <p className="text-[#ec1a25]">
              <a href="#">https://buff.ly/2zaSfAQ</a>
            </p>
            <p className="text-xs">21 Dec 2017</p>
          </div>
          <div>
            <p>
              <a href="#" className="text-[#ec1a25]">
                @colorlib
              </a>
            </p>
            <p className="text-sm md:text-base">
              Activello is a good option. It has a slider built into that
              displays the featured image in the slider.
            </p>
            <p className="text-[#ec1a25]">
              <a href="#">https://buff.ly/2zaSfAQ</a>
            </p>
            <p className="text-xs">21 Dec 2017</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-2xl md:text-3xl mb-6 uppercase">
            Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full rounded-md hover:opacity-80 transition"
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

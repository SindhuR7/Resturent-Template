import React from "react";
import pic1 from "../assets/blog-01.jpg";
import pic2 from "../assets/blog-02.jpg";
import pic3 from "../assets/blog-03.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const News = () => {
  const blogs = [
    {
      img: pic1,
      title: "Best Places for Wine",
      desc: "Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.",
    },
    {
      img: pic2,
      title: "Eggs and Cheese",
      desc: "Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna.",
    },
    {
      img: pic3,
      title: "Style the Wedding Party",
      desc: "Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
    },
  ];

  return (
    <>
      <section className="px-6 py-16 md:px-20 md:py-24 bg-white">
        <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center md:items-start max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 md:mb-0 md:w-1/3 px-4"
            >
              {/* Image */}
              <div className="w-full rounded-2xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  src={blog.img}
                  alt={blog.title}
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h4 className='font-["Poppins",sans-serif] text-xl md:text-2xl font-medium text-[#333333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500'>
                  {blog.title}
                </h4>
                <p className='text-[#666666] font-["Montserrat",sans-serif] text-base md:text-lg mt-2 mb-5 leading-relaxed'>
                  {blog.desc}
                </p>
                <div className="flex justify-start items-center gap-2 text-[#333333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">
                  Continue Reading <MdOutlineArrowRightAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;

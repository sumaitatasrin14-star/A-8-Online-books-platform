"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "Find Your Next Read",
      desc: "Explore thousands of books anytime, anywhere.",
      img: "/books.png",
    },
    {
      id: 2,
      title: "Read Anytime",
      desc: "Access your digital library 24/7 with ease.",
      img: "/books/Banner2.png",
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto py-10">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="grid md:grid-cols-2 gap-10 items-center py-16 px-4 mx-20">

              {/* LEFT TEXT */}
              <div>
                <p className="uppercase tracking-widest mb-2 text-gray-400">
                  Welcome to BookSphere
                </p>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
                  {slide.title}
                </h1>

                <p className="text-gray-400 mt-6 max-w-md">
                  {slide.desc}
                </p>

                <Link
                  href="/books"
                  className="inline-block mt-8 px-6 py-3 bg-black hover:bg-gray-800 rounded-xl transition text-white"
                >
                  Browse Books →
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center">
                <Image
                  src={slide.img}
                  alt="Books"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
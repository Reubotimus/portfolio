"use client";
import { useState } from "react";
import ProjectDTO from "../models/ProjectDTO";
import Video from "./Video_temp";

interface Props {
  project: ProjectDTO;
}

function Carousel({ project }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [...project.media.images];
  if (project.media.video) {
    slides.push(project.media.video);
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="my-5">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 rounded-2xl shadow-md "
            >
              {project.media.video && index === slides.length - 1 ? (
                <div className="flex justify-center items-center">
                  <Video url={src} />
                </div>
              ) : (
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-21xl"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        >
          ›
        </button>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

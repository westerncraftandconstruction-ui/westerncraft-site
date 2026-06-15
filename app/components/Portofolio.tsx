"use client";

import { useEffect, useState } from "react";

export default function Portfolio() {
  const projects = [
    {
      image: "/images/replace-photo-1.jpg",
      title: "Replace Project Title 1",
      location: "Replace Location 1",
    },
    {
      image: "/images/replace-photo-2.jpg",
      title: "Replace Project Title 2",
      location: "Replace Location 2",
    },
    {
      image: "/images/replace-photo-3.jpg",
      title: "Replace Project Title 3",
      location: "Replace Location 3",
    },
    {
      image: "/images/replace-photo-4.jpg",
      title: "Replace Project Title 4",
      location: "Replace Location 4",
    },
    {
      image: "/images/replace-photo-5.jpg",
      title: "Replace Project Title 5",
      location: "Replace Location 5",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const prev =
    (current - 1 + projects.length) % projects.length;

  const next =
    (current + 1) % projects.length;

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Recent Projects
      </h2>

      <p className="text-center text-stone-600 mb-12">
        Kitchens, renovations, cabinetry, and custom carpentry across Southern Alberta.
      </p>

      <div className="flex items-center justify-center gap-4">

        <button
          onClick={() =>
            setCurrent(
              current === 0
                ? projects.length - 1
                : current - 1
            )
          }
          className="text-4xl font-bold px-4"
        >
          ←
        </button>

        <div className="flex items-center gap-4">

          <img
            src={projects[prev].image}
            alt={projects[prev].title}
            className="hidden md:block w-48 h-64 object-cover rounded-2xl opacity-40 scale-90"
          />

          <div>
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-[600px] max-w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold">
                {projects[current].title}
              </h3>

              <p className="text-stone-600">
                {projects[current].location}
              </p>
            </div>
          </div>

          <img
            src={projects[next].image}
            alt={projects[next].title}
            className="hidden md:block w-48 h-64 object-cover rounded-2xl opacity-40 scale-90"
          />

        </div>

        <button
          onClick={() =>
            setCurrent(
              (current + 1) %
                projects.length
            )
          }
          className="text-4xl font-bold px-4"
        >
          →
        </button>

      </div>
    </section>
  );
}
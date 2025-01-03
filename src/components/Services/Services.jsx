import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaBell } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";


const skillsData = [
  {
    name: "Tech Job Notify",
    icon: <FaBell className="text-4xl text-primary" />,
    link: "#",
    description:
      "TechNotify offers real-time tech job notifications, helping you stay updated on the latest career opportunities in the tech industry.",
    aosDelay: "700",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our web design services deliver responsive, user-friendly websites with visually appealing layouts to ensure an exceptional digital experience across all devices.",
    aosDelay: "300",
  },
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our app design services focus on creating intuitive, user-friendly, and visually appealing mobile apps for seamless experiences on any device.",
    aosDelay: "0",
  },

  {
    name: "Latest Tech News",
    icon: <FaNewspaper className="text-4xl text-primary" />,
    link: "#",
    description:
      "TechNotify delivers the latest tech news, trends, and updates, keeping you informed about innovations and breakthroughs in the tech industry.",
    aosDelay: "500",
  },
  
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

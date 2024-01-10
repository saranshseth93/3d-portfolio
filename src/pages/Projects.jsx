import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import animationData from "../assets/animations/code.json";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import desktopVideoPath from "../assets/videos/projects.mp4";
import fallbackGif from "../assets/videos/fallback-2.gif";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  useEffect(() => {
    // Function to update the state based on the screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check the screen size on initial load
    checkScreenSize();

    // Set up a resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: isMobile ? "50vh" : "70vh",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        {/* Conditional rendering based on videoError state */}
        {videoError ? (
          <img
            src={fallbackGif}
            className=" h-full object-cover m-auto"
            alt="Loading"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="m-auto h-full object-cover"
            preload="auto"
            onError={handleVideoError}
          >
            <source src={desktopVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <section className="max-container about-container">
        <h1 className="head-text">
          My{" "}
          <span className="inline-flex items-center">
            <span className="blue-gradient_text drop-shadow font-semibold">
              Projects
            </span>
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ width: "65px", margin: "0 10px" }}
            />
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          Over my tech-trek, I've crafted some real digital magic, but a few
          projects are like the Pikachu in my Pokémon lineup – they're just
          special. Many are open-source, so if your inner geek spies something
          that tickles your fancy, dive into the code, and sprinkle your genius
          on it. Think of it as a coding potluck, and your algorithmic
          appetizers are eagerly awaited! Let's make code not just functional,
          but fun-tional!
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={project.iconUrl}
                    style={{ color: "#fff", opacity: "0.6", fontSize: "26px" }}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </>
  );
};

export default Projects;

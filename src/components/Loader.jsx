import React, { useState, useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";
import desktopVideoPath from "../assets/videos/desktop.mp4";
import mobileVideoPath from "../assets/videos/mobile.mp4";

const LoadingMessages = [
  "Summoning Charizard...",
  "Activating PokéStops...",
  "Gathering Bulbasaurs...",
  "Powering Pikachu...",
  "Shining Gym Badges...",
  "Meeting Professor Oak...",
  "Updating Rattata data...",
  "Refilling Potions...",
  "Trimming tall grass...",
  "Tuning the Pokédex...",
];

const Loader = (props) => {
  const { progress, active } = useProgress();
  const [isMobile, setIsMobile] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [key, setKey] = useState(0); // Used to reset the animation

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

  useEffect(() => {
    setLoadingMessage(LoadingMessages[messageIndex]);

    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % LoadingMessages.length);
      setKey((prevKey) => prevKey + 1); // Reset animation
    }, 2000); // Sync with CSS animation duration

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoadingMessage(LoadingMessages[messageIndex]);
  }, [messageIndex]);

  if (!active) {
    props.setIsLoading(false);
    return null; // Hide loader once loading is complete
  }

  return (
    <Html fullscreen>
      <div className="top-0 left-0 w-full h-full z-50">
        {/* Video container taking up 70% of the viewport height */}
        <div style={{ height: isMobile ? "50vh" : "70vh" }}>
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={desktopVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* YouTube-style loading animation */}
          {/* <div
            className="h-1 z-51 bg-blue-500"
            style={{ width: `${progress}%` }}
          /> */}
          <div
            className="relative bottom-0 left-0 h-1"
            style={{ width: `${progress}%`, backgroundColor: "#c7a008" }}
          />
        </div>

        {/* Loader container taking up the remaining 30% of the viewport height with black bg */}
        <div
          className="w-full flex flex-col justify-center items-center text-center"
          style={{
            height: isMobile ? "50vh" : "30vh",
            backgroundColor: "black",
          }}
        >
          <div
            className="text-white text-sm md:text-lg lg:text-xl mb-10 overflow-hidden"
            style={{
              fontFamily: "Inconsolata",
              maxWidth: "90vw",
              whiteSpace: "nowrap",
            }}
          >
            {loadingMessage}
          </div>
          <div className="w-20 h-20 rounded-full border-2 border-blue-500 neon-effect flex items-center justify-center relative">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `conic-gradient(#000 ${
                  progress * 3.6
                }deg, transparent 0deg)`,
              }}
            ></div>
            <div className="absolute text-white font-bold">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;

import React, { useEffect, useState } from "react";
import "./stylesheets/Pokedex-styles.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pokedex = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(true);

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

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className=" p-6 rounded-lg relative w-full overflow-y-auto">
        <div className="" id="square">
          <div className="" id="topSquare">
            <div className="" id="topbar-square">
              <div className="" id="buttonWhite">
                <div className="" id="buttonLightBlue" onClick={closeModal}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-red-700 text-3xl"
                  />
                </div>
              </div>
              <div className="" id="topbar-square-2">
                <div
                  className={`text-right text-white ${
                    !isMobile ? "pr-10 pt-3" : "pr-3 pt-2"
                  }`}
                >
                  Instruction Manual
                </div>
                <div className="" id="buttonLightRed"></div>
                <div className="" id="buttonGreen"></div>
                <div className="" id="buttontopYellow"></div>
              </div>
            </div>
            <div className="" id="screen">
              <div className="" id="buttonRed"></div>
              <div className="" id="bar1"></div>
              <div className="" id="bar2"></div>
              <div className="" id="screen2">
                🌴{" "}
                <span className="bold">
                  Welcome to the wondrous, pixelated shores of Saransh's Pokémon
                  Island!
                </span>{" "}
                🏝️🎮
                <br />
                <br />
                Here's the scoop: Navigate this digital paradise with arrow keys
                (desktop) or a heroic swipe of your finger (touch devices). Each
                corner of the island is like a Kinder Surprise egg - full of
                unexpected delights (but without the chocolate and tiny toy).
                <br />
                <br />
                🕵️‍♂️ Embark on an epic quest to identify each Pokémon. Think
                you’ve got what it takes to be a Pokémon Master? Prove it by
                sending me their names. Spoiler: It's not just Pikachu.
                <br />
                <br />
                But, a word to the wise: The site may move slower on mobile than
                a Snorlax after a feast. It turns out rendering 3D Pokémon is
                tougher than battling a gym leader!
                <br />
                <br />
                <span className="bold">
                  🚫 And remember, Pokémon catching is STRICTLY prohibited!
                  (Yes, even if you find a Mewtwo). Let's keep it as a
                  'look-but-don't-throw-a-Pokéball' kind of adventure.
                </span>
                <br />
                <br />
                Enjoy your virtual getaway!
              </div>
            </div>
          </div>
          <div id="bottom">
            <div className="" id="buttonBlue"></div>
            <div className="" id="buttonYellow" onClick={closeModal}>
              Understood!{!isMobile ? "Take me to Island" : ""}
            </div>
            <div className="" id="dpad-horizontal"></div>
            <div className="" id="dpad-vertical"></div>
            <div className="" id="select"></div>
            <div className="" id="start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

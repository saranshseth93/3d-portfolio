import React, { useEffect, useState } from "react";
import "./stylesheets/Pokedex-styles.css";
import {
  faMagnifyingGlass,
  faPowerOff,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pokedex = ({ open, setOpen }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setOpen(false);
    localStorage.setItem("pokedexShown", "true");
  };

  useEffect(() => {
    const pokedexShown = localStorage.getItem("pokedexShown");
    if (!pokedexShown || open) {
      setModalOpen(true);
    }
  }, [open]);

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

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className=" relative w-full overflow-y-auto">
        <div className="rounded-b-lg" id="square">
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
                  className={`text-right text-sm ${
                    !isMobile ? "pr-10 pt-3" : "pr-3 pt-2"
                  }`}
                  style={{ color: "#070707", fontFamily: "Consolas Bold" }}
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
            <div className="" id="buttonBlue">
              <FontAwesomeIcon
                icon={faPowerOff}
                className="text-lg"
                style={{ color: "#161616" }}
              />
            </div>
            <div
              className=""
              id="buttonYellow"
              onClick={closeModal}
              style={{ color: "#070707", fontFamily: "Consolas Bold" }}
            >
              Understood!{!isMobile ? ` Take me to Island` : ""}
            </div>
            {!isMobile ? (
              <>
                <div className="" id="dpad-horizontal"></div>
                <div className="" id="dpad-vertical"></div>
              </>
            ) : (
              <>
                <div className="" id="buttonCyan">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-lg"
                    style={{ color: "cyan" }}
                  />
                </div>
              </>
            )}
            <div className="" id="select">
              Select
            </div>
            <div className="" id="start">
              Start
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

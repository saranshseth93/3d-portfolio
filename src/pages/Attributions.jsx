import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animations/attributions.json";

const Attributions = () => {
  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">
            Attributions{" "}
            <span className="inline-flex items-center">
              <span className="blue-gradient_text drop-shadow font-semibold">
                for 3D assets
              </span>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "150px", margin: "0 10px" }}
              />
            </span>
          </h1>
          <p className="text-slate-500 mt-2 leading-relaxed">
            <b>A Heartfelt Thank You to Our 3D Asset Creators</b>
            <br />
            To the talented artists behind each 3D asset on Saransh-3D, Your
            creativity and skill have transformed this project into a vibrant,
            living world. Every model you crafted brought magic to our
            Pokemon-themed island, making it a place of wonder and excitement
            for every visitor. Your artistry not only enhanced the visual appeal
            but also infused life and emotion into every corner of the website.
            <br />
            Thank you for sharing your talents and for being an integral part of
            this creative journey. Your work is deeply appreciated and admired.
          </p>

          <ol
            className="text-slate-500 mt-6 leading-relaxed"
            style={{ listStyle: "auto" }}
          >
            <li>
              <b>Beedrill:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/fanaya2001"
                  className="text-blue-500"
                >
                  fanaya2001
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/beedrill-d1bdf5065da3415cbbce5f91406bdd70"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>
            <li>
              <b>Boppin:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/zcythe"
                  className="text-blue-500"
                >
                  zcythe
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/boppin-ariados-d3d9fed0764743a8a4c7b884f801812d"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Robot:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/Hadrien59"
                  className="text-blue-500"
                >
                  Hadrien59
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/robot-playground-59fc99d8dcb146f3a6c16dbbcc4680da"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Geodude:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/Ankush4135"
                  className="text-blue-500"
                >
                  Ankush Gupta
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/geodude-pokemon-6ef171b93a964203b7b72335e512a311"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Infernape:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/ijackprovostjr"
                  className="text-blue-500"
                >
                  ijackprovostjr
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/pokemon-pokedex-3d-pro-infernape-51ec3101d01849d5b0c9930498c9ef47"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Mewtwo:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/ijackprovostjr"
                  className="text-blue-500"
                >
                  ijackprovostjr
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/pokedex-3d-pro-mewtwo-7954664d9c5142ebb22b36f7f90ef4f6"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Pikachu:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/raghav-wd"
                  className="text-blue-500"
                >
                  Raghav Gupta
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/pikachu-37c740f674cd4719a1d1d2970bbe8c30"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Scizor:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/ijackprovostjr"
                  className="text-blue-500"
                >
                  ijackprovostjr
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/pokemon-3ds-scizor-cc15c8ab51914206b912ad11e5439274"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>TV Man:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/The-Director"
                  className="text-blue-500"
                >
                  TheDirector
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/tv-man-1b46e6a6b4324db1b86bc09d6fa04323"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Celebi:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/ijackprovostjr"
                  className="text-blue-500"
                >
                  ijackprovostjr
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/pokemon-3ds-celebi-edab2daaf5de4a1bb50c9fc09d667e0b"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Mew:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/Marco.Fascinetto"
                  className="text-blue-500"
                >
                  Marco Fascinetto
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/mew-flying-5c3814b08f48493396f298d48629d4dc"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>

            <li>
              <b>Robot Contact page:</b>
              <br />
              <p>
                Author:{" "}
                <a
                  href="https://sketchfab.com/JoseDiaz"
                  className="text-blue-500"
                >
                  JoseDiaz
                </a>
                <br />
                <a
                  href="https://sketchfab.com/3d-models/robot-1-57651698b1974ea39f7004b2366c3a38"
                  className="text-blue-500"
                >
                  Asset Link
                </a>
              </p>
            </li>
          </ol>
          <p className="text-slate-500 mt-6 leading-relaxed">
            All of the above are{" "}
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              className="text-blue-500"
            >
              CC-BY-4.0
            </a>{" "}
            License except Robot contact page, that is{" "}
            <a href="https://sketchfab.com/licenses" className="text-blue-500">
              SKETCHFAB Standard
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Attributions;

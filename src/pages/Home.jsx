import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";
import Pokedex from "../components/Pokedex";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [-0.2, -0.9, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [1, -1.4, -1];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="w-full h-screen relative">
      {!isLoading && (
        <>
          <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </div>
          <Pokedex />
        </>
      )}

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader setIsLoading={setIsLoading} />}>
          <directionalLight position={[1, 1, 1]} intensity={4} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={4} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor={"#000"}
            groundColor="#964B00"
            intensity={0.2}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

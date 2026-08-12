import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF(
    `${import.meta.env.BASE_URL}desktop_pc/scene.gltf`
  );

  return (
    <mesh>
      {/* Lights */}
      <hemisphereLight
        intensity={1.5}
        groundColor="black"
      />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={2} />

      {/* Computer Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={
          isMobile
            ? [0, -2.5, -1.5]
            : [0, -3.5, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 500px)"
    );

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleMediaQueryChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
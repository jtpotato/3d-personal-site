"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScrollPercentage } from "react-scroll-percentage";
import { Text } from "@react-three/drei";
import { EffectComposer, DepthOfField, Fog } from "@react-three/postprocessing";

function Scene(props: { percentage: number; scale: number }) {
  const { camera } = useThree();

  useFrame(() => {
    // Adjust the multiplier (0.1) to control scroll sensitivity
    camera.position.z = -props.percentage * 10 * props.scale; // Moves camera backward on scroll
  });

  return (
    <>
      <Text position={[0, 0, -20]}>Joel Tan</Text>
      <Text position={[0, 0, -50]}>I started programming at...</Text>
      <EffectComposer depthBuffer={true} resolutionScale={1}>
        <DepthOfField
          target={[0, 0, camera.position.z - 20]}
          focalLength={0.075}
          bokehScale={2}
        />
      </EffectComposer>
    </>
  );
}

export default function Home() {
  const [ref, percentage] = useScrollPercentage({ threshold: 0 });
  const scale = 10;
  return (
    <>
      <div ref={ref} style={{ height: `${scale * 100}vh` }}>
        <div className="h-screen fixed top-0 left-0 w-screen bg-black">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 40 }}
            className="h-screen"
          >
            <Scene percentage={percentage} scale={scale} />
            <EffectComposer depthBuffer={true} resolutionScale={1}>
              <DepthOfField
                focusDistance={0.1}
                focalLength={0.075}
                bokehScale={2}
              />
            </EffectComposer>
          </Canvas>
        </div>
      </div>
    </>
  );
}

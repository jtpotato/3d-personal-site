import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Scene } from "./Scene";

export function SceneCanvas({
  percentage,
  scale,
}: {
  percentage: number;
  scale: number;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
      <Scene percentage={percentage} scale={scale} />
      <fog attach="fog" args={["#000000", 5, 22]} />
      <EffectComposer depthBuffer={true} resolutionScale={1}>
        <DepthOfField
          focusDistance={12}
          focalLength={10}
          bokehScale={3}
          height={600}
          blendFunction={BlendFunction.SRC}
        />
      </EffectComposer>
    </Canvas>
  );
}

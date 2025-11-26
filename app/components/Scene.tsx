import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import ImageCard from "./ImageCard";

function AboutText() {
  return (
    <group position={[1, 1, -30]}>
      <Text
        font={"/jb_mono.ttf"}
        fontWeight={"bold"}
        anchorX={"left"}
        fontSize={0.7}
      >
        About Me
      </Text>
      <Text
        font={"/jb_mono.ttf"}
        position={[0, -0.7, 0]}
        fontSize={0.3}
        anchorX="left"
        anchorY={"top"}
      >
        {
          "I'm a student, developer and content creator\ninterested in new technologies and creating\ncool experiences."
        }
      </Text>
      <Text
        fontSize={0.2}
        position={[0, -2.4, 0]}
        anchorX={"left"}
        anchorY={"top"}
        font={"/jb_mono.ttf"}
      >
        Like this website in three-js :)
      </Text>
    </group>
  );
}

function GreetingText() {
  return (
    <Text font={"/jb_mono.ttf"} position={[-5, 0, -20]}>
      Hi! I&apos;m Joel.
    </Text>
  );
}

export function Scene(props: { percentage: number; scale: number }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.set(0, 0, -props.percentage * 10 * props.scale);
  });

  return (
    <>
      <GreetingText />
      <AboutText />
      <group position={[-5, 0, -40]}>
        <Text font={"/jb_mono.ttf"} fontSize={0.7}>
          Stuff I&apos;ve Been In
        </Text>
        <Text font={"/jb_mono.ttf"} position={[0, -0.7, 0]} fontSize={0.3}>
          (click to learn more)
        </Text>
        <ImageCard
          imageUrl="/home/SIMC1.png"
          text="JMSS are the champions at SIMC 2024"
          url="https://jmss.vic.edu.au/news/in-the-media/jmss-are-the-champions-at-simc-2024/"
          position={[9, 3, 0]}
          rotation={[0, 0, 0]}
        />
        <ImageCard
          imageUrl="/home/olympiad.jpg"
          text="Introducing the team representing Australia at the 2024 International Earth Science Olympiad!"
          url="https://www.asi.edu.au/australian-team-2024-international-earth-science-olympiad/"
          position={[12, 1, 0]}
          rotation={[0, 0, 0]}
        />
        <ImageCard
          imageUrl="/home/fll.jpeg"
          text="Glendal Primary School students program robotic guinea pig to help domestic violence survivors"
          url="https://www.heraldsun.com.au/leader/east/glendal-primary-school-students-program-robotic-guinea-pig-to-help-domestic-violence-survivors/news-story/90735dd3cf6857936225e83629e4943c"
          position={[9, -1, 0]}
          rotation={[0, 0, 0]}
        />
      </group>
    </>
  );
}

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

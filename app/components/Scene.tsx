import { useFrame, useThree } from "@react-three/fiber";
import { GreetingText } from "./GreetingText";
import { AboutText } from "./AboutText";
import { ProjectsSection } from "./ProjectsSection";

export function Scene(props: { percentage: number; scale: number }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.set(0, 0, -props.percentage * 10 * props.scale);
  });

  return (
    <>
      <GreetingText />
      <AboutText />
      <ProjectsSection />
    </>
  );
}

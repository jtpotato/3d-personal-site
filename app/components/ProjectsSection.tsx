import { Text } from "@react-three/drei";
import ImageCard from "./ImageCard";

export function ProjectsSection() {
  return (
    <group position={[-5, 0, -30]}>
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
        animationOffset={0}
      />
      <ImageCard
        imageUrl="/home/olympiad.jpg"
        text="Introducing the team representing Australia at the 2024 International Earth Science Olympiad!"
        url="https://www.asi.edu.au/australian-team-2024-international-earth-science-olympiad/"
        position={[12, 1, 0]}
        rotation={[0, 0, 0]}
        animationOffset={5}
      />
      <ImageCard
        imageUrl="/home/fll.jpeg"
        text="Glendal Primary School students program robotic guinea pig to help domestic violence survivors"
        url="https://www.heraldsun.com.au/leader/east/glendal-primary-school-students-program-robotic-guinea-pig-to-help-domestic-violence-survivors/news-story/90735dd3cf6857936225e83629e4943c"
        position={[9, -1, 0]}
        rotation={[0, 0, 0]}
        animationOffset={8}
      />
    </group>
  );
}

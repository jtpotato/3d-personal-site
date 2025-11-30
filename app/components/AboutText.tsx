import { Text } from "@react-three/drei";

export function AboutText() {
  return (
    <group position={[1, 1, -20]}>
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

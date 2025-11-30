"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";
import * as THREE from "three";

interface ImageCardProps {
  imageUrl: string;
  text: string;
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  animationOffset?: number;
}

export default function ImageCard({
  imageUrl,
  text,
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  animationOffset = 0,
}: ImageCardProps) {
  const imageRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [show, setShow] = useState(false);
  const { camera } = useThree();

  // Animate opacity based on camera distance to this card's position
  useFrame(({ clock }) => {
    const groupPosition = groupRef.current?.getWorldPosition(
      new THREE.Vector3()
    );
    if (!groupPosition) return;
    const distance = camera.position.distanceTo(groupPosition);
    if (!show && distance < 20) {
      setShow(true);
    } else if (show && distance >= 20) {
      setShow(false);
    }

    if (imageRef.current) {
      const opacity = distance < 5 ? 1 : 1 - distance / 20;
      // @ts-expect-error opacity property exists
      imageRef.current.material.opacity = opacity;
    }

    // Floating animation with sine waves
    if (groupRef.current) {
      const time = clock.getElapsedTime() + animationOffset;

      // Translate on X and Y axes
      const translateX = Math.sin(time * 0.5) * 0.1;
      const translateY = Math.sin(time * 0.7) * 0.1;

      // Rotate on X and Y axes
      const rotateX = Math.sin(time * 0.3) * 0.1;
      const rotateY = Math.sin(time * 0.4) * 0.1;

      groupRef.current.position.set(
        position[0] + translateX,
        position[1] + translateY,
        position[2]
      );

      groupRef.current.rotation.set(
        rotation[0] + rotateX,
        rotation[1] + rotateY,
        rotation[2]
      );
    }
  });

  // Handle click to open URL
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <group position={position} rotation={rotation} ref={groupRef}>
      {/* Image Plane */}
      {show && (
        <Image
          ref={imageRef}
          url={imageUrl}
          scale={[2, 2]}
          // Base opacity will be controlled in useFrame; keep prop for initial value
          opacity={0}
          transparent
          onClick={handleClick}
          onPointerOver={() => {
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
        />
      )}

      {/* Text below the image */}
      <Text
        position={[0, -1.3, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="top"
        maxWidth={3}
        textAlign="center"
        onClick={handleClick}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
        font={"/jb_mono.ttf"}
      >
        {text}
      </Text>
    </group>
  );
}

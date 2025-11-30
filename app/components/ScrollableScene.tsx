"use client";

// @ts-expect-error no types.
import { useScrollPercentage } from "react-scroll-percentage";
import { SceneCanvas } from "@/app/components/SceneCanvas";

export function ScrollableScene() {
  const [ref, percentage] = useScrollPercentage({ threshold: 0.1 });
  const scale = 10;

  return (
    <div ref={ref} style={{ height: `${scale * 100}vh` }}>
      <div className="h-screen fixed top-0 left-0 w-screen bg-black">
        <SceneCanvas percentage={percentage} scale={scale} />
      </div>
    </div>
  );
}

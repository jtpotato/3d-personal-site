"use client";

// @ts-expect-error no types.
import { useScrollPercentage } from "react-scroll-percentage";
import { SceneCanvas } from "@/app/components/SceneCanvas";

export function ScrollableScene() {
  const [ref, percentage] = useScrollPercentage({ threshold: 0.1 });
  const scale = 10;

  return (
    <div ref={ref} style={{ height: `${scale * 100}vh` }} className="bg-black">
      <div className="md:h-screen fixed top-1/3 md:top-0 left-0 w-screen aspect-video md:aspect-auto">
        <p className="md:hidden text-center text-xs">
          Experience best viewed in landscape.
        </p>
        <SceneCanvas percentage={percentage} scale={scale} />
      </div>
    </div>
  );
}

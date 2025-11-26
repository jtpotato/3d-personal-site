"use client";

import { useScrollPercentage } from "react-scroll-percentage";
import { SceneCanvas } from "./components/Scene";

export default function Home() {
  const [ref, percentage] = useScrollPercentage({ threshold: 0 });
  const scale = 10;
  return (
    <>
      <div ref={ref} style={{ height: `${scale * 100}vh` }}>
        <div className="h-screen fixed top-0 left-0 w-screen bg-black">
          <SceneCanvas percentage={percentage} scale={scale} />
          <div className="fixed top-0 mt-4 w-full flex justify-center gap-8">
            <a href="https://github.com/jtpotato" target="_none">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joel-tan-97b3a2271/"
              target="_none"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

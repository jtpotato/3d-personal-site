import { ScrollableScene } from "@/app/components/ScrollableScene";

export default function Home() {
  return (
    <>
      <ScrollableScene />
      <div className="fixed top-0 mt-4 w-full flex justify-center gap-8 z-10">
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
    </>
  );
}

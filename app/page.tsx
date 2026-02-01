import Article from "./components/Article";

export default function Home() {
  return (
    <>
      <main className="p-4 max-w-2xl mx-auto mt-24">
        {/* Namecard */}
        <h1 className="text-6xl font-bold mb-2">Joel Tan</h1>
        <p className="text-xl text-gray-400">陈奕諴</p>
        <p className="mt-16 text-lg">
          Student, developer and content creator, passionate about all things
          STEM and science communication.
        </p>
        {/* Socials bar */}
        <h2 className="font-bold mt-16 mb-4 text-gray-400">Socials</h2>
        {/* Links to articles I'm in */}
        <h2 className="font-bold mt-16 mb-4 text-gray-400">Articles</h2>
        <div className="flex flex-col">
          <Article
            title="Introducing the team representing Australia at the 2024 International Earth Science Olympiad!"
            author="Australian Science Innovations"
            link="https://asi.edu.au/australian-team-2024-international-earth-science-olympiad/"
          />
          <Article
            title="JMSS are the champions at SIMC 2024"
            author="John Monash Science School"
            link="https://jmss.vic.edu.au/news/in-the-media/jmss-are-the-champions-at-simc-2024/"
          />
          <Article
            title="Glendal Primary School students program robotic guinea pig to help domestic violence survivors"
            author="Herald Sun"
            link="https://www.heraldsun.com.au/leader/east/glendal-primary-school-students-program-robotic-guinea-pig-to-help-domestic-violence-survivors/news-story/90735dd3cf6857936225e83629e4943c"
          />
        </div>
      </main>
    </>
  );
}

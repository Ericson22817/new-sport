import Image from "next/image";

const newsData = [
  {
    id: 1,
    category: "COACHING TIPS",
    date: "19TH JULY",
    title: "From Amateur to Pro: The Journey of a Football Player",
    description:
      "Developing a winning football strategy is both an art and a science. It requires a deep understanding of the game, the ability to analyze your team’s strengths and weaknesses, and the foresight to anticipate the opposition’s moves. But even the best-laid plans can go awry if you don’t have the right players to execute them. That’s why it’s crucial to invest in your team’s development and help them reach their full potential. Here are some tips to help you turn your amateur players into professional athletes.",
    image: "/news1.jpg",
  },
  {
    id: 2,
    category: "NEXOY",
    date: "19TH JULY",
    title: "Top 10 Strategies for Dominating the Field",
    description:
      "To dominate on the football field, master ball control, develop tactical awareness, maintain peak physical conditioning, and coordinate effectively with your teammates. Here are 10 strategies to help you take your game to the next level.",
    image: "/news2.jpeg",
  },
  {
    id: 3,
    category: "FOOTBALL NEWS",
    date: "19TH JULY",
    title: "Mastering the Basics: Essential Football Skills for Beginners",
    description:
      "To excel in football as a beginner, focus on key skills like dribbling to maneuver past opponents, passing to maintain possession and create opportunities, and shooting to score goals effectively. Ball control helps in handling the ball under pressure, while defensive skills like tackling and intercepting are crucial for stopping attacks. Positioning and awareness ensure you move strategically on the field, while fitness and stamina allow you to perform at a high level throughout the game. Finally, teamwork and communication help you coordinate with teammates, making your play more effective and structured.",
    image: "/news3.jpeg",
  },
];

export default function LatestNews() {
  return (
    <section className="container width-full mx-auto px-6 py-10">
      <h3 className="text-red-500 uppercase font-semibold tracking-wider flex justify-center">
        Blog
      </h3>
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        THE LATEST NEWS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20 gap-6">
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className={`relative bg-white shadow-md rounded-md overflow-hidden ${
              index === 2 ? "md:col-span-2" : ""
            }`}
          >
            <Image
              src={news.image}
              alt={news.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-sm font-semibold uppercase">
              {news.category}
            </div>
            <div className="p-5">
              <span className="text-red-600 font-semibold">{news.date}</span>
              <h3 className="text-xl font-bold mt-2 text-black hover:text-red-600 ">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm mt-4">{news.description}</p>
              <a
                href="#"
                className="mt-3 inline-block text-red-600 font-semibold border-b-2 border-red-600 hover:text-black"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

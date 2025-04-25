import React from "react";
import Image from "next/image";
import AboutUs from "../../component/about";
import LeagueTable from "@/component/leaguetable";

const players = [
  {
    name: "Pablo Gomez",
    position: "Attacking Midfielder (CAM)",
    age: 25,
    country: "Spain",
    img: "/player1.jpg",
  },
  {
    name: "Alexandre Dupont",
    position: "Full-Back (LB)",
    age: 27,
    country: "Nepal",
    img: "/player2.jpg",
  },
  {
    name: "John Doe",
    position: "Central Midfielder (CM)",
    age: 33,
    country: "England",
    img: "/player3.png",
  },
  {
    name: "Liam O'Connor",
    position: "Striker (ST)",
    age: 27,
    country: "Switzerland",
    img: "/player4.jpg",
  },
  {
    name: "Rui Costa",
    position: "Striker (ST)",
    age: 34,
    country: "Norway",
    img: "/player5.jpg",
  },
  {
    name: "John Paul",
    position: "Attacking Midfielder (CAM)",
    age: 35,
    country:"America",
    img: "/player1.jpg",
  },
  {
    name: "Alexandre Thomas",
    position: "Full-Back (LB)",
    age: 35,
    country:"Portugal",
    img: "/player2.jpg",
  },
  {
    name: "Peter Festus",
    position: "Central Midfielder (CM)",
    age: 29,
    country: "Spain",
    img: "/player3.png",
  },
  {
    name: "Sam Joe",
    position: "Striker (ST)",
    age: 35,
    country: "England",
    img: "/player4.jpg",
  },
  {
    name: "Rodriguez Santos",
    position: "Striker (ST)",
    age: 24,
    country: "Brasil",
    img: "/player5.jpg",
  },
  {
    name: "Richard Amos",
    position: "Striker (ST)",
    age: 24,
    country: "France",
    img: "/player1.jpg",
  },
];

const TeamSection = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/pics.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
          transition: "all 0.5s",
        }}
      >
        <h1 className="text-center text-white text-5xl font-extrabold pt-60">
          OUR TEAM
        </h1>
        <hr className="w-20 mx-auto border-2 border-red-600 mt-2" />
      </div>

      <section className="my-8">
        <h3 className="text-red-500 uppercase font-semibold tracking-wider flex justify-center">
          STAFFS
        </h3>
        <h2 className="text-3xl font-bold text-center  text-black">
          MEET OUT COACHES
        </h2>

        <div className="max-sm:flex grid lg:grid-cols-3 md:grid-cols-2 overflow-x-hidden justify-center max-sm:flex-col items-center mx-5">
          <div
            className="lg:w-120 md:w-90 h-155 text-white shadow-lg mx-5 my-10 "
            style={{
              backgroundImage: "url('/coach1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center font-bold bg-white text-black w-105 h-30 mt-120 mx-7">
              <p>JOHN MAXWELL</p>
              <p className="text-red-600">ASSISTANT COACH</p>
            </div>
          </div>

          <div
            className="lg:w-120 md:w-90 h-155 text-white shadow-lg mx-5 my-10"
            style={{
              backgroundImage: "url('/coach2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center font-bold bg-white text-black w-105 h-30 mt-120 mx-7">
              <p>FELIX BROWN</p>
              <p className="text-red-600">COACH</p>
            </div>
          </div>

          <div
            className="lg:w-120 md:w-90 h-155 text-white shadow-lg mx-5 my-10"
            style={{
              backgroundImage: "url('/coach3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center font-bold bg-white text-black w-105 h-30 mt-120 mx-7">
              <p>JAMES NEWTON</p>
              <p className="text-red-600">MANAGER</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-sm:hidden lg:block md:hidden flex absolute mt-40 mx-8">
        <img
          src="/team-img11.jpg"
          alt="Step 1"
          className="w-110 h-80 rounded-lg shadow-lg mt-2"
        />
      </div>
      <div className="flex justify-end">
        <div className="max-sm:hidden flex absolute mt-40 mx-8 lg:block md:hidden">
          <img
            src="/team-img3.jpg"
            alt="Step 1"
            className="w-110 h-80 rounded-lg shadow-lg mt-2"
          />
        </div>
        <div className="grid max-w-2xl max-sm:mx-3 md:grid-cols-1 gap-6 text-center my-10 mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="/team-img4.jpg"
              alt="Step 3"
              className="w-130 h-80 rounded-lg shadow-lg mt-2"
            />
          </div>
          <div className="flex items-center max-w-2xl">
            <img
              src="/team-img.jpeg"
              alt="teamImage"
              className="w-130 h-80 rounded-lg shadow-lg mt-2"
            />
          </div>
        </div>
      </div>

      <AboutUs />

      <div className="flex justify-center items-center space-x-4 mb-6">
        <button className="bg-red-600 text-white max-sm:text-sm hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-60 h-15 mx-80">
          STATISTICS
        </button>
      </div>

      <div className="w-full bg-white text-black shadow-lg ">
        <table className="w-full text-left">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-3">Player</th>
              <th className="p-3">Position</th>
              <th className="p-3">Age</th>
              <th className="p-3">Country</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.name} className="border-b">
                <td className="p-3 flex items-center">
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-25 h-25 object-cover"
                  />
                </td>
                <td className="p-3">{player.position}</td>
                <td className="p-3">{player.age}</td>
                <td className="p-3">{player.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamSection;

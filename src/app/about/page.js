import React from "react";
import Image from "next/image";
import AboutUs from "../../component/about";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section>
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
          ABOUT
        </h1>
        <hr className="w-20 mx-auto border-2 border-red-600 mt-2" />
      </div>

      <section className="w-full max-sm:flex-col max-sm:mx-0 lg:flex-row md:flex-col px-3 max-sm:gap-0 flex justify-center items-center my-5 mx-8 gap-8 overflow-hidden">
        <div className="grid max-w-2xl md:grid-cols-2 lg:grid-cols-1  gap-6 text-center my-10 mx-auto">
          <div className="hidden sm:block flex-col items-center">
            <img
              src="/player7.jpg"
              alt="Step 1"
              className="w-120 h-80 rounded-lg shadow-lg mt-2"
            />
          </div>

          <div className="hidden sm:block flex-col items-center">
            <img
              src="/player6.jpg"
              alt="Step 3"
              className="w-120 h-80 rounded-lg shadow-lg mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-2xl">
          <img
            src="/team.gif"
            alt="Step 2"
            className="rounded-lg shadow-lg mt-2 w-120 h-80"
          />
        </div>

        <div className=" items-start p-8 gap-5 flex flex-col justify-center max-sm:w-md text-lg">
          <h3 className="bg-red-600 text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4 w-55 h-10  justify-center flex">
            ABOUT SNIPE FC
          </h3>

          <h2 className="text-3xl text-black md:text-4xl font-bold leading-tight mt-5">
            THE FACES BEHIND THE GAME: OUR TEAM'S STORY
          </h2>

          <p className="mt-4 text-black max-w-3xl">
            Our football team is built on dedication, teamwork, and a shared
            passion for the game. Each player brings unique skills, from solid
            defense to creative attacking play, making us a strong and united
            force. With hard work, strategy, and relentless determination, we
            aim for success on and off the field. Together, we push our limits,
            support each other, and strive for victory.
          </p>

          <Link
            href="/team"
            className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4"
          >
            {" "}
            MEET OUR SQUAD{" "}
          </Link>
        </div>
      </section>

      <section className="w-full max-sm:flex-col max-sm:mx-auto lg:flex-row md:flex-col px-3 max-sm:gap-0 flex justify-center items-center mx-8 gap-8">
        <div className=" items-start p-8 gap-5 flex flex-col justify-center max-sm:w-md text-lg">
          <h3 className="bg-red-600 text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4 w-55 h-10  justify-center flex">
            OUR STADIUM
          </h3>

          <h2 className="text-3xl text-black md:text-4xl font-bold leading-tight mt-5">
            DISCOVER OUR STADIUM:WHERE LEGENDS ARE MADE
          </h2>

          <p className="mt-4 text-black max-w-3xl">
            Discover our stadium, where legends are made. A place of passion,
            history, and unforgettable moments. From roaring crowds to iconic
            victories, it’s more than just a field. Here, dreams take flight,
            and champions rise, bringing out the best among other clubs. Every
            match played echoes with the spirit of greatness, forging memories
            that last a lifetime.
          </p>

          <Link
            href="/team"
            className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4"
          >
            {" "}
            VIEW GALLERY{" "}
          </Link>
        </div>

        <div className="flex flex-col items-center max-w-2xl">
          <img
            src="/stadium1.jpeg"
            alt="Step 2"
            className="w-120 h-80 rounded-lg shadow-lg mt-2"
          />
        </div>
        <div className="grid max-w-2xl md:grid-cols-2 lg:grid-cols-1 gap-6 text-center my-10 mx-auto">
          <div className="flex-col items-center hidden sm:block">
            <img
              src="/stadium.gif"
              alt="Step 1"
              className="w-120 h-80 rounded-lg shadow-lg mt-2"
            />
          </div>

          <div className="flex-col items-center hidden sm:block">
            <img
              src="/stadium2.jpg"
              alt="Step 3"
              className="w-120 h-80 rounded-lg shadow-lg mt-2"
            />
          </div>
        </div>
      </section>

      <div>
        <AboutUs />
      </div>

      <section className="my-8">
        <h3 className="text-red-500 uppercase font-semibold tracking-wider flex justify-center">
          STAFFS
        </h3>
        <h2 className="text-3xl font-bold text-center  text-black">
          MEET OUT COACHES
        </h2>

        <div className="flex md:flex md:overflow-scroll md:justify-start justify-center max-sm:flex-col items-center lg:overflow-x-hidden max-sm:overflow-hidden mx-5">
          <div
            className=" w-120 h-155 text-white shadow-lg mx-5 my-10"
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
            className="w-120 h-155 text-white shadow-lg mx-5 my-10"
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
            className="w-120 h-155 text-white shadow-lg mx-5 my-10"
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
    </section>
  );
};

export default AboutPage;

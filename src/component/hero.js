import React from "react";
import Button from "../component/button";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section
      className=" flex justify-center items-center text-center gap-20"
      style={{
        backgroundImage: "url('/pics.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4 w-55 h-10 mx-80">
          Elevate Your Game
        </button>

        <div className="flex flex-col items-center justify-center max-sm:w-1/2 mx-auto ">
          <h1 className="md:text-4xl font-extrabold mt-10">
            UNLEASH YOUR POTENTIAL ON THE FIELD{" "}
          </h1>
          <p className="lg:text-lg my-5 max-w-3xl flex flex-col max-sm:text-sm md:text-lg mx-10">
            Join a community of passionate football players dedicated to
            improving their skills and achieving their goals. whether you&apos;re a
            beginner or a seasoned pro, our platform offers the resources,
            training, and support you need to take your game to the next level.{" "}
          </p>
        </div>

        <Link
          href="/about"
          className="bg-white text-red-600 hover:bg-black hover:text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;

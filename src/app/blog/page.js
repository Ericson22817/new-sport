import React from "react";
import Button from "../../component/button";
import LatestNews from "@/component/blog";
import Link from "next/link";

const BlogPage = () => {
  return (
    <section>
      <div
        className="flex flex-col justify-end items-start text-start"
        style={{
          backgroundImage: "url('/blogpage-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-start justify-end max-sm:w-lg mx-5 my-10">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full flex tracking-wider font-bold mt-4 w-55 h-10">
            Elevate Your Game
          </button>
          <h1 className="md:text-4xl font-extrabold mt-10">
            UNLEASH YOUR POTENTIAL ON THE FIELD{" "}
          </h1>
          <p className="text-lg my-5 max-w-2xl flex flex-col">
            Join a community of passionate football players dedicated to
            improving their skills and achieving their goals. whether you&apos;re a
            beginner or a seasoned pro, our platform offers the resources,
            training, and support you need to take your game to the next level.{" "}
          </p>

          <Link
          href="/about"
          className="bg-white text-red-600 hover:bg-black hover:text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4"
        >
          Learn More
        </Link>
        </div>
      </div>

      <div>
        <LatestNews />
      </div>
    </section>
  );
};

export default BlogPage;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="flex justify-center overflow-hidden h-220  px-6 lg:px-0 py-16">
      <div className="lg:w-1/2 md:w-0 ">
        <Image
          src="/about-img.jpg"
          alt="Aboutus"
          className="w-auto h-full object-cover shadow-lg"
          width={800}
          height={800}
        />
      </div>

      <div className=" lg:w-1/2 md:w-full bg-red-600 text-white p-8  lg:p-16 flex flex-col items-start justify-center gap-10">
        <h4 className="text-lg uppercase font-bold tracking-wider">About Us</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          OUR MISSION:EMPOWERING AND TRANSFORMING THE GAME
        </h2>
        <p className="mt-4 text-white/90">
          Our mission is to empower players by nurturing their skills and
          passion. We provide top-tier training, mentorship, and opportunities
          for growth. Through dedication and teamwork, we shape athletes into
          future champions. Innovation and strategy drive us to elevate the
          standards of the game. We foster a culture of resilience, discipline,
          and sportsmanship. Together, we transform football, inspiring the next
          generation of stars.
        </p>

        <Link
          href="/about"
          className="bg-white text-red-600 hover:bg-black hover:text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;

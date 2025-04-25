import React from "react";
import Image from "next/image";

const ClubFixture = () => {
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
          MATCHES
        </h1>
        <hr className="w-20 mx-auto border-2 border-red-600 mt-2" />
      </div>

      <div className="flex justify-center mt-25">
        <button className="w-full sm:w-auto overflow-hidden mx-5 bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-6">
          UPCOMING MATCHES
        </button>
      </div>
      <section
        className="mt-10 max-sm:mx-4 mx-10 sticky flex flex-col items-center justify-center text-sm brightness-85"
        style={{
          backgroundImage: "url('/upcoming-match.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="flex items-center justify-center ">
          <p className="bg-red-500  px-4 py-2 rounded-full uppercase text-xs font-bold w-40 h-10 mx-155 flex justify-center items-center ">
            Upcoming Match
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 gap-30 max-sm:gap-0 ">
          <div className="flex items-center gap-8 max-sm:flex-col justify-center">
            <Image
              src="/club-logo2-removebg-preview.png"
              alt="logo"
              width={120}
              height={120}
            />
            <p className="font-extrabold font-400 text-3xl">NEXOY</p>
          </div>
          <h1 className="text-7xl font-extrabold max-sm:text-lg">VS</h1>
          <div className="flex items-center gap-8 max-sm:flex-col-reverse justify-center">
            <p className="font-extrabold font-400 text-3xl">WOLVES</p>
            <Image
              src="/club-logo-removebg-preview.png"
              alt="logo"
              width={120}
              height={120}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center space-x-4">
          <div className="flex items-center gap-3 mt-5 max-sm:flex-col">
            <p className="ml-1 font-bold">📍 Florida Kingdom</p>
            <p className="ml-1 font-bold">📅 April 3, 2025 - 7:40 PM</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row max-sm:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg">
            <div className="bg-black text-white p-4 text-center grid sm:grid rounded-md w-20">
              <h2 className="text-2xl font-bold">19</h2>
              <p className="text-sm">JUNE</p>
              <p className="text-xs  bg-red-600">2025</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-5">
              <div className="flex items-center flex-col">
                <Image
                  src="/club-logo-removebg-preview.png"
                  alt="Nexoy FC"
                  width={120}
                  height={120}
                />
                <span className="text-lg font-bold text-black hover:text-red-600">NEXOY FC</span>
              </div>
              <hr className="w-20 mx-auto border-2 border-black mt-2 max-sm:hidden" />
              <div className="flex items-center flex-col">
                <Image
                  src="/club-logo2-removebg-preview.png"
                  alt="Michigan FC"
                  width={120}
                  height={120}
                />
                <span className="text-lg font-bold text-black hover:text-red-600">
                  MICHIGAN FC
                </span>
              </div>
            </div>
 
            <div className=" max-sm:hidden flex">
              <span className="text-gray-600 flex items-center gap-2">
                🏟 Victory Park
              </span>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md font-bold ml-6 hover:bg-black">
                VIEW BELOW
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row max-sm:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg">
            <div className="bg-black text-white p-4 text-center rounded-md w-20">
              <h2 className="text-2xl font-bold">13</h2>
              <p className="text-sm">JUNE</p>
              <p className="text-sm bg-red-600">2025</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center flex-col">
                <Image
                  src="/club-logo-removebg-preview.png"
                  alt="Nexoy FC"
                  width={120}
                  height={120}
                />
                <span className="text-lg font-bold text-black hover:text-red-600">
                  NEXOY FC
                </span>
              </div>
              <hr className="w-20 mx-auto border-2 border-black mt-2 max-sm:hidden" />
              <div className="flex items-center flex-col">
                <Image
                  src="/club-logo3.png"
                  alt="Deserted City"
                  width={120}
                  height={120}
                />
                <span className="text-lg font-bold text-black hover:text-red-600">
                  DESERTED CITY
                </span>
              </div>
            </div>

            <div className="flex max-sm:hidden">
              <span className="text-gray-600 flex items-center gap-2">
                🏟 Victory Park
              </span>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md font-bold ml-6 hover:bg-black">
               VIEW BELOW 
              </button>
            </div>
          </div>
        </div>
      </section>


      <div className="flex justify-center mt-25">
        <button className="w-full sm:w-auto overflow-hidden mx-5 bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-6">
          PREVIOUS MATCH
        </button>
      </div>
      <section
        className="my-10 max-sm:mx-4 mx-10 sticky flex flex-col items-center justify-center text-sm brightness-85"
        style={{
          backgroundImage: "url('/stadium2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="flex items-center justify-center ">
          <p className="bg-red-500  px-4 py-2 rounded-full uppercase text-xs font-bold w-40 h-10 mx-155 flex justify-center items-center ">
            PREVIOUS MATCH
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 gap-30 max-sm:gap-0 ">
          <div className="flex items-center gap-8 max-sm:flex-col justify-center">
            <Image
              src="/club-logo-removebg-preview.png"
              alt="logo"
              width={120}
              height={120}
            />
            <p className="font-extrabold font-400 text-3xl">WOLVES</p>
          </div>
          <h1 className="text-7xl font-extrabold max-sm:text-lg">VS</h1>
          <div className="flex items-center gap-8 max-sm:flex-col-reverse justify-center">
            <p className="font-extrabold font-400 text-3xl">DESERTED CITY</p>
            <Image
              src="/club-logo3.png"
              alt="logo"
              width={120}
              height={120}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center space-x-4">
          <div className="flex items-center gap-3 mt-5 max-sm:flex-col">
            <p className="ml-1 font-bold">📍 Florida Kingdom</p>
            <p className="ml-1 font-bold">📅 April 3, 2025 - 7:40 PM</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ClubFixture;

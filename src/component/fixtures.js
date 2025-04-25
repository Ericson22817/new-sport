import React from "react";
import Button from "../component/button";
import Image from "next/image";
import Link from "next/link";

const MatchSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 overflow-hidden flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 max-sm:flex max-sm:w-full max-sm:flex-col items-center justify-between gap-4 mt-5 px-5">
          <div className="bg-white max-sm:hidden shadow-lg text-black w-120 h-60 mt-15">
            <div className="flex justify-center font-bold items-center w-20 mx-auto bg-red-600 text-white">
              <p>CUP</p>
            </div>

            <div className="flex justify-center items-center gap-3 my-10">
              <Image
                src="/club-logo-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center">
                <p>2</p>
              </div>{" "}
              -
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center">
                <p>1</p>
              </div>
              <Image
                src="/club-logo2-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>

            <div className="text-black hover:text-red-600 flex justify-center items-center flex-col font-bold">
              <p>Central Ford</p>
              <p>May 2, 2024 6:45 PM</p>
            </div>
          </div>

          <div className="bg-white text-black shadow-lg w-120 h-60 mt-15">
            <div className="flex justify-center font-bold items-center w-20 mx-auto bg-red-600 text-white">
              <p>CUP</p>
            </div>

            <div className="flex justify-center items-center gap-3 my-10">
              <Image
                src="/club-logo-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center">
                <p>2</p>
              </div>{" "}
              -
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center">
                <p>1</p>
              </div>
              <Image src="/club-logo3.png" alt="logo" width={50} height={50} />
            </div>

            <div className="text-black hover:text-red-600 flex justify-center items-center flex-col font-bold">
              <p>RUMBLEY STADIUM</p>
              <p>JULY 2, 2024 8:50 PM</p>
            </div>
          </div>

          <div className="bg-white text-black shadow-lg w-120 h-60 mt-15">
            <div className="flex justify-center font-bold items-center w-20 mx-auto bg-red-600 text-white">
              <p>LEAGUE</p>
            </div>

            <div className="flex justify-center items-center gap-3 my-10">
              <Image
                src="/club-logo-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center">
                <p>2</p>
              </div>{" "}
              -
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center">
                <p>1</p>
              </div>
              <Image
                src="/club-logo2-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>

            <div className="text-black hover:text-red-600 flex justify-center items-center flex-col font-bold">
              <p>Victory Park</p>
              <p>JUNE 20, 2024 6:45 pm</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10">
          <Link
            href="/fixtures"
            className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4"
          >
            {" "}
            VIEW ALL MATCHES{" "}
          </Link>
        </div>
      </section>

      <section
        className=" my-20 max-sm:mx-4 mx-10 sticky flex flex-col items-center justify-center text-sm brightness-85"
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

      <section className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h3 className="text-red-500 uppercase font-semibold tracking-wider">
            Table
          </h3>
          <h2 className="text-3xl font-bold uppercase text-black">
            League Table & Schedule
          </h2>
        </div>

        <div className="overflow-x-auto mt-6 max-sm:overflow-x-hidden">
          <table className="w-full border-collapse border border-gray-200 ">
            <thead>
              <tr className="bg-red-600 text-white text-sm uppercase">
                <th className="p-3">POS</th>
                <th className="p-3 text-left">TEAM</th>
                <th className="p-3">P</th>
                <th className="p-3">W</th>
                <th className="p-3">D</th>
                <th className="p-3">L</th>
                <th className="p-3">F:A</th>
                <th className="p-3">GD</th>
                <th className="p-3">PTS</th>
              </tr>
            </thead>

            <tbody className="">
              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">1</td>
                <td className="p-3 text-left font-bold">NEXOY FC</td>
                <td className="p-3">10</td>
                <td className="p-3">9</td>
                <td className="p-3">1</td>
                <td className="p-3">0</td>
                <td className="p-3">46:5</td>
                <td className="p-3">41</td>
                <td className="p-3 font-bold">28</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">2</td>
                <td className="p-3 text-left font-bold">Michigan FC</td>
                <td className="p-3">9</td>
                <td className="p-3">8</td>
                <td className="p-3">1</td>
                <td className="p-3">0</td>
                <td className="p-3">38:2</td>
                <td className="p-3">36</td>
                <td className="p-3 font-bold">25</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">3</td>
                <td className="p-3 text-left font-bold">Velocity FC</td>
                <td className="p-3">10</td>
                <td className="p-3">7</td>
                <td className="p-3">1</td>
                <td className="p-3">2</td>
                <td className="p-3">34:8</td>
                <td className="p-3">26</td>
                <td className="p-3 font-bold">22</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">4</td>
                <td className="p-3 text-left font-bold">Silver Spartans</td>
                <td className="p-3">10</td>
                <td className="p-3">5</td>
                <td className="p-3">4</td>
                <td className="p-3">1</td>
                <td className="p-3">34:4</td>
                <td className="p-3">30</td>
                <td className="p-3 font-bold">19</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">5</td>
                <td className="p-3 text-left font-bold">Storm Titans</td>
                <td className="p-3">10</td>
                <td className="p-3">5</td>
                <td className="p-3">2</td>
                <td className="p-3">3</td>
                <td className="p-3">28:15</td>
                <td className="p-3">113</td>
                <td className="p-3 font-bold">17</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">6</td>
                <td className="p-3 text-left font-bold">Iron Eagles</td>
                <td className="p-3">9</td>
                <td className="p-3">5</td>
                <td className="p-3">1</td>
                <td className="p-3">3</td>
                <td className="p-3">25:17</td>
                <td className="p-3">12</td>
                <td className="p-3 font-bold">16</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">7</td>
                <td className="p-3 text-left font-bold">City FC</td>
                <td className="p-3">10</td>
                <td className="p-3">4</td>
                <td className="p-3">2</td>
                <td className="p-3">4</td>
                <td className="p-3">22:24</td>
                <td className="p-3">-2</td>
                <td className="p-3 font-bold">14</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">8</td>
                <td className="p-3 text-left font-bold">Rock Storms</td>
                <td className="p-3">10</td>
                <td className="p-3">3</td>
                <td className="p-3">2</td>
                <td className="p-3">5</td>
                <td className="p-3">13:31</td>
                <td className="p-3">-17</td>
                <td className="p-3 font-bold">11</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">9</td>
                <td className="p-3 text-left font-bold">Eleven FC</td>
                <td className="p-3">10</td>
                <td className="p-3">2</td>
                <td className="p-3">5</td>
                <td className="p-3">3</td>
                <td className="p-3">8:39</td>
                <td className="p-3">-31</td>
                <td className="p-3 font-bold">11</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">10</td>
                <td className="p-3 text-left font-bold">Tennesse Fc</td>
                <td className="p-3">10</td>
                <td className="p-3">1</td>
                <td className="p-3">2</td>
                <td className="p-3">7</td>
                <td className="p-3">5:44</td>
                <td className="p-3">-39</td>
                <td className="p-3 font-bold">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MatchSection;

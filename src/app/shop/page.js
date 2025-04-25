import React from "react";

const ShopSection = () => {
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
          SHOP
        </h1>
        <hr className="w-20 mx-auto border-2 border-red-600 mt-2" />
      </div>

      <div className="flex max-sm:items-start justify-center max-sm:flex-col mr-6 items-center  my-10 overflow-x-hidden">
        <div
          className=" w-200 flex justify-center h-155 text-white shadow-lg mx-5 my-10"
          style={{
            backgroundImage: "url('/jersey3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center max-sm:items-end items-center font-bold text-black w-110 rounded-full h-30 mt-130 ">
            <button className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80 rounded-full">
              ADD TO CART 🛒
            </button>
          </div>
        </div>

        <div
          className="w-200 h-155 flex justify-center text-white shadow-lg mx-5 my-10"
          style={{
            backgroundImage: "url('/jersey1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center max-sm:items-end items-center font-bold text-black w-110 rounded-full h-30 mt-130 ">
            <button className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80 rounded-full">
              ADD TO CART 🛒
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center max-sm:items-start max-sm:flex-col mr-6 items-center overflow-x-hidden my-10">
        <div
          className=" w-200 flex justify-center h-155 text-white shadow-lg mx-5 my-10"
          style={{
            backgroundImage: "url('/jersey2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center max-sm:items-end items-center font-bold text-black w-110 rounded-full h-30 mt-130 ">
            <button className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80 rounded-full">
              ADD TO CART 🛒
            </button>
          </div>
        </div>

        <div
          className="w-200 h-155 flex justify-center text-white shadow-lg mx-5 my-10"
          style={{
            backgroundImage: "url('/jersey4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center max-sm:items-end items-center font-bold text-black w-110 rounded-full h-30 mt-130 ">
            <button className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80 rounded-full">
              ADD TO CART 🛒
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center max-sm:items-start max-sm:flex-col mr-6 items-center overflow-x-hidden my-10">
        <div
          className=" w-200 flex  justify-center h-155 text-white shadow-lg my-10"
          style={{
            backgroundImage: "url('/jersey5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center max-sm:items-end items-center font-bold text-black w-110 rounded-full h-30 mt-130 ">
            <button className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80 rounded-full">
              ADD TO CART 🛒
            </button>
          </div>
        </div>

        <div
          className="w-200 h-155 flex justify-center text-white shadow-lg mx-5 my-10"
          style={{
            backgroundImage: "url('/jersey6.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center max-sm:items-end items-center font-bold text-black w-110 rounded-full h-30 mt-130 ">
            <button className="bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80 rounded-full">
              ADD TO CART 🛒
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

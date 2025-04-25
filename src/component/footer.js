import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto ">

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-center md:text-left">

          <div className="flex items-center space-x-2 gap-3">
            <Image src="/project-logo.jpg" alt="sportLogo" width={50} height={50} />
            <h2 className="text-2xl font-bold">SNIPE FC</h2>
          </div>

          <div className="w-full md:w-1/2 flex flex-col max-sm:items-center items-end ">
            <h3 className="text-lg font-semibold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="flex md:flex-row items-center md:items-stretch">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full md:w-80 p-3 text-black bg-white focus:outline-none"
              />
              <button className="bg-red-600 text-white px-6 py-3  hover:bg-red-700 w-full md:w-auto">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">

          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/fixtures">Fixtures</Link></li>
            <li><Link href="/licence">Contact</Link></li>
          </ul>

          <p className="text-center text-xs text-gray-400 md:text-sm border-t">
            COPYRIGHT © SPORTZ | DESIGNED BY ERICSON | POWERED BY UNIVEL CITY
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

"use client";
import React from "react";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const formUrl = "https://formsubmit.co/your-email@gmail.com";

    const formBody = new URLSearchParams();
    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("phone", formData.phone);
    formBody.append("message", formData.message);

    try {
      const res = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formBody.toString(),
      });

      if (res.ok) {
        setStatus("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/pics.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
        }}
      >
        <h1 className="text-center text-white text-5xl font-extrabold pt-60">
          CONTACT US
        </h1>
        <hr className="w-20 mx-auto border-2 border-red-600 mt-2" />
      </div>

      <section className="container mx-auto px-4 my-10 py-12">
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 w-full gap-20 items-center">

          <div className="relative">
            <Image
              src="/contact-img.png"
              alt="Football Player"
              width={900}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="">
              <div className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-gray-700">
                  🏢 42 Montgomery Road Yaba, Lagos State, Nigeria
                </p>
              </div>
              <div className="absolute top-32 left-14 bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-gray-700">
                  📧 nxbusiness@nexoy.com
                </p>
              </div>
              <div className="absolute top-56 left-20 bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-gray-700">
                  📞 (800) 555-0XX5
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-red-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message Here"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-red-500"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-black transition"
                
              >
                GET IN TOUCH
              </button>

              {status && (
                <p className="text-center mt-4 text-green-600 font-medium">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      
      <div className="mt-12">

        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.093026546367!2d3.371941877340944!3d6.509908276677322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c58e052fdc1%3A0xfae3e5b1b502fd41!2s42%20Montgomery%20Rd%2C%20Sabo%20yaba%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1744142233055!5m2!1sen!2sng" width="800" height="600"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

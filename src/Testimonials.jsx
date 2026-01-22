import React, { useState } from "react";
import client1img from "./assets/Images/client1img.png";
import image1 from "./assets/Images/image1.png";
import image2 from "./assets/Images/image2.png";
import image3 from "./assets/Images/image3.png";
import ArrowRight from "./assets/Images/ArrowRight.svg";
import ArrowLeft from "./assets/Images/ArrowLeft.svg";
const testimonialdata = [
  {
    name: "Jason Miller",
    role: "Founder-NavoTech Solutions",
    country: "UK",
    rating: 4.5,
    title: "Fast,Secure, and Extremely Reliable",
    text: "Best Transfer has completely changed how i concert crypto and move funds internationally,Transactions are lighting fast,security is top-tier,and pricing is refershengly transparent.it's rare to find a platform that truly delivers on three",
    image: client1img,
  },
  {
    name: "Meera Patel",
    role: "Finance Director- CoreBridge Exports",
    country: "UAE",
    rating: 4.7,
    title: "Perfect for GBP to INR Transfers",
    text: "We handle international vendors daily,and Best Transfer has made global transfers incredibly smooth.No delays,no hidden fees,and real-time tracking give us full confidence in every transaction.",
    image: image1,
  },
  {
    name: "Jason Miller",
    role: "Independent Investor",
    country: "USA",
    rating: 4.2,
    title: "Even as a Beginner,I Felt Confident",
    text: "I was new to crypto and honestly nervous about security.Best Transfer made everything simple and easy to understand.The interface is clean,the support team is responsive,and I feel completely safe converting here.",
    image: image2,
  },
  {
    name: "Arjun Mehta",
    role: "Portfolio Manager - Alpha Digital",
    country: "India",
    rating: 4.4,
    title: "Built for Serious Converters",
    text: "I was new to crypto and honestly nervous about security.Best Transfer made everything simple and easy to understand.The interface is clean,the support team is responsive,and I feel completely safe converting here.",
    image: image3,
  },
];
const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonialdata.length);
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + testimonialdata.length) % testimonialdata.length
    );

  const t = testimonialdata[index];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-50 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">

        
        <div className="flex justify-center  md:justify-center">

          <img
            src={t.image}
            alt={t.name}
            className="w-full max-w-[280px] rounded-3xl md:w-[500px] h-auto md:h-[400px] object-cover"
          />
        </div>

        <div className="flex flex-col justify-between md:pl-0">
          <div>
            <p className="text-[18px] md:text-[26px] text-[#6B73B5] mb-3">
              <span>Here </span>it directly from our clients :
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-[#2E3577] leading-tight mb-4 md:mb-6">
              {t.title}
            </h2>

            <p className="text-[#7B82B8] leading-relaxed text-sm md:text-base">
              {t.text}
            </p>
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            <div className="flex items-start gap-6">
              <div>
                <p className="font-semibold text-[#2E3577]">{t.name}</p>
                <p className="text-sm text-[#7B82B8]">{t.role}</p>
                <p className="text-sm text-[#7B82B8]">{t.country}</p>
              </div>

              <div>
                <p className="font-bold text-[#2E3577]">{t.rating}</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.round(t.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-start md:justify-end">
              <button
                onClick={prev}
                className="opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <img src={ArrowLeft} />
              </button>

              <button
                onClick={next}
                className="opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <img src={ArrowRight} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
 export default Testimonials;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Walletpayment from "./assets/Images/Walletpayment.png";
import Subtract from "../public/Subtract.svg";
import Footer from "./Footer";

export default function PaymentsHero() {
  const [open,setOpen] = useState(false)
  return (
    <section className="min-h-screen bg-gradient-to-br flex flex-shrink-0 flex-col from-[#F7FAFF] to-[#EAF0FF] items-center px-8">
      <div
        onClick={() => {
          if (open) {
            setOpen(false);
          }
        }}
        className="flex flex-col md:flex-row items-center bg-[#F5F8FF] justify-center w-full gap-4 md:gap-20"
      >
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 md:h-[43px]"
            src={Subtract}
            alt="Subtract"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-[#394784] font-bold text-lg md:text-xl">
              Best Transfer
            </h1>
            <p className="text-[#717EB5] text-sm md:text-base">
              Fast. Secure. Transparent
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-[16px]">
          <Link to="/" className="text-[#1A54CF]">
            Home
          </Link>
          <div className="relative inline-block">
            <span
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer text-[#1F2937] font-medium px-2 inline-flex items-center select-none"
            >
              Payments
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {open && (
              <div className="absolute left-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg w-64 z-50 mt-2">
                <Link
                  to="/payments/send"
                  className="block px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-semibold text-[#1F2937]">Send</p>
                  <p className="text-xs text-gray-500">
                    Send money to individuals or businesses
                  </p>
                </Link>

                <Link
                  to="/payments/receive"
                  className="block px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-semibold text-[#1F2937]">
                    Receive
                  </p>
                  <p className="text-xs text-gray-500">
                    Accept payments from anywhere
                  </p>
                </Link>

                <Link
                  to="/payments/convert"
                  className="block px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-semibold text-[#1F2937]">
                    Convert
                  </p>
                  <p className="text-xs text-gray-500">
                    Convert currencies instantly
                  </p>
                </Link>
              </div>
            )}
          </div>

          <a className="text-[#1F2937]" href="">
            Send Money
          </a>
          <a className="text-[#1F2937]" href="">
            Transfer Crypto
          </a>
          <a className="text-[#1F2937]" href="">
            Support
          </a>
          <a className="text-[#1F2937]" href="">
            About Us
          </a>
          <Link
            to="/sign-in"
            className="text-[#1A54CF] font-bold ml-10 text-sm md:text-[16px]"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="md:py-1 flex items-center justify-center bg-blue-600 cursor-pointer w-full md:w-[136px] h-[35px] md:-mt-2 text-white rounded-xl text-sm md:text-[16px]"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 pt-10 pb-10 gap-16 items-center">
        {/* LEFT SIDE – KEEP AS IT IS */}
        <div>
          <h1 className="text-5xl font-bold text-[#0B214E] leading-tight mb-6">
            Your Bridge Between
            <br />
            Multi-Currency Transfers
            <br />& Digital Conversions
          </h1>

          <p className="text-[#4B5D7A] text-lg mb-10 max-w-lg">
            Best Transfer brings international collections, payouts, and
            digital-asset conversions into one secure environment. Instead of
            juggling banks, wallets, and payment tools, you operate from one
            dashboard built for real-world transactions.
          </p>

          <button className="bg-[#2F6DF6] cursor-pointer hover:bg-[#255BEA] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            <span className="text-lg">👤</span>
            CTA: Talk to Our Experts
          </button>
        </div>

        {/* RIGHT SIDE – SAMPLE IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={Walletpayment}
            alt="Payments UI preview"
            className="w-full max-w-[520px] rounded-2xl shadow-xl object-contain"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

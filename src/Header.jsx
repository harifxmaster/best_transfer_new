import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Subtract from "../public/Subtract.svg";
import crypto from "./assets/Images/crypto.png";
import conversion from "./assets/Images/conversion.png";

const Header = () => {
    const [open,setOpen] = useState(false)
  return (
     <div
        onClick={() => {
          if (open) {
            setOpen(false);
          }
        }}
        className="w-full min-h-screen  scrollbar-hide relative bg-cover overflow-x-hidden overflow-y-hidden"
        style={{ backgroundImage: "url('/src/assets/Images/bg.png')" }}
      >
        <div className="max-w-[1200px] h-[760px] mx-auto p-4 md:p-4 flex flex-col scrollbar-hide items-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-20">
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
              <a className="text-[#1A54CF]" href="">
                Home
              </a>
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
                      <p className="text-sm font-semibold text-[#1F2937]">
                        Send
                      </p>
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
          <div className="mt-6 md:mt-10 text-center max-w-[900px]">
            <h1 className="text-3xl md:text-[50px] font-bold text-[#1A54CF]">
              Move money worldwide{" "}
              <span className="text-[#394784]">
                and send or receive crypto instantly — all in one secure,
                easy-to-use platform
              </span>
            </h1>

            <div className="mt-4 md:mt-6 space-y-2 text-sm md:text-[20px] text-[#7983AD]">
              <p>
                Best Transfer is your both option for{" "}
                <span className="text-[#394784] font-bold">
                  Multi-currency transfers
                </span>{" "}
                and secure crypto conversions-
              </p>
              <p>
                Manage and grow them with industry-leading blockchain technology
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-10">
            <button className="bg-[#4D08C5] cursor-pointer text-white w-[200px] h-14 rounded-3xl">
              Start Transfer Money
            </button>
            <button className="w-[200px] cursor-pointer h-14 border border-[#1A54CF] text-[#1A54CF] rounded-3xl">
              Start Crypto Exchange
            </button>
          </div>
          <div className="relative mt-6 md:mt-10 flex justify-center">
            <img
              className="w-64 h-48 md:w-80 md:h-60 relative z-20"
              src={crypto}
              alt="crypto"
            />

            <img
              className="w-64 h-48 md:w-80 md:h-60 absolute top-4 md:top-10 left-12 md:left-40 z-10 opacity-90"
              src={conversion}
              alt="conversion"
            />
          </div>
        </div>
      </div>
  )
}

export default Header
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Subtract from "../public/Subtract.svg";

import conversion from "./assets/Images/conversion.png";
import crypto from "./assets/Images/crypto.png";
import step1img from "./assets/Images/step1img.png";
import step2img from "./assets/Images/step2img.png";
import step3img from "./assets/Images/step3img.png";
import bg4 from "./assets/Images/bg4.png";
import mobile_bg from "./assets/Images/mobile_bg.png";
import FAQBg from "./assets/Images/FAQBg.png";
import bg9 from "./assets/Images/bg9.png";
import Bestransferlogo_white from "./assets/Images/Bestransferlogo_white.png";

import Gradient_Icons from "./assets/Icons/Gradient_Icons.svg";
import smartwallet_1 from "./assets/Icons/smartwallet_1.svg";
import crptotrading_1 from "./assets/Icons/crptotrading_1.svg";
import g1 from "./assets/Icons/g1.svg";
import GbpInr_1 from "./assets/Icons/GbpInr_1.svg";
import smartsecurity_1 from "./assets/Icons/smartsecurity_1.svg";
import akar_icons_money from "./assets/Icons/akar_icons_money.svg";
import frame from "./assets/Icons/frame.svg";
import tabler_transfer from "./assets/Icons/tabler_transfer.svg";
import minus_icon from "./assets/Icons/minus_icon.svg";
import plus_icon from "./assets/Icons/plus_icon.svg";

import Group from "./assets/Icons/Group.png";
import Group2 from "./assets/Icons/Group2.png";
import Group3 from "./assets/Icons/Group3.png";
import Group4 from "./assets/Icons/Group4.png";
import Group5 from "./assets/Icons/Group5.png";
import Group6 from "./assets/Icons/Group6.png";
import Group7 from "./assets/Icons/Group7.png";
import Group8 from "./assets/Icons/Group8.png";
import Group9 from "./assets/Icons/Group9.png";

const images = [
  Group,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group8,
  Group9,
];

import Testimonials from "./Testimonials";
const Landingpage = () => {
  // const navigate = useNavigate();
  const [imagedec, setImagedec] = useState(1);
  const [openFaqs, setOpenFaqs] = useState({});
  const [open, setOpen] = useState(false);

  const toggleFaq = (key) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const stepclass = (stepNumber) => {
    return imagedec >= stepNumber ? "opacity-100 blur-0" : "opacity-40 blur-sm";
  };
  return (
    <div className=" flex flex-col min-h-screen overflow-x-hidden scrollbar-hide">
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
              {/* <Link
                to="/sign-up"
                className="w-full h-10 px-4 py-2 text-sm sm:w-full sm:h-10 sm:px-4 sm:py-2 
             md:w-[136px] md:pt-2 md:py-1 bg-blue-600 cursor-pointer text-white rounded-xl"
              >
                Get Started
              </Link> */}
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
      <div className="bg-[#F9F5FF] relative z-20 py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col items-center">
          <div className="text-center space-y-2 md:space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#394784]">
              How Our Global Transfers & Crypto
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-[#394784]">
              Conversions <span className="text-[#1A54CF]">Work?</span>
            </h2>
            <p className="text-sm md:text-[18px] font-semibold text-[#7983AD]">
              We provide real-time live exchange rates, transfer fees, and
              crypto values for your transfer. No hidden charges.
            </p>
            <h3 className="text-lg md:text-[25px] font-semibold text-[#394784] mt-4 md:mt-6">
              Get started with 3 simple steps
            </h3>
          </div>

          <div className="flex flex-col md:flex-row mt-10 md:mt-16 w-full gap-10">
            <div className="flex flex-col space-y-6 md:w-1/2">
              <div
                onClick={() => setImagedec(1)}
                className={`relative cursor-pointer p-4 md:p-6 text-[#394784] ${stepclass(
                  1,
                )}`}
              >
                {imagedec === 1 && (
                  <div className="absolute left-4 top-0 w-[2px] h-full bg-[#4D08C5]"></div>
                )}
                <p className="font-bold text-sm flex items-center">
                  <span className="mr-1">-</span> Step 1
                  <span className="text-[#929ABA] pl-2 md:pl-3">
                    Sign Up & Verify Details
                  </span>
                </p>
                <div className="pl-4 md:pl-6 pt-1 space-y-1">
                  <p className="text-[15px] md:text-[15px] font-semibold">
                    Within minutes, you can create your
                  </p>
                  <p className="text-[15px] md:text-[15px] font-semibold">
                    account. Then, complete the KYC
                  </p>
                  <p className="text-[15px] md:text-[15px] font-semibold">
                    verification for secure transfers.
                  </p>
                </div>
              </div>

              <div
                onClick={() => setImagedec(2)}
                className={`relative cursor-pointer p-4 md:p-6 text-[#394784] ${stepclass(
                  2,
                )}`}
              >
                {imagedec === 2 && (
                  <div className="absolute left-4 top-0 w-[2px] h-full bg-[#4D08C5]"></div>
                )}
                <p className="font-bold text-sm flex items-center">
                  <span className="mr-1">-</span> Step 2
                  <span className="text-[#929ABA] pl-2 md:pl-3">
                    Add Transfer Details To Your Phone
                  </span>
                </p>
                <div className="pl-4 md:pl-6 pt-1 space-y-1">
                  <p className="text-[15px] font-semibold">
                    Enter the amount, choose the
                  </p>
                  <p className="text-[15px] font-semibold">
                    recipient's bank or UPI details and
                  </p>
                  <p className="text-[15px] font-semibold">
                    check the live exchange rate with full
                  </p>
                  <p className="text-[15px] font-semibold">fee transparency.</p>
                </div>
              </div>

              <div
                onClick={() => setImagedec(3)}
                className={`relative cursor-pointer p-4 md:p-6 text-[#394784] ${stepclass(
                  3,
                )}`}
              >
                {imagedec === 3 && (
                  <div className="absolute left-4 top-0 w-[2px] h-full bg-[#4D08C5]"></div>
                )}
                <p className="font-bold text-sm flex items-center">
                  <span className="mr-1">-</span> Step 3
                  <span className="text-[#929ABA] pl-2 md:pl-3">
                    Start Transacting
                  </span>
                </p>
                <div className="pl-4 md:pl-6 pt-1 space-y-1">
                  <p className="text-[15px] font-semibold">
                    You can now start your transfer
                  </p>
                  <p className="text-[15px] font-semibold">
                    transaction or crypto conversion
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:w-1/2">
              {imagedec === 1 && (
                <div
                  className="w-[280px] md:w-[450px] h-auto bg-contain bg-no-repeat bg-center p-5"
                  // style={{
                  //   backgroundImage: 'url("/src/assets/Images/Vector_21.png")',
                  // }}
                >
                  <img src={step1img} className="w-full h-[400px]" />
                </div>
              )}
              {imagedec === 2 && (
                <div
                  className="w-[280px] md:w-[350px] h-auto bg-contain bg-no-repeat bg-center p-5"
                  style={{
                    backgroundImage: 'url("/src/assets/Images/Vector_21.png")',
                  }}
                >
                  <img src={step2img} className="w-full h-auto" />
                </div>
              )}
              {imagedec === 3 && (
                <div
                  className="w-[280px] md:w-[350px] h-auto bg-contain bg-no-repeat bg-center p-5"
                  style={{
                    backgroundImage: 'url("/src/assets/Images/Vector_21.png")',
                  }}
                >
                  <img src={step3img} className="w-full h-auto" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F5FF] py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#394784]">
            The Powerful <span className="text-[#1A54CF]">Differentiators</span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#7983AD] mt-2">
            The robust tools and secure technology we use make money transfer
            and crypto conversions safe and a breeze
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="group bg-white border border-white rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(91,108,255,0.35)] hover:bg-gradient-to-br hover:from-[#5B6CFF] hover:to-[#9B5CFF]">
            <img
              className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105"
              src={GbpInr_1}
            />
            <h3 className="text-[#394784] mt-4 md:mt-5 font-bold text-lg md:text-[20px] transition-colors duration-300 group-hover:text-white">
              Instant Global Transfers
            </h3>
            <p className="text-[12px] md:text-[12px] mt-2 md:mt-5 font-semibold text-[#555961] transition-colors duration-300 group-hover:text-white/90">
              Real-time processing, zero delays for your global transfers.
            </p>
          </div>

          <div className="group bg-white border border-white rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(91,108,255,0.35)] hover:bg-gradient-to-br hover:from-[#5B6CFF] hover:to-[#9B5CFF]">
            <img
              className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105"
              src={g1}
            />
            <h3 className="text-[#394784] mt-4 md:mt-5 font-bold text-lg md:text-[20px] transition-colors duration-300 group-hover:text-white">
              Low & Transparent Fees
            </h3>
            <p className="text-[12px] md:text-[12px] mt-2 md:mt-5 font-semibold text-[#555961] transition-colors duration-300 group-hover:text-white/90">
              We don't hide any charges from you. Know what you're paying
              upfront with competitive rates.
            </p>
          </div>

          <div className="group bg-white border border-white rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(91,108,255,0.35)] hover:bg-gradient-to-br hover:from-[#5B6CFF] hover:to-[#9B5CFF]">
            <img
              className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105"
              src={crptotrading_1}
            />
            <h3 className="text-[#394784] mt-4 md:mt-5 font-bold text-lg md:text-[20px] transition-colors duration-300 group-hover:text-white">
              Seamless Crypto Conversions
            </h3>
            <p className="text-[12px] md:text-[12px] mt-2 md:mt-5 font-semibold text-[#555961] transition-colors duration-300 group-hover:text-white/90">
              Secure and instant fiat to crypto and crypto to fiat currency
              conversions.
            </p>
          </div>

          <div className="group bg-white border border-white rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(91,108,255,0.35)] hover:bg-gradient-to-br hover:from-[#5B6CFF] hover:to-[#9B5CFF]">
            <img
              className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105"
              src={smartwallet_1}
            />
            <h3 className="text-[#394784] mt-4 md:mt-5 font-bold text-lg md:text-[20px] transition-colors duration-300 group-hover:text-white">
              Smart Wallet Management
            </h3>
            <p className="text-[12px] md:text-[12px] mt-2 md:mt-5 font-semibold text-[#555961] transition-colors duration-300 group-hover:text-white/90">
              View transactions, check balances, and manage everything in one
              dashboard.
            </p>
          </div>
        </div>
        <div className="w-full md:px-30 md:mt-10 flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="group w-full md:w-auto bg-white border border-white rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(91,108,255,0.35)] hover:bg-gradient-to-br hover:from-[#5B6CFF] hover:to-[#9B5CFF]">
              <img
                className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105"
                src={Gradient_Icons}
                alt=""
              />
              <h3 className="text-[#394784] mt-4 md:mt-5 font-bold text-lg md:text-[20px] transition-colors duration-300 group-hover:text-white">
                Round-The-Clock Support
              </h3>
              <p className="text-[12px] md:text-[12px] mt-2 md:mt-5 font-semibold text-[#555961] transition-colors duration-300 group-hover:text-white/90">
                Our customer assistance is open 24/7 as our expert team supports
                you anytime, from anywhere.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="group w-full md:w-auto bg-white border border-white rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(91,108,255,0.35)] hover:bg-gradient-to-br hover:from-[#5B6CFF] hover:to-[#9B5CFF]">
              <img
                className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105"
                src={smartsecurity_1}
                alt=""
              />
              <h3 className="text-[#394784] mt-4 md:mt-5 font-bold text-lg md:text-[20px] transition-colors duration-300 group-hover:text-white">
                Bank-Level Security & Encryption
              </h3>
              <p className="text-[12px] md:text-[12px] mt-2 font-semibold text-[#555961] transition-colors duration-300 group-hover:text-white/90">
                Military-grade encryption and multi-factor authentication
                protect your funds and data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bg4})` }}
        className="bg-cover bg-center"
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 py-16 md:py-0 text-center md:text-left">
              <h1 className="text-xl md:text-[30px] text-white font-bold">
                Convert The World's Top
              </h1>
              <h1 className="text-xl md:text-[30px] text-white font-bold">
                Cryptocurrency With Total
              </h1>
              <h1 className="text-xl md:text-[30px] text-white font-bold">
                Confidence
              </h1>

              <div className="mt-4 md:mt-5 space-y-1 md:space-y-2">
                <p className="text-sm md:text-[15px] text-white">
                  Explore the world's leading digital assets with real-time
                  market data,
                </p>
                <p className="text-sm md:text-[15px] text-white">
                  advanced security, and a seamless conversion experience.
                </p>
                <p className="text-sm md:text-[15px] text-white">
                  Our platform makes fiat-to-crypto and crypto-to-fiat
                  conversions simple,
                </p>
                <p className="text-sm md:text-[15px] text-white">
                  transparent, and secure.
                </p>
              </div>

              <button className="mt-8 md:mt-10 cursor-pointer h-14 md:h-16 w-[240px] md:w-[279px] text-base md:text-[20px] text-white bg-gradient-to-b from-[#346FED] to-[#A360F4] rounded-full flex items-center justify-center gap-3 mx-auto md:mx-0">
                Begin Your Journey <span>➜</span>
              </button>
            </div>

            <div
              className="w-full md:w-1/2 flex justify-center items-center
                      h-[320px] sm:h-[380px] md:h-[600px]"
            >
              <img
                src={mobile_bg}
                alt="Mobile Preview"
                className=" h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-[22px] md:text-[35px] font-bold text-[#394784]">
            Popular Cryptocurrencies Available On
            <span className="text-[#1A54CF] pl-2">Our Platform</span>
          </h1>

          <p className="mt-4 text-[14px] md:text-[20px] text-[#7983AD] max-w-[900px]">
            Explore a wide selection of top-performing digital assets, all
            supported on one secure
          </p>
          <p className="text-[14px] md:text-[18px] text-[#7983AD]">
            and user-friendly transferring platform
          </p>

          <div className="overflow-hidden mt-10 w-full">
            <div className="flex w-max animate-infinite">
              {images.concat(images).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] mr-6 shrink-0"
                  alt=""
                />
              ))}
            </div>
          </div>

          <button className="mt-12 cursor-pointer bg-[#1A54CF] hover:bg-[#1742A5] transition rounded-full px-8 py-3 text-[16px] md:text-[20px] text-white">
            Browse All
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#F0EDF9] to-white py-20">
        <div className="text-center px-4">
          <h1 className="text-[#394784] text-[24px] md:text-[35px] font-bold">
            Why Choose <span className="text-[#1A54CF]">Best Transfer?</span>
          </h1>
          <p className="text-[#7983AD] text-[14px] md:text-[20px] mt-3 max-w-[900px] mx-auto">
            A Smarter, Safer Way to convert Crypto and Transfer Money Worldwide
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative text-center md:text-left">
            <img
              src={frame}
              className="w-[55px] h-[55px] p-3 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] mx-auto md:mx-0"
            />
            <h1 className="text-[#394784] font-bold mt-4">
              Bank level Security
            </h1>
            <p className="text-[#616DA1] font-semibold mt-4">
              Advanced encryption, KYC verification,
            </p>
            <p className="text-[#616DA1] font-semibold">
              two-factor authentication, and continuous
            </p>
            <p className="text-[#616DA1] font-semibold">
              system monitoring ensure your funds and
            </p>
            <p className="text-[#616DA1] font-semibold">
              data stay fully protected at all times
            </p>

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[200px] border-r border-[#D6DBF5]" />
          </div>

          <div className="relative text-center md:text-left">
            <img
              src={tabler_transfer}
              className="w-[55px] h-[55px] p-3 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] mx-auto md:mx-0"
            />
            <h1 className="text-[#394784] font-bold mt-4">
              Instant Global Transfers
            </h1>
            <p className="text-[#616DA1] font-semibold mt-4">
              Send and receive money or cryptocurrency
            </p>
            <p className="text-[#616DA1] font-semibold">
              across borders in seconds with a seamless,
            </p>
            <p className="text-[#616DA1] font-semibold">
              hassle-free experience — no delays.
            </p>

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[200px] border-r border-[#D6DBF5]" />
          </div>

          <div className="text-center md:text-left">
            <img
              src={akar_icons_money}
              className="w-[55px] h-[55px] p-3 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] mx-auto md:mx-0"
            />
            <h1 className="text-[#394784] font-bold mt-4">
              Low Fees & Transparent Pricing
            </h1>
            <p className="text-[#616DA1] font-semibold mt-4">
              Enjoy competitive rates with no hidden fees —
            </p>
            <p className="text-[#616DA1] font-semibold">
              what you see is what you pay.
            </p>
            <p className="text-[#616DA1] font-semibold">
              Open your account today for faster, safer
            </p>
            <p className="text-[#616DA1] font-semibold">
              global conversions and transfers.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16">
          <h1 className="text-[#394784] font-bold text-center">
            Create account and Explore Best Transfer
          </h1>
          <button className="mt-5 mb-5 px-8 py-3 cursor-pointer rounded-full bg-[#1A54CF] text-white cursor-pointer">
            Sign Up Now
          </button>
        </div>
      </div>
      <div
        className="bg-center bg-cover py-20 px-4 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/Images/testimonials.png')",
        }}
      >
        <h1 className="text-[#394784] text-[26px] md:text-[40px] font-bold text-center max-w-[1000px]">
          What Makes Us Popular Among{" "}
          <span className="text-[#1A54CF]">Our Clients</span>
        </h1>

        <p className="text-[14px] md:text-[20px] text-[#7983AD] mt-3 text-center max-w-[800px]">
          Feedback and testimonials from our clients matter most to us
        </p>

        <div className="mt-10 w-full max-w-[1200px]">
          <Testimonials />
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${FAQBg})` }}
        className="bg-cover bg-center py-20 px-4"
      >
        <div className="text-center max-w-[1000px] mx-auto">
          <h1 className="text-[#394784] font-bold text-[26px] md:text-[40px]">
            Frequently Asked Questions{" "}
            <span className="text-[#1A54CF]">(FAQs)</span>
          </h1>

          <p className="text-[14px] md:text-[20px] font-semibold mt-3 text-[#7983AD]">
            Raise your concerns and we'll answer everything properly
          </p>
        </div>

        <div className="mt-14 w-full max-w-[900px] mx-auto space-y-5">
          <div className="shadow-lg rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between bg-white px-4 md:px-6 py-4 cursor-pointer"
              onClick={() => toggleFaq(1)}
            >
              <h3 className="text-[#1E2A5A] font-semibold text-[14px] md:text-lg pr-4">
                Is Best Transfer legally compliant with financial regulations?
              </h3>
              <img
                src={openFaqs[1] ? minus_icon : plus_icon}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                alt="toggle"
              />
            </div>

            {openFaqs[1] && (
              <div className="bg-[#6E6380] px-4 md:px-6 py-4">
                <p className="text-white text-[13px] md:text-sm leading-relaxed">
                  Yes. Best Transfer follows strict regulatory and compliance
                  standards, including KYC, AML, and data-protection protocols
                  to ensure every transaction is secure, transparent, and
                  lawful.
                </p>
              </div>
            )}
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between bg-white px-4 md:px-6 py-4 cursor-pointer"
              onClick={() => toggleFaq(2)}
            >
              <h3 className="text-[#1E2A5A] font-semibold text-[14px] md:text-lg pr-4">
                What about currency conversion costs and exchange rate risk?
              </h3>
              <img
                src={openFaqs[2] ? minus_icon : plus_icon}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                alt="toggle"
              />
            </div>

            {openFaqs[2] && (
              <div className="bg-[#6E6380] px-4 md:px-6 py-4">
                <p className="text-white text-[13px] md:text-sm leading-relaxed">
                  We offer highly competitive exchange rates with full
                  transparency. You’ll always see conversion charges upfront—no
                  hidden costs.
                </p>
              </div>
            )}
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between bg-white px-4 md:px-6 py-4 cursor-pointer"
              onClick={() => toggleFaq(3)}
            >
              <h3 className="text-[#1E2A5A] font-semibold text-[14px] md:text-lg pr-4">
                What if my HR or payroll system is custom or legacy?
              </h3>
              <img
                src={openFaqs[3] ? minus_icon : plus_icon}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                alt="toggle"
              />
            </div>

            {openFaqs[3] && (
              <div className="bg-[#6E6380] px-4 md:px-6 py-4">
                <p className="text-white text-[13px] md:text-sm leading-relaxed">
                  Best Transfer supports API-based integrations and flexible
                  payout solutions that work with both modern and legacy
                  platforms.
                </p>
              </div>
            )}
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between bg-white px-4 md:px-6 py-4 cursor-pointer"
              onClick={() => toggleFaq(4)}
            >
              <h3 className="text-[#1E2A5A] font-semibold text-[14px] md:text-lg pr-4">
                How do you convert fiat to crypto?
              </h3>
              <img
                src={openFaqs[4] ? minus_icon : plus_icon}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                alt="toggle"
              />
            </div>

            {openFaqs[4] && (
              <div className="bg-[#6E6380] px-4 md:px-6 py-4">
                <p className="text-white text-[13px] md:text-sm leading-relaxed">
                  Complete KYC, send fiat, and receive the equivalent crypto
                  securely.
                </p>
              </div>
            )}
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between bg-white px-4 md:px-6 py-4 cursor-pointer"
              onClick={() => toggleFaq(5)}
            >
              <h3 className="text-[#1E2A5A] font-semibold text-[14px] md:text-lg pr-4">
                How do you convert crypto to fiat in India?
              </h3>
              <img
                src={openFaqs[5] ? minus_icon : plus_icon}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                alt="toggle"
              />
            </div>

            {openFaqs[5] && (
              <div className="bg-[#6E6380] px-4 md:px-6 py-4">
                <p className="text-white text-[13px] md:text-sm leading-relaxed">
                  Deposit crypto, sell it for INR, and withdraw to your bank
                  account.
                </p>
              </div>
            )}
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between bg-white px-4 md:px-6 py-4 cursor-pointer"
              onClick={() => toggleFaq(6)}
            >
              <h3 className="text-[#1E2A5A] font-semibold text-[14px] md:text-lg pr-4">
                What happens if an international payout fails?
              </h3>
              <img
                src={openFaqs[6] ? minus_icon : plus_icon}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                alt="toggle"
              />
            </div>

            {openFaqs[6] && (
              <div className="bg-[#6E6380] px-4 md:px-6 py-4">
                <p className="text-white text-[13px] md:text-sm leading-relaxed">
                  Our support team tracks and resolves issues with partner banks
                  in real time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center py-20 px-4"
        style={{
          backgroundImage: "url('/src/assets/Images/callbackbg.png')",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-stretch">
          <div className="w-full md:w-1/2 flex justify-end">
            <div
              className="
          w-full max-w-[400px] h-[500px]
          overflow-hidden
          md:rounded-tl-lg md:rounded-bl-lg
          rounded-t-lg md:rounded-none
        "
            >
              <img
                src={bg9}
                alt="callback"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-start">
            <div
              className="
          bg-white w-full max-w-[420px] h-[500px]
          shadow-xl
          md:rounded-tr-lg md:rounded-br-lg
          rounded-b-lg md:rounded-none
          flex flex-col justify-center
        "
            >
              <div className="px-8">
                <h1 className="text-[24px] text-[#1F3A66]">Contact With Us</h1>
                <h1 className="text-[30px] font-bold text-[#1F3A66] mt-1">
                  We'll Call You Right Away
                </h1>

                <div className="mt-6 space-y-4">
                  <input
                    placeholder="Full Name"
                    className="bg-[#E2E3E8] p-3 w-full rounded-lg outline-none"
                  />

                  <div className="flex gap-3">
                    <input
                      placeholder="Email"
                      className="bg-[#E2E3E8] p-3 w-1/2 rounded-lg outline-none"
                    />
                    <input
                      placeholder="Phone Number"
                      className="bg-[#E2E3E8] p-3 w-1/2 rounded-lg outline-none"
                    />
                  </div>

                  <textarea
                    placeholder="Message"
                    className="bg-[#E2E3E8] h-[80px] w-full p-3 rounded-lg outline-none resize-none"
                  />

                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg cursor-pointer">
                    Send a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-white 
             py-8 sm:py-10 px-4 w-full text-center"
        style={{
          backgroundImage: "url('/src/assets/Images/footer_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          className="w-[160px] sm:w-[200px] h-auto mb-5"
          src={Bestransferlogo_white}
          alt="Best Transfer"
        />
        <div
          className="h-[2px] w-full max-w-[900px] 
                  bg-gradient-to-r from-white via-white/60 to-transparent 
                  rounded-full mb-5"
        />

        <h1 className="font-bold mb-3 text-[16px] sm:text-[18px]">Company</h1>
        <div
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 
               mb-5 text-[14px] sm:text-[15px]"
        >
          <a href="" className="hover:underline">
            Products
          </a>
          <a href="" className="hover:underline">
            Services
          </a>
          <a href="" className="hover:underline">
            About Us
          </a>
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <Link
          to="/terms-and-conditions"
          className="cursor-pointer hover:underline"
          >
            Terms and Conditions
          </Link>
          <a href="" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        <div
          className="h-[2px] w-full max-w-[900px] 
                  bg-gradient-to-r from-white via-white/60 to-transparent 
                  rounded-full mb-5"
        />

        <div
          className="max-w-[1200px] space-y-4 
               text-[13px] sm:text-[15px] leading-relaxed"
        >
          <p>
            Best Transfer is a business name of 1505333 B.C. LTD, a company
            incorporated in British Columbia, Canada, and registered as a Money
            Services Business (MSB) with the Financial Transactions and Reports
            Analysis Centre of Canada (FINTRAC) under registration number
            C100000589.
          </p>

          <p>
            UK services may be provided by our affiliated entity FX Master
            Limited, a company registered in England and Wales under company
            number 05248673. FX Master Limited is authorised and regulated by
            the Financial Conduct Authority (FCA) in the United Kingdom as a
            Payment Institution (Firm Reference Number: 538425).
          </p>

          <p>
            For more information, you can visit the Financial Services Register.
            Information related to digital assets is directed exclusively at
            persons located outside the United Kingdom and must not be acted
            upon by individuals within the United Kingdom.
          </p>

          <p className="font-bold text-[14px] sm:text-[18px] pt-3">
            © 2026 Best Transfer. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

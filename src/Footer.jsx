import React from "react";
import { Link } from "react-router-dom";
import Bestransferlogo_white from "./assets/Images/Bestransferlogo_white.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#2E2968] to-[#233169] text-white py-8 sm:py-10 px-4 w-full text-center">
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
        <Link
          to = "/"
          state={{scrolltohome:true}}
          className="hover:underline cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to="/"
          state={{ scrolltocontact: true }}
          className="hover:underline cursor-pointer"
        >
          Contact Us
        </Link>
        <Link
          to="/terms-and-conditions"
          state={{ scrolltostart: true }}
          className="cursor-pointer hover:underline"
        >
          Terms and Conditions
        </Link>
        <Link 
        to="/privacy-policy"
        state={{scrolltostart:true}}
        className="cursor-pointer hover:underline">
          Privacy Policy
        </Link>
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
          number 05248673. FX Master Limited is authorised and regulated by the
          Financial Conduct Authority (FCA) in the United Kingdom as a Payment
          Institution (Firm Reference Number: 538425).
        </p>

        <p>
          For more information, you can visit the Financial Services Register.
          Information related to digital assets is directed exclusively at
          persons located outside the United Kingdom and must not be acted upon
          by individuals within the United Kingdom.
        </p>

        <p className="font-bold text-[14px] sm:text-[18px] pt-3">
          © 2026 Best Transfer. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

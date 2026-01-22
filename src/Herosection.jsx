import React from "react";
import Walletpayment from "./assets/Images/Walletpayment.png";

export default function PaymentsHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F7FAFF] to-[#EAF0FF] flex items-center px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
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

          <button className="bg-[#2F6DF6] hover:bg-[#255BEA] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
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
    </section>
  );
}

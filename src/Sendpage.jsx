import React, { useEffect, useRef } from "react";
import Send from "./assets/Videos/Send.mp4"

export default function SendPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay might be blocked until user interaction
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7FF] flex items-center justify-center px-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2">

        {/* LEFT SECTION */}
        <div className="p-12">
          <h1 className="text-4xl font-bold text-[#0B214E] mb-4">
            Move Money Across Borders 
          </h1>

          <p className="text-gray-600 mb-10">
            Move money internationally without juggling banks, wallets, or tools. 
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">⤢</div>
              <div>
                <h3 className="font-semibold text-lg text-[#0B214E]">
                  Global collections & fast payouts
                </h3>
                <p className="text-gray-600 text-sm">
                  Money moves quickly in one platform for international operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">⤓</div>
              <div>
                <h3 className="font-semibold text-lg text-[#0B214E]">
                  Multi-currency support (USD, EUR, GBP, CAD)
                </h3>
                <p className="text-gray-600 text-sm">
                  Operate globally with built-in support for major currencies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">⤡</div>
              <div>
                <h3 className="font-semibold text-lg text-[#0B214E]">
                  Real-time global payouts
                </h3>
                <p className="text-gray-600 text-sm">
                  Pay suppliers, partners, and teams quickly through local rails.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-12 bg-[#2F6DF6] hover:bg-[#255BEA] text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
            <span>CTA: Explore Payout Workflows </span>
          </button>
        </div>
        {/* RIGHT SECTION – VIDEO */}
        <div className="bg-[#EAF0FF] flex items-center justify-center ">
          <video
            ref={videoRef}
            className="w-full rounded-xl object-cover shadow-md"
            src={Send}   // replace with your video path
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </div>
  );
}

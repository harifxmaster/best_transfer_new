import React, { useEffect, useRef } from "react";
import Send from "./assets/Videos/Send.mp4";

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
    <div className="min-h-screen bg-[#F4F7FF] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SECTION */}
        <div className="p-6 sm:p-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#0B214E] mb-4">
            Move Money Across Borders 
          </h1>

          <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
            Move money internationally without juggling banks, wallets, or tools. 
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="text-blue-600 text-xl sm:text-2xl">⤢</div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0B214E]">
                  Global collections & fast payouts
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Money moves quickly in one platform for international operations.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-blue-600 text-xl sm:text-2xl">⤓</div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0B214E]">
                  Multi-currency support (USD, EUR, GBP, CAD)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Operate globally with built-in support for major currencies.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-blue-600 text-xl sm:text-2xl">⤡</div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0B214E]">
                  Real-time global payouts
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Pay suppliers, partners, and teams quickly through local rails.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 sm:mt-12 bg-[#2F6DF6] hover:bg-[#255BEA] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-base">
            <span>CTA: Explore Payout Workflows</span>
          </button>
        </div>

        {/* RIGHT SECTION – VIDEO */}
        <div className="bg-[#EAF0FF] flex items-center justify-center p-4 sm:p-6">
          <video
            ref={videoRef}
            className="w-full rounded-xl object-cover shadow-md max-h-[300px] sm:max-h-full"
            src={Send} // replace with your video path
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </div>
  );
}

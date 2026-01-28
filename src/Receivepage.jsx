import React from "react";
import Receive from "./assets/Videos/Receive.mp4";

const Receivepage = () => {
  return (
    <div className="bg-[#f4f7fc] py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="px-4 sm:px-8 md:px-12 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#0b1b3f] mb-4">
            Get Paid Globally 
          </h1>

          <p className="text-gray-500 mb-8 sm:mb-12 max-w-full sm:max-w-md text-sm sm:text-base leading-relaxed">
            Collect money from clients worldwide with faster settlement. 
          </p>

          {/* Feature 1 */}
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
            <img className="w-12 h-12" src="/requestpayment.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f]">
                Global collections
              </h4>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm leading-relaxed">
                Receive payments from international clients using fiat or stablecoins.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
            <img className="w-12 h-12" src="/settlementpayment.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f]">
                Flexible settlement options
              </h4>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm leading-relaxed">
                Receive funds in fiat or stablecoins and convert based on your needs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-12">
            <img className="w-12 h-12" src="/stablecoins.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f]">
                Improved cash flow
              </h4>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm leading-relaxed">
                Near real-time settlement reduces long invoice delays.
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition">
            CTA: See How It Works 
          </button>
        </div>

        {/* RIGHT SIDE – VIDEO ONLY */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg p-4 sm:p-5">
            <video
              src={Receive}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Receivepage;

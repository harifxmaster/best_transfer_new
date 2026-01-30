import React from "react";
import Convert from "./assets/Videos/Convert.mp4";
import Footer from "./Footer"

const Convertpage = () => {
  return (
    <div className="bg-[#f5f8fe] py-8 sm:py-14 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto bg-white rounded-s mb-2 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT HALF (TEXT) */}
        <div className="px-4 sm:px-8 lg:px-14 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1b3f] mb-4">
            Real-Time B2B Invoicing and Settlement
          </h2>

          <p className="text-gray-500 max-w-full sm:max-w-md mb-8 sm:mb-14 text-sm sm:text-base leading-relaxed">
            Issue invoices and get paid in near real time to reduce long settlement delays.
          </p>

          {/* Feature 1 */}
          <div className="flex gap-3 sm:gap-5 mb-6 sm:mb-10">
            <img className="w-12 h-12" src="/requestpayment.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f] mb-1">
                Invoice-based collections
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-md">
                Create invoices and request payment from clients worldwide.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-3 sm:gap-5 mb-6 sm:mb-10">
            <img className="w-12 h-12" src="/fastpayment.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f] mb-1">
                Near real-time settlement
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-md">
                Payments clear faster, improving cash flow.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-3 sm:gap-5 mb-6 sm:mb-10">
            <img className="w-12 h-12" src="/bitcointodollar.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f] mb-1">
                Flat and stablecoin settlement
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-md">
                Receive invoice payments in fiat or stablecoins.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-3 sm:gap-5 mb-6 sm:mb-10">
            <img className="w-12 h-12" src="/settlementpayment.png" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0b1b3f] mb-1">
                Automated reconciliation support
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-md">
                Designed to simplify tracking and settlement.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT HALF (VIDEO) */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4 sm:px-10 py-8 sm:py-16">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg p-4 sm:p-6">
            <video
              src={Convert}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Convertpage;

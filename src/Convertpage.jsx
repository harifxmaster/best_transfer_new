import React from "react";
import Convert from "./assets/Videos/Convert.mp4";

const Convertpage = () => {
  return (
    <div className="bg-[#f5f8fe] py-14">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT HALF (UNCHANGED) */}
        <div className="px-14 py-16">
          <h2 className="text-4xl font-bold text-[#0b1b3f] mb-4">
            Real-Time B2B Invoicing and Settlement
          </h2>

          <p className="text-gray-500 max-w-md mb-14 leading-relaxed">
            Issue invoices and get paid in near real time to reduce long
            settlement delays.
          </p>

          {/* Feature 1 */}
          <div className="flex gap-5 mb-10">
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500 text-blue-600">
              $
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f] mb-1">
                Invoice-based collections
              </h4>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Create invoices and request payment from clients worldwide.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-5">
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500 text-blue-600">
              ↔
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f] mb-1">
                Near real-time settlement
              </h4>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Payments clear faster, improving cash flow.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500 text-blue-600">
              ↔
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f] mb-1">
                Flat and stablecoin settlement
              </h4>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Receive invoice payments in fiat or stablecoins.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500 text-blue-600">
              ↔
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f] mb-1">
                Automated reconciliation support
              </h4>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Designed to simplify tracking and settlement.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT HALF (VIDEO ONLY) */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-10 py-16">
          <div className="bg-white rounded-2xl shadow-xl  w-full max-w-md">
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
    </div>
  );
};

export default Convertpage;

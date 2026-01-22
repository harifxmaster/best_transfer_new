import React from "react";
import Receive from "./assets/Videos/Receive.mp4";

const Receivepage = () => {
  return (
    <div className="bg-[#f4f7fc] py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="px-12 py-16">
          <h1 className="text-4xl font-bold text-[#0b1b3f] mb-4">
            Get Paid Globally 
          </h1>

          <p className="text-gray-500 mb-12 max-w-md leading-relaxed">
            Collect money from clients worldwide with faster settlement. 
          </p>

          {/* Feature 1 */}
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
              ▶
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f]">
                Global collections
              </h4>
              <p className="text-gray-500 mt-1 max-w-sm leading-relaxed">
                Receive payments from international clients using fiat or stablecoins.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
              ◎
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f]">
                Flexible settlement options
              </h4>
              <p className="text-gray-500 mt-1 max-w-sm leading-relaxed">
                Receive funds in fiat or stablecoins and convert based on your needs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 mb-12">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
              ⇪
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0b1b3f]">
                Improved cash flow
              </h4>
              <p className="text-gray-500 mt-1 max-w-sm leading-relaxed">
                Near real-time settlement reduces long invoice delays.
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
            CTA: See How It Works 
          </button>
        </div>

        {/* RIGHT SIDE – VIDEO ONLY */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md">

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

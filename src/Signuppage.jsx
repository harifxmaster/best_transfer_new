import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [type, setType] = useState("business");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/loginbg.png')" }}
    >
      {/* Logo */}
      <div className="mb-5 mt-10">
        <img
          src="/Besttransferlogo.png"
          alt="Best Transfer"
          className="h-10 mx-auto"
        />
      </div>

      {/* Card */}
      <div className="w-[50%] bg-white/82 backdrop-blur-xl rounded-[28px] shadow-2xl px-14 py-12">
        {/* Heading */}
        <h2 className="text-center text-lg font-bold text-[#394784]">
          Create Your BestTransfer Account
        </h2>
        <p className="text-center text-sm font-bold text-[#394784] mt-1 mb-8">
          Secure · Fast · Reliable
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 flex gap-2 shadow-inner">
            <button
              onClick={() => setType("individual")}
              className={`px-8 py-2 rounded-full text-sm font-medium transition ${
                type === "individual"
                  ? "bg-[#3369CA] text-white"
                  : "bg-white"
              }`}
            >
              Individual
            </button>

            <button
              onClick={() => setType("business")}
              className={`px-8 py-2 rounded-full text-sm font-medium transition ${
                type === "business" ? "bg-[#3369CA] text-white" : "bg-white"
              }`}
            >
              Business
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-x-6 gap-y-5">

          {type === "individual" && (
            <>
              {/* Row 1 */}
              <Input label="First Name" placeholder="Enter your first name" />
              <Input label="Last Name"  placeholder="Enter your last name" />

              {/* Row 2 */}
              <Input label="Email Address" placeholder="Enter your Email ID" />
              <Input
                label="Phone Number"
                placeholder="Enter your mobile number"
              />

              {/* Row 3 */}
              <Input
                label="Create Password"
                type="password"
                placeholder="Enter your password"
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Re-enter your password"
              />
            </>
          )}

          {/* BUSINESS */}
          {type === "business" && (
            <>
              <Input label="First Name" placeholder="Enter your full name" />

              <Input label="Email" placeholder="Enter your Email ID" />

              <Select
                label="Your role in Business"
                placeholder="Select your role"
              />

              <Input label="Phone" placeholder="Enter your mobile number" />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Re-enter your password"
              />

              <Select
                label="Business Information"
                placeholder="Business Type"
              />

              <Input
                label="Business Address"
                placeholder="Enter your business address"
              />
            </>
          )}

          {/* Terms */}
          <div className="col-span-2 flex items-start gap-3 mt-3 text-sm  text-[#394784]">
            <input type="checkbox" className="h-4 w-4 mt-1 accent-blue-600" />
            <p>
              By continuing, I agree to the Best Transfer{" "}
              <span className="font-bold text-[#394784] cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#394784] cursor-pointer">
                Online Privacy Statement
              </span>
              .
            </p>
          </div>

          {/* Footer */}
          <div className="col-span-2 flex items-center justify-between">
            <p className="text-sm text-[#45474B]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#1A54CF] font-bold">
                SignIn
              </Link>
            </p>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-[#631CDE] text-white text-sm font-semibold flex items-center gap-2 shadow-lg hover:opacity-90"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-sm font-semibold text-[#1F3A66]">{label}</label>
      <input
        {...props}
        className="mt-1 h-12 w-full rounded-xl bg-white border border-gray-200 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    </div>
  );
}

/* Reusable Select */
function Select({ label, placeholder, className = "" }) {
  return (
    <div className={className}>
      <label className="text-sm font-semibold text-[#1F3A66]">{label}</label>
      <select className="mt-1 h-12 w-full rounded-xl bg-white border border-gray-200 px-4 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400">
        <option>{placeholder}</option>
      </select>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [type, setType] = useState("individual");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/loginbg.png')" }}
    >
      <div className="flex items-center pt-10 justify-center gap-2 mb-6">
        <img
          src="/Besttransferlogo.png"
          alt="Best Transfer Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Card */}
      <div className="w-[40%] max-w-4xl bg-white/82 backdrop-blur-md rounded-3xl shadow-2xl px-12 py-10">
        {/* Heading */}
        <h2 className="text-center text-xl font-bold text-[#394784] mb-1">
          Create Your BestTransfer Account
        </h2>
        <p className="text-center font-semibold text-sm text-[#394784] mb-4">
          Secure · Fast · Reliable
        </p>

        {/* 🔹 TOGGLE (added only) */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-full p-1 flex gap-2">
            <button
              onClick={() => setType("individual")}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition ${
                type === "individual" ? "bg-[#3369CA] text-white" : "bg-white"
              }`}
            >
              Individual
            </button>

            <button
              onClick={() => setType("business")}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition ${
                type === "business" ? "bg-[#3369CA] text-white" : "bg-white"
              }`}
            >
              Business
            </button>
          </div>
        </div>

        {/* Form (UNCHANGED) */}
        <form className="grid grid-cols-2 gap-6">
          {/* Email */}
          <div className="col-span-2">
            <label className="text-sm font-semibold text-[#1F3A66]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email ID"
              className={input}
            />
          </div>

          {/* Password */}
          <div className="col-span-2">
            <label className="text-sm text-[#1F3A66] font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={input}
            />
          </div>

          {/* Remember + Forgot */}
          <div className="col-span-2 flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 font-semibold  text-gray-700">
              <input
                type="checkbox"
                className="accent-blue-600  text-[#45474B]"
              />
              Remember me
            </label>

            <Link
              to="/forgot-pin"
              className="text-[#1A54CF] font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r w-60 bg-[#631CDE] text-white px-5 py-2 rounded-3xl font-medium hover:opacity-90"
            >
              Sign in
            </button>
          </div>

          {/* Footer */}
          <div className="col-span-2 ml-20 font-semibold flex items-center justify-between">
            <p className="text-sm text-[#45474B] pl-1 ">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#1A54CF] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

/* Input style (UNCHANGED) */
const input =
  "mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black-100";

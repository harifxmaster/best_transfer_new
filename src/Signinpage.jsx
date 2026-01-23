import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast.success("Login successful!");
    // navigate("/dashboard"); // uncomment when ready
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/loginbg.png')" }}
    >
      <button
        className="absolute top-16 left-40 cursor-pointer flex items-center gap-2 text-white hover:opacity-80"
        onClick={() => navigate("/")}
      >
        <span className="text-lg">←</span> Back
      </button>

      <Toaster position="top-right" reverseOrder={false} />

      {/* Logo */}
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

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <Input
            label="Email"
            name="email"
            placeholder="Enter your Email ID"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          {/* Remember & Forgot */}
          <div className="col-span-2 flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 font-semibold text-gray-700">
              <input
                type="checkbox"
                className="accent-blue-600 text-[#45474B]"
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

          {/* Submit Button */}
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
            <p className="text-sm text-[#45474B] pl-1">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="text-[#1A54CF] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, error, className = "", ...props }) {
  return (
    <div className={`col-span-2 ${className}`}>
      <label className="text-sm font-semibold text-[#1F3A66]">{label}</label>
      <input
        {...props}
        className={`mt-1 h-12 w-full hover:bg-white rounded-xl border px-4 text-sm focus:outline-none
          ${error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}
        `}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}

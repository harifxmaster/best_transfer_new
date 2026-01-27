import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [type, setType] = useState("business");
  const [formData, setFormData] = useState({});
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

    if (type === "business") {
      if (!formData.businessname)
        newErrors.businessname = "Business Name is required";
      if (!formData.businesstype)
        newErrors.businesstype = "Business Type is required";
      if (!formData.businessaddress)
        newErrors.businessaddress = "Business Address is required";
      if (!formData.createpassword)
        newErrors.createpassword = "Create your password";
      if (!formData.confirmpassword)
        newErrors.confirmpassword = "Confirm your password";
      if (!formData.businessrole)
        newErrors.businessrole = "Enter your role in Business";
      if (!formData.yourname) newErrors.yourname = "Your Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.mobilenumber)
        newErrors.mobilenumber = "Mobile Number is required";
    }

    if (type === "individual") {
      if (!formData.firstname) newErrors.firstname = "First Name is required";
      if (!formData.lastname) newErrors.lastname = "Last Name is required";
      if (!formData.emailaddress)
        newErrors.emailaddress = "Email Address is required";
      if (!formData.phonenumber)
        newErrors.phonenumber = "phonenumber is required";
      if (!formData.createpassword)
        newErrors.createpassword = "Create your password";
      if (!formData.confirmindividualpassword)
        newErrors.confirmindividualpassword = "Confirm your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorMessage = Object.values(newErrors)[0];
      toast.error(firstErrorMessage);
      return;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-0"
      style={{ backgroundImage: "url('/loginbg.png')" }}
    >
      <button
        className="absolute top-6 left-4 sm:top-16 sm:left-40 cursor-pointer flex items-center gap-2 text-white hover:opacity-80"
        onClick={() => navigate("/")}
      >
        <span className="text-lg">←</span> Back
      </button>

      <Toaster position="top-right" reverseOrder={false} />
      <div className="mb-5 mt-10">
        <img
          src="/Besttransferlogo.png"
          alt="Best Transfer"
          className="h-10 mx-auto"
        />
      </div>

      <div className="w-full sm:w-[50%] bg-[linear-gradient(135deg,#FFF5F9_0%,#FFFFFF_50%,#FFF8FA_100%)] backdrop-blur-xl rounded-[28px] shadow-2xl px-6 py-8 sm:px-14 sm:py-12">
        <h2 className="text-center text-lg font-bold text-[#394784]">
          Create Your BestTransfer Account
        </h2>
        <p className="text-center text-sm font-bold text-[#394784] mt-1 mb-8">
          Secure · Fast · Reliable
        </p>

        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 flex gap-2 shadow-inner">
            <button
              type="button"
              onClick={() => setType("individual")}
              className={`px-8 py-2 rounded-full text-sm font-medium transition ${
                type === "individual" ? "bg-[#3369CA] text-white" : "bg-white"
              }`}
            >
              Individual
            </button>

            <button
              type="button"
              onClick={() => setType("business")}
              className={`px-8 py-2 rounded-full text-sm font-medium transition ${
                type === "business" ? "bg-[#3369CA] text-white" : "bg-white"
              }`}
            >
              Business
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
        >
          {type === "individual" && (
            <>
              <Input
                label="First Name"
                onChange={handleChange}
                placeholder="Enter your first name"
                name="firstname"
                error={errors.firstname}
              />
              <Input
                label="Last Name"
                onChange={handleChange}
                placeholder="Enter your last name"
                name="lastname"
                error={errors.lastname}
              />
              <Input
                label="Email Address"
                onChange={handleChange}
                placeholder="Enter your Email ID"
                name="emailaddress"
                error={errors.emailaddress}
              />
              <Input
                label="Phone Number"
                onChange={handleChange}
                placeholder="Enter your mobile number"
                name="phonenumber"
                error={errors.phonenumber}
              />
              <Input
                label="Create Password"
                type="password"
                onChange={handleChange}
                placeholder="Enter your password"
                name="createpassword"
                error={errors.createpassword}
              />
              <Input
                label="Confirm Password"
                type="password"
                onChange={handleChange}
                placeholder="Re-enter your password"
                name="confirmindividualpassword"
                error={errors.confirmindividualpassword}
              />
            </>
          )}

          {type === "business" && (
            <>
              <Input
                label="Business Name"
                onChange={handleChange}
                placeholder="Enter your Business Name"
                name="businessname"
                error={errors.businessname}
              />
              <Input
                label="Business Type"
                onChange={handleChange}
                placeholder="Enter your Business Type"
                name="businesstype"
                error={errors.businesstype}
              />
              <Input
                label="Business Address"
                onChange={handleChange}
                placeholder="Enter Your Business Address"
                name="businessaddress"
                error={errors.businessaddress}
              />
              <Input
                label="Business Email Address"
                onChange={handleChange}
                placeholder="Enter your Business Email Address"
                name="businessemailaddress"
              />
              <Input
                label="Create Password"
                type="password"
                onChange={handleChange}
                placeholder="Enter your password"
                name="createpassword"
                error={errors.createpassword}
              />
              <Input
                label="Confirm Password"
                type="password"
                onChange={handleChange}
                placeholder="Re-Enter Your Password"
                name="confirmbusinesspassword"
                error={errors.confirmpassword}
              />
              <Input
                label="Your Role In Business"
                onChange={handleChange}
                placeholder="Business Role"
                name="businessrole"
                error={errors.businessrole}
              />
              <Input
                label="Your Name"
                name="yourname"
                onChange={handleChange}
                placeholder="Enter your Name"
                error={errors.yourname}
              />
              <Input
                label="Email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your Email Address"
                error={errors.email}
              />
              <Input
                label="Mobile Number"
                name="mobilenumber"
                onChange={handleChange}
                placeholder="Enter your Mobile Number"
                error={errors.mobilenumber}
              />
            </>
          )}

          <div className="col-span-1 sm:col-span-2 flex items-start gap-3 mt-3 text-sm text-[#394784]">
            <input type="checkbox" className="h-4 w-4 mt-1 accent-blue-600" />
            <p>
              By continuing, I agree to the Best Transfer{" "}
              <span
                onClick={() => navigate("/terms-and-conditions")}
                className="font-bold text-[#394784] cursor-pointer"
              >
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span
                onClick={() => navigate("/privacy-policy")}
                className="font-bold text-[#394784] cursor-pointer"
              >
                Online Privacy Statement
              </span>
              .
            </p>
          </div>

          {/* Footer */}
          <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <p className="text-sm text-[#45474B]">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-[#1A54CF] font-bold">
                Sign in
              </Link>
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#631CDE] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:opacity-90"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, error, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-sm font-semibold text-[#1F3A66]">{label}</label>
      <input
        {...props}
        className={`mt-1 h-12 w-full hover:bg-white rounded-xl border px-4 text-sm focus:outline-none
          ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-200 focus:ring-blue-400"
          }
        `}
      />
      {error && <p className="mt-1 text-s text-red-500 font-medium">{error}</p>}
    </div>
  );
}

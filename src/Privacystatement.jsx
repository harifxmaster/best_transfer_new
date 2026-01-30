import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Subtract from "../public/Subtract.svg";

const Privacystatement = () => {
  const [open, setOpen] = useState(false);
  const contactinforef = useRef(null);
  const privacyref = useRef(null);
  const location = useLocation();

  useEffect(()=>{

    if(location.state?.scrolltostart){
      privacyref.current?.scrollIntoView({behavior:"smooth",block:"start"})
    }
  },[location.state])
  return (
    <div ref={privacyref} className="w-full h-screen">
      <div
        onClick={() => {
          if (open) {
            setOpen(false);
          }
        }}
        className="flex flex-col md:flex-row items-center bg-[#F5F0FF] justify-center w-full gap-4 md:gap-20"
      >
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 md:h-[43px]"
            src={Subtract}
            alt="Subtract"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-[#394784] font-bold text-lg md:text-xl">
              Best Transfer
            </h1>
            <p className="text-[#717EB5] text-sm md:text-base">
              Fast. Secure. Transparent
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-[16px]">
          <Link to="/" className="text-[#1A54CF]">
            Home
          </Link>
          <div className="relative inline-block">
            <span
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer text-[#1F2937] font-medium px-2 inline-flex items-center select-none"
            >
              Payments
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {open && (
              <div className="absolute left-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg w-64 z-50 mt-2">
                <Link
                  to="/payments/send"
                  className="block px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-semibold text-[#1F2937]">Send</p>
                  <p className="text-xs text-gray-500">
                    Send money to individuals or businesses
                  </p>
                </Link>

                <Link
                  to="/payments/receive"
                  className="block px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-semibold text-[#1F2937]">
                    Receive
                  </p>
                  <p className="text-xs text-gray-500">
                    Accept payments from anywhere
                  </p>
                </Link>

                <Link
                  to="/payments/convert"
                  className="block px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="text-sm font-semibold text-[#1F2937]">
                    Convert
                  </p>
                  <p className="text-xs text-gray-500">
                    Convert currencies instantly
                  </p>
                </Link>
              </div>
            )}
          </div>

          <a className="text-[#1F2937]" href="">
            Send Money
          </a>
          <a className="text-[#1F2937]" href="">
            Transfer Crypto
          </a>
          <a className="text-[#1F2937]" href="">
            Support
          </a>
          <a className="text-[#1F2937]" href="">
            About Us
          </a>
          <Link
            to="/sign-in"
            className="text-[#1A54CF] font-bold ml-10 text-sm md:text-[16px]"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="md:py-1 flex items-center justify-center bg-blue-600 cursor-pointer w-full md:w-[136px] h-[35px] md:-mt-2 text-white rounded-xl text-sm md:text-[16px]"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="bg-[#F5F0FF]">
        <h1 className="pt-15 pl-20 font-bold">
          1505333 B.C. LTD – Privacy Policy
        </h1>
        <h1 className="pt-2 font-bold pl-20">
          Effective Date: 01 October 2025
        </h1>
        <p className="pt-2 pl-20">
          This Privacy Policy outlines how{" "}
          <span className="font-bold">1505333 B.C. LTD</span>, ("the Company"),
          collects, processes, shares, retains, and uses personal data. As a{" "}
          <span className="font-bold">
            FINTRAC-registered and regulated Canadian Money Services Business
            (MSB)
          </span>
          , 1505333 B.C. LTD acts as the data controller for individuals and
          business users engaging with its services, including all online
          platforms and mobile applications ("Platforms" and "Applications")
        </p>
        <p className="pt-2 pl-20">
          By accessing our Platforms, Applications, or accepting terms during
          registration, you ("the user") agree to the practices described in
          this Privacy Policy. We are committed to protecting your privacy and
          complying with{" "}
          <span className="font-bold">Canadian privacy legislation</span>,
          particularly the{" "}
          <span className="font-bold">
            Personal Information Protection and Electronic Documents Act
            (PIPEDA)
          </span>
          and relevant provincial laws.
        </p>
        <h1 className="pt-5 font-bold pl-20">Information We Collect</h1>
        <p className="pt-2 pl-20">
          To ensure secure and efficient service delivery, 1505333 B.C. LTD
          collects various types of personal and business data. This occurs
          during registration, onboarding, service delivery, and usage of our
          Platforms or Applications.
        </p>
        <p className="pt-2 pl-20">
          Personal data includes, but is not limited to:
        </p>
        <h1 className="pt-2 font-bold pl-20">
          ● Identification and Contact Information
        </h1>
        <p className="pt-2 pl-20">
          Name, email, phone number, and business contact details. Used to
          verify identity and maintain effective communication.
        </p>
        <h1 className="pt-2 font-bold pl-20">
          ● Corporate and Compliance Data
        </h1>
        <p className="pl-20">
          Documents and information for{" "}
          <span className="font-bold">Know Your Business (KYB)</span> and{" "}
          <span className="font-bold">Anti-Money Laundering (AML)</span>{" "}
          purposes, including business registration, ownership structure, and
          beneficial ownership details
        </p>
        <h1 className="pt-2 font-bold pl-20">● Technical and Access Data</h1>
        <p className="pl-20">
          IP addresses, device type, browser, login records, and location data,
          used to detect suspicious activity and secure access.
        </p>
        <h1 className="pt-2 font-bold pl-20">● Behavioural Data</h1>
        <p className="pt-2 pl-20">
          Browsing activity and platform interaction metrics to improve user
          experience and service optimization.
        </p>
        <h1 className="pt-2 font-bold pl-20">Purpose of Data Collection</h1>
        <p className="pt-2 pl-20">
          We collect and process personal data for the following lawful
          purposes:
        </p>
        <h1 className="pt-2 font-bold pl-20">● Regulatory Compliance</h1>
        <p className="pt-2 pl-20">
          To meet obligations under the Proceeds of Crime (Money Laundering) and
          Terrorist Financing Act (PCMLTFA) and other regulations administered
          by FINTRAC. This includes due diligence, reporting, and maintaining
          audit records
        </p>
        <h1 className="pt-2 font-bold pl-20">● Service Delivery</h1>
        <p className="pt-2 pl-20">
          To provide requested services such as international remittance, crypto
          payouts, and currency exchange in a secure and seamless manner.
        </p>
        <h1 className="pt-2 font-bold pl-20">● Contract Fulfillment</h1>
        <p className="pt-2 pl-20">
          To manage client relationships, fulfill contracts, and provide
          continuous access to our Platforms and Applications.
        </p>
        <h1 className="pt-2 font-bold pl-20">● Security and Risk Management</h1>
        <p className="pt-2 pl-20">
          To assess financial crime risk, detect fraud, and enhance data
          protection
        </p>
        <h1 className="pt-2 font-bold pl-20">● Analytics and Improvements</h1>
        <p className="pt-2 pl-20">
          To analyse service performance, understand user preferences, and
          develop enhancements for functionality and experience.
        </p>
        <h1 className="pt-2 font-bold pl-20">● Marketing (with Consent)</h1>
        <p className="pt-2 pl-20">
          With your explicit consent, we may send updates and offers related to
          our services. You may opt out of these communications at any time
        </p>
        <h1 className="pt-2 font-bold pl-20">Disclosure of Information</h1>
        <p className="pt-2 pl-20">We may disclose personal data to:</p>
        <p className="pl-20 pt-2">
          <span className="font-bold">
            ● Regulatory authorities (e.g., FINTRAC, CRA)
          </span>{" "}
          to comply with lawful obligations.
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">
            ● Technology and compliance partners
          </span>{" "}
          who provide services such as ID verification, transaction processing,
          or analytics.
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">● Law enforcement or courts</span>, when
          required by a subpoena, warrant, or court order.
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">● Entities outside Canada</span>, with
          appropriate safeguards such as{" "}
          <span className="font-bold">data transfer agreements</span> or
          adherence to recognized privacy frameworks.
        </p>
        <h1 className="pt-2 font-bold pl-20">User Rights Under Canadian Law</h1>
        <p className="pl-20 pt-2">
          As a user, you have the following rights under PIPEDA:
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">● Right to Access:</span> You may request
          a copy of the personal data we hold about you.
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">● Right to Rectification: </span>You may
          request corrections to inaccurate or outdated data.
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">● Right to Withdraw Consent:</span> You
          may withdraw marketing consent or object to processing (where
          applicable).
        </p>
        <p className="pt-2 pl-20">
          <span className="font-bold">● Right to File a Complaint:</span> If
          your privacy rights have been violated, you may contact the Office of
          the Privacy Commissioner of Canada (OPC).
        </p>
        <p className="pt-2 pl-20">
          To exercise your rights, please contact our Privacy Officer at:
          <a
            href="mailto:Admin@Besttransfer.com"
            className="hover:underline font-bold"
          >
            Admin@Besttransfer.com
          </a>
        </p>
        <h1 className="pt-2 font-bold pl-20">Data Retention</h1>
        <p className="pt-2 pl-20">
          We retain client data for a minimum of five (5) years as required by
          FINTRAC regulations, and longer where necessary for legal or
          operational purposes. Data is securely deleted or anonymized after the
          retention period.
        </p>
        <h1 className="pt-2 font-bold pl-20">Data Security</h1>
        <p className="pt-2 pl-20">
          <span className="font-bold"></span> We use robust security systems to
          protect personal data, including:
        </p>
        <p className="pt-2 font-bold pl-20">
          <span className="font-bold">● End-to-end encryption (SSL/TLS)</span>
        </p>
        <p className="pt-2 font-bold pl-20">
          <span className="font-bold">
            ● Firewalls and intrusion detection systems
          </span>
        </p>
        <p className="pt-2 font-bold pl-20">
          <span className="font-bold">● Multi-factor authentication</span>
        </p>
        <p className="pt-2 font-bold pl-20">
          <span className="font-bold">
            ● Access controls and staff training
          </span>
        </p>
        <p className="pt-2 font-bold pl-20">
          <span className="font-bold"></span> Regular audits and vulnerability
          assessments are conducted to mitigate risk
        </p>
        <h1 className="pt-2 font-bold pl-20">Policy Updates</h1>
        <p className="pt-2 pl-20">
          his Privacy Policy is reviewed and updated periodically. Any material
          changes will be communicated via email or through our Platform.
        </p>
        <div ref={contactinforef}>
          <h1 className="pt-2 font-bold pl-20">Contact Information</h1>
          <p className="pt-2 font-bold pl-20">Data Controller:</p>
          <p className="pt-2 font-bold pl-20">1505333 B.C. LTD</p>
          <p className="pt-2 pl-20">FINTRAC MSB Registration #: C100000589</p>
          <p className="pt-2 pl-20">British Columbia, Canada</p>
          <p className="pt-2">
            <a
              href="mailto:Admin@Besttransfer.com"
              className="hover:underline font-bold pt-0 pl-20"
            >
              Admin@Besttransfer.com
            </a>
          </p>
          <p className="pt-2 pl-20">
            If you believe your privacy rights have been violated, contact the
            Office of the Privacy Commissioner of Canada (OPC):
          </p>
          <p className="pt-2 pl-20">1-800-282-1376</p>
          <p className="pt-2 pl-20 pb-10">
            <a
              href="https://www.priv.gc.ca"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              https://www.priv.gc.ca
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacystatement;

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Subtract from "../public/Subtract.svg";

const Termsandconditions = () => {
  const [open, setOpen] = useState(false);
  const termsref = useRef(null);
  const location = useLocation();

  useEffect(()=>{
    if(location.state?.scrolltostart){
      termsref.current?.scrollIntoView({behavior:"smooth",block:"start"})
    }
  },[location.state])
  return (
    <div ref={termsref} className="w-full h-screen">
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
        <h1 className="font-bold pl-20 pt-15">Terms and Conditions</h1>
        <h1 className="font-bold pl-20 pt-5">Last Updated: 26/01/2026</h1>
        <p className="pl-20 pt-2">
          These Terms and Conditions (“T&C”) govern the relationship between
          Best Transfer, a business name of 1505333 B.C. LTD, a company
          incorporated in British Columbia, Canada, with its principal office in
          [Insert Company Address], and registered with the Financial
          Transactions and Reports Analysis Centre of Canada (“FINTRAC”) under
          MSB Registration Number [Insert MSB Number] (hereinafter referred to
          as “Best Transfer”, “Company”, “we”, or “us”), and its clients
          (individuals or entities)
        </p>
        <p className="pl-20 pt-2">
          By using our services, you agree to comply with and be bound by these
          T&C. Please read them carefully.
        </p>
        <h1 className="font-bold pl-20 pt-5">1. General Provisions</h1>
        <p className="pl-20 pt-2">
          1.1. Best Transfer provides money services including domestic and
          international fund transfers and foreign exchange, in accordance with
          applicable Canadian regulations, including the Proceeds of Crime
          (Money Laundering) and Terrorist Financing Act (“PCMLTFA”).
        </p>
        <p className="pl-20 pt-2">
          1.2. These T&Cs, along with any signed agreements, onboarding forms,
          and applicable pricing schedules, constitute a binding agreement
          between the Client and Best Transfer.
        </p>
        <p className="pl-20 pt-2">
          1.3. Use of our services confirms acceptance of these T&C.
        </p>
        <p className="pl-20 pt-2">
          1.4. Best Transfer reserves the right to amend these T&C at its
          discretion. Clients will be notified of changes at least 30 days in
          advance unless otherwise required for legal or security reasons.
          Continued use of services after amendments indicates acceptance.
        </p>
        <p className="pl-20 pt-2">
          1.5. All communication relating to these T&C shall be conducted in
          English.
        </p>
        <h1 className="font-bold pl-20 pt-5">2. Definitions</h1>
        <p className="pl-20 pt-2">
          2.1. <span className="font-bold">Client:</span> Any individual or
          entity that uses Best Transfer’s services.
        </p>
        <p className="pl-20 pt-2">
          2.2.<span className="font-bold">Money Services:</span>Includes foreign
          exchange, money transfers, and related activities as defined under
          Canadian MSB regulations.
        </p>
        <p className="pl-20 pt-2">
          2.3.<span className="font-bold">Business Days</span> Monday through
          Friday, excluding Canadian federal statutory holidays
        </p>
        <p className="pl-20 pt-2">
          2.4.<span className="font-bold">Framework Agreement:</span>The
          contractual agreement including these T&C and other relevant client
          agreements.
        </p>
        <h1 className="font-bold pl-20 pt-5">3. Onboarding Requirements</h1>
        <p className="pl-20 pt-2">
          3.1. Clients must complete the onboarding process, which includes:
        </p>
        <p className="pl-40">
          ●  Submission of the individual or corporate onboarding form
        </p>
        <p className="pl-40 ">●  Provision of required KYC/KYB documentation:</p>
        <p className="pl-40">● Government-issued ID and proof of address</p>
        <p className="pl-40">
          ● For businesses: certificate of incorporation, articles of
          incorporation, ownership structure, and UBO information.
        </p>
        <p className="pl-40">● AML compliance documents, if applicable</p>
        <p className="pl-20 pt-2">
          3.2. Clients must ensure that all provided information is accurate and
          truthful. False information may lead to termination or legal action.
        </p>
        <p className="pl-20 pt-2">
          3.3. High-risk clients (e.g., those from high-risk jurisdictions or
          involved in high-risk sectors) may be subject to enhanced due
          diligence
        </p>
        <p className="pl-20 pt-2">
          3.4. Best Transfer reserves the right to decline onboarding
          applications at its discretion
        </p>
        <p className="pl-20 pt-2">
          3.5. Clients must notify the Company of any changes in ownership,
          control, contact information, or business activity.
        </p>
        <p className="pl-20 pt-2">
          3.6. Clients must update identification documents if they are changed
          or expired.
        </p>
        <p className="pl-20 pt-2">
          3.7. Best Transfer may provide services under reverse solicitation,
          where the client has proactively sought our services without
          solicitation.
        </p>
        <h1 className="font-bold pl-20 pt-5">4. Payment Account Access</h1>
        <p className="pl-20 pt-5">
          4.1. Access to services is granted upon completion of onboarding and
          acceptance of these terms.
        </p>
        <p className="pl-20 pt-2">
          4.2. Clients are responsible for safeguarding login and account
          credentials
        </p>
        <p className="pl-20 pt-2">
          4.3. Best Transfer does not permit anonymous or pseudonymous accounts.
        </p>
        <h1 className="font-bold pl-20 pt-5">5. Use of Services</h1>
        <p className="pl-20 pt-2">
          5.1. Clients must use services only for lawful purposes. Prohibited
          uses include:
        </p>
        <p className="pl-40">●  Money laundering or terrorist financing.</p>
        <p className="pl-40">
          ●  Transactions with sanctioned persons or jurisdictions.
        </p>
        <p className="pl-40">
          ●  Activities restricted under our onboarding terms.
        </p>
        <p className="pl-20 pt-2">
          5.2. Transactions may be monitored, and suspicious activity will lead
          to service suspension or termination
        </p>
        <p className="pl-20 pt-2">
          5.3. Best Transfer is not responsible for failed or delayed transfers
          caused by incomplete or incorrect information.
        </p>
        <h1 className="font-bold pl-20 pt-5">6. Processing of Transactions</h1>
        <p className="pl-20 pt-2">
          6.1. Transactions are processed during business hours and are subject
          to cutoff times.
        </p>
        <p className="pl-20 pt-2">6.2. Transactions may be rejected if</p>
        <p className="pl-40 ">●  The client lacks sufficient funds</p>
        <p className="pl-40">
          ●  The transaction is incomplete or violates law or policy.
        </p>
        <p className="pl-20 pt-2">
          6.3. Once processed, transactions may not be revoked.
        </p>
        <p className="pl-20 pt-2">
          6.4. Transaction details and confirmations are provided
          electronically.
        </p>
        <p className="pl-20 pt-2">
          6.5. Fees are outlined in the pricing schedule. Currency conversion
          fees may apply.
        </p>
        <h1 className="font-bold pl-20 pt-5">7. Fees and Charges</h1>
        <p className="pl-20 pt-2">
          7.1. Service fees are detailed in our fee schedule, available upon
          request or online
        </p>
        <p className="pl-20 pt-2">
          7.2. Fees are deducted from the client’s account or collected at the
          time of service
        </p>
        <p className="pl-20 pt-2">
          7.3. Exchange rates are determined at the time of processing.
        </p>
        <p className="pl-20 pt-2">
          7.4. We may change our fee structure with 30 days’ notice.
        </p>
        <h1 className="font-bold pl-20 pt-5">8. Compliance and Monitoring</h1>
        <p className="pl-20 pt-2">
          8.1. Best Transfer complies with FINTRAC regulations and PCMLTFA.
        </p>
        <p className="pl-20 pt-2">
          8.2. We reserve the right to monitor transactions and request
          additional information at any time
        </p>
        <p className="pl-20 pt-2">
          8.3. Non-compliance may lead to immediate suspension or termination
        </p>
        <p className="pl-20 pt-2">
          8.4. We cooperate with law enforcement and regulators as required by
          law.
        </p>
        <h1 className="font-bold pl-20 pt-5">9. Limitation of Liability</h1>
        <p className="pl-20 pt-2">9.1. Best Transfer is not liable for:</p>
        <p className="pl-40">●  Incorrect information provided by clients.</p>
        <p className="pl-40">●  Delays beyond our control.</p>
        <p className="pl-40">
          ●  Acts of third parties or force majeure events.
        </p>
        <p className="pl-20 pt-2">
          9.2. Our liability is limited to the fees paid for the specific
          transaction.
        </p>
        <p className="pl-20 pt-2">
          9.3. We are not responsible for losses caused by unauthorized access
          due to client negligence
        </p>
        <h1 className="font-bold pl-20 pt-5">10. Termination</h1>
        <p className="pl-20 pt-2">
          10.1. Either party may terminate the agreement with 30 days’ written
          notice.
        </p>
        <p className="pl-20 pt-2">
          10.2. Best Transfer may immediately suspend or terminate services for:
        </p>
        <p className="pl-40">●  Breach of these terms</p>
        <p className="pl-40">●  Involvement in prohibited activities.</p>
        <p className="pl-40">●  Failure to provide requested documentation.</p>
        <p className="pl-40">●  Regulatory or legal obligations.</p>
        <p className="pl-40">●  Insolvency or non-payment.</p>
        <p className="pl-20 pt-2">10.3. Upon termination:</p>
        <p className="pl-40">●  Client access may be revoked</p>
        <p className="pl-40">●  Outstanding obligations remain payable.</p>
        <p className="pl-40">
          ●  Funds will be returned to verified, legitimate successors where
          applicable
        </p>
        <h1 className="font-bold pl-20 pt-5">11. Dispute Resolution</h1>
        <p className="pl-20 pt-5">
          11.1. Complaints may be submitted to our compliance team at [Insert
          Contact Info]. We will acknowledge within 5 business days and aim to
          resolve within 15 business days
        </p>
        <p className="pl-20 pt-2">
          11.2. If unresolved, disputes may be referred to a Canadian court or
          the appropriate Ombudsman where applicable
        </p>
        <h1 className="font-bold pl-20 pt-5">12. Data Protection</h1>
        <p className="pl-20 pt-2">
          12.1. We process personal data in accordance with the Personal
          Information Protection and Electronic Documents Act (PIPEDA) and other
          applicable Canadian privacy laws.
        </p>
        <p className="pl-20 pt-2">
          12.2. By using our services, Clients consent to necessary data
          processing and sharing for regulatory and operational purposes.
        </p>
        <p className="pl-20 pt-2">
          12.3. Data is stored securely and shared only as required by law or
          service needs.
        </p>
        <h1 className="font-bold pl-20 pt-5">
          13. Representations and Warranties
        </h1>
        <p className="pl-20 pt-2">
          13.1. Both parties warrant that they have legal authority to enter
          into this agreement and will perform obligations with reasonable care
        </p>
        <p className="pl-20 pt-2">13.2. The Client warrants that:</p>
        <p className="pl-40">●  All information provided is true and accurate</p>
        <p className="pl-40">●  Their legal entity is valid and solvent.</p>
        <p className="pl-40">
          ●  No legal proceedings affect their ability to engage in the agreemen
        </p>
        <h1 className="font-bold pl-20 pt-2">
          14. Confidentiality & Intellectual Property
        </h1>
        <p className="pl-20 pt-2">
          14.1. Each party agrees to maintain the confidentiality of shared
          non-public information.
        </p>
        <p className="pl-20 pt-2">
          14.2. Disclosures may be made to regulators, courts, or as otherwise
          required by law.
        </p>
        <p className="pl-20 pt-2">
          14.3. Intellectual property rights remain with Best Transfer. Use of
          the platform or materials does not transfer any IP rights.
        </p>
        <h1 className="font-bold pl-20 pt-5">15. Miscellaneous</h1>
        <p className="pl-20 pt-2">
          15.1. These T&C and related documents represent the entire agreement
        </p>
        <p className="pl-20 pt-2">
          15.2. If any provision is found unenforceable, the remaining terms
          remain in effect.
        </p>
        <p className="pl-20 pt-2 pb-10">
          15.3. Clients may not assign or transfer their rights under this
          agreement without our written consent.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Termsandconditions;

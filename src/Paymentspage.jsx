import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import HeroSection from "./Herosection";
import Sendpage from "./Sendpage";
import Receivepage from "./Receivepage";
import Convertpage from "./Convertpage";

const PaymentsPage = () => {
  const { type } = useParams();

  const sendRef = useRef(null);
  const receiveRef = useRef(null);
  const convertRef = useRef(null);

  useEffect(() => {
    // Scroll immediately to the section after HeroSection
    if (type === "send") {
      sendRef.current?.scrollIntoView({ behavior: "auto" });
    } else if (type === "receive") {
      receiveRef.current?.scrollIntoView({ behavior: "auto" });
    } else if (type === "convert") {
      convertRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [type]);

  return (
    <div className="flex flex-col">
      {/* Hero section always visible */}
      <HeroSection />

      {/* Sections */}
      <div ref={sendRef}>
        <Sendpage />
      </div>

      <div ref={receiveRef}>
        <Receivepage />
      </div>

      <div ref={convertRef}>
        <Convertpage />
      </div>
    </div>
  );
};

export default PaymentsPage;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";

const STEPS = [
  "Bank account linked",
  "Securing your connection",
  "Loading balances and transactions",
  "Opening your dashboard",
];

const Connecting = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 1200);

    const redirectTimer = setTimeout(() => {
      router.replace("/");
    }, 4800);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <LoadingScreen
      title="Setting up your dashboard"
      message="Your bank is connected. This usually takes a few seconds — please don't close this page."
      steps={STEPS}
      activeStep={activeStep}
    />
  );
};

export default Connecting;

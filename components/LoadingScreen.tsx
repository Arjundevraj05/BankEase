"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";

type LoadingScreenProps = {
  title: string;
  message?: string;
  steps?: string[];
  activeStep?: number;
  fullScreen?: boolean;
};

const LoadingScreen = ({
  title,
  message,
  steps = [],
  activeStep = 0,
  fullScreen = true,
}: LoadingScreenProps) => {
  const wrapperClass = fullScreen
    ? "fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-md"
    : "flex w-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-10 shadow-card";

  return (
    <div className={wrapperClass}>
      <div className="flex max-w-md flex-col items-center gap-6 px-6 text-center">
        <Image src="/icons/logo.svg" alt="BankEase" width={40} height={40} />
        <Loader2 className="size-10 animate-spin text-bankGradient" />
        <div className="space-y-2">
          <h2 className="text-20 font-semibold text-gray-900">{title}</h2>
          {message && (
            <p className="text-14 font-normal text-gray-600">{message}</p>
          )}
        </div>
        {steps.length > 0 && (
          <ul className="w-full space-y-3 text-left">
            {steps.map((step, index) => (
              <li
                key={step}
                className={`flex items-center gap-3 text-14 ${
                  index <= activeStep ? "text-gray-900" : "text-gray-400"
                }`}
              >
                <span
                  className={`flex size-6 shrink-0 items-center justify-center rounded-full text-12 font-semibold ${
                    index < activeStep
                      ? "bg-success-600 text-white"
                      : index === activeStep
                        ? "bg-bank-gradient text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index < activeStep ? "✓" : index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;

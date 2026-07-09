"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const GetStarted = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push("/sign-in");
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-full bg-brand-gradient p-[3px] shadow-elevated transition-transform duration-300 hover:scale-105 ${
        isLoading ? "cursor-wait opacity-90" : ""
      }`}
      style={{ width: 140, height: 140 }}
      onClick={!isLoading ? handleClick : undefined}
      role="button"
      aria-busy={isLoading}
    >
      <div className="flex h-[calc(100%-6px)] w-[calc(100%-6px)] flex-col items-center justify-center rounded-full bg-primary">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="size-8 animate-spin text-blue-300" />
            <p className="font-poppins text-[14px] text-blue-200">Loading...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center flex-row">
              <p className="font-poppins font-medium text-[18px] leading-[23.4px] bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                <span className="text-transparent">Get</span>
              </p>
              <Image
                src="/icons/arrow-up.svg"
                alt="arrow-up"
                width={23}
                height={23}
              />
            </div>

            <p className="font-poppins font-medium text-[18px] leading-[23.4px] bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              <span className="text-transparent">Started</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default GetStarted;

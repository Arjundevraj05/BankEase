"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  styles?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ styles, onClick, children = "Get Started" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!onClick || isLoading) return;
    setIsLoading(true);
    onClick();
  };

  return (
    <button
      type="button"
      disabled={isLoading}
      className={`flex items-center justify-center gap-2 rounded-xl bg-brand-gradient py-4 px-6 font-poppins text-[17px] font-semibold text-white shadow-elevated outline-none transition-all duration-300 hover:opacity-95 hover:shadow-lg disabled:cursor-wait disabled:opacity-80 sm:w-48 ${styles}`}
      onClick={handleClick}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

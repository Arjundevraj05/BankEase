"use client";

import { cn } from "@/lib/utils";

const orbs = [
  {
    className: "left-[-24%] top-[-8%] h-[560px] w-[560px] bg-[#ff4ecd]/28",
    duration: "16s",
    delay: "0s",
  },
  {
    className: "left-[8%] top-[18%] h-[360px] w-[360px] bg-[#c026d3]/16",
    duration: "18s",
    delay: "1s",
  },
  {
    className:
      "left-[12%] top-[36%] h-[200px] w-[560px] rotate-[-26deg] rounded-[100%] bg-[#f59e0b]/14",
    duration: "20s",
    delay: "0.4s",
  },
  {
    className: "right-[-20%] bottom-[-12%] h-[640px] w-[640px] bg-[#7c3aed]/30",
    duration: "15s",
    delay: "0.8s",
  },
  {
    className: "right-[4%] top-[40%] h-[400px] w-[400px] bg-[#4f46e5]/16",
    duration: "17s",
    delay: "1.6s",
  },
  {
    className: "right-[18%] bottom-[18%] h-[280px] w-[280px] bg-[#22d3ee]/10",
    duration: "14s",
    delay: "2.2s",
  },
];

const AuthLiveGlow = () => {
  return (
    <div className="auth-panel-layers pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="auth-panel-base" />
      <div className="auth-panel-mesh" />
      <div className="auth-grid-pattern" />
      <div className="auth-panel-vignette" />

      {orbs.map((orb, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-full blur-[120px] animate-glow-drift",
            orb.className
          )}
          style={{
            animationDuration: orb.duration,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AuthLiveGlow;

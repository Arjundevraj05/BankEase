"use client";

import { cn } from "@/lib/utils";

const orbs = [
  {
    className: "left-[-20%] top-[20%] h-[520px] w-[520px] bg-indigo-500/28",
    duration: "14s",
    delay: "0s",
  },
  {
    className: "left-[5%] top-[55%] h-[440px] w-[440px] bg-violet-600/20",
    duration: "16s",
    delay: "1.2s",
  },
  {
    className: "right-[-8%] top-[25%] h-[460px] w-[460px] bg-blue-500/18",
    duration: "13s",
    delay: "0.6s",
  },
  {
    className: "right-[10%] bottom-[8%] h-[380px] w-[380px] bg-cyan-500/12",
    duration: "15s",
    delay: "2s",
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
            "absolute rounded-full blur-[100px] animate-glow-drift",
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

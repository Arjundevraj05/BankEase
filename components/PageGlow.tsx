import { cn } from "@/lib/utils";

type GlowOrb = {
  className: string;
};

/** Soft mesh glows matching the HooBank-style pink / amber / purple atmosphere */
const landingGlows: GlowOrb[] = [
  // Top-left magenta / pink
  { className: "left-[-18%] top-[-8%] h-[720px] w-[720px] bg-[#ff4ecd]/25" },
  { className: "left-[2%] top-[6%] h-[420px] w-[420px] bg-[#c026d3]/18" },
  // Center warm amber streak (diagonal light leak)
  {
    className:
      "left-[28%] top-[18%] h-[280px] w-[720px] rotate-[-28deg] rounded-[100%] bg-[#f59e0b]/16",
  },
  {
    className:
      "left-[36%] top-[28%] h-[180px] w-[480px] rotate-[-28deg] rounded-[100%] bg-[#fbbf24]/10",
  },
  // Bottom-right purple / blue
  { className: "right-[-16%] bottom-[-4%] h-[780px] w-[780px] bg-[#7c3aed]/28" },
  { className: "right-[4%] bottom-[10%] h-[480px] w-[480px] bg-[#4f46e5]/16" },
  { className: "right-[-4%] top-[42%] h-[360px] w-[360px] bg-[#6366f1]/12" },
  // Soft fill so mid-page sections stay atmospheric
  { className: "left-[-10%] top-[48%] h-[520px] w-[520px] bg-[#a855f7]/10" },
  { className: "right-[8%] top-[62%] h-[440px] w-[440px] bg-[#8b5cf6]/12" },
  { className: "left-[12%] top-[78%] h-[400px] w-[400px] bg-[#ec4899]/10" },
  { className: "right-[-8%] top-[88%] h-[460px] w-[460px] bg-[#6366f1]/14" },
];

const authGlows: GlowOrb[] = [
  { className: "left-[-22%] top-[-10%] h-[560px] w-[560px] bg-[#ff4ecd]/22" },
  {
    className:
      "left-[18%] top-[28%] h-[200px] w-[520px] rotate-[-24deg] rounded-[100%] bg-[#f59e0b]/12",
  },
  { className: "right-[-18%] bottom-[-8%] h-[620px] w-[620px] bg-[#7c3aed]/26" },
  { className: "right-[6%] top-[35%] h-[380px] w-[380px] bg-[#4f46e5]/14" },
];

type PageGlowProps = {
  variant?: "landing" | "auth";
  className?: string;
};

const PageGlow = ({ variant = "landing", className }: PageGlowProps) => {
  const glows = variant === "landing" ? landingGlows : authGlows;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      {glows.map((glow, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-full blur-[120px]",
            glow.className
          )}
        />
      ))}
    </div>
  );
};

export default PageGlow;

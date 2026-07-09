import { cn } from "@/lib/utils";

type GlowOrb = {
  className: string;
};

const landingGlows: GlowOrb[] = [
  { className: "right-[-8%] top-[0%] h-[640px] w-[640px] bg-indigo-500/20" },
  { className: "right-[12%] top-[8%] h-[420px] w-[420px] bg-violet-600/14" },
  { className: "left-[-12%] top-[14%] h-[500px] w-[500px] bg-indigo-600/12" },
  { className: "right-[-6%] top-[28%] h-[540px] w-[540px] bg-violet-500/12" },
  { className: "left-[0%] top-[42%] h-[480px] w-[480px] bg-blue-500/10" },
  { className: "right-[5%] top-[55%] h-[520px] w-[520px] bg-indigo-500/14" },
  { className: "left-[-10%] top-[68%] h-[460px] w-[460px] bg-violet-600/12" },
  { className: "right-[15%] top-[82%] h-[440px] w-[440px] bg-blue-500/10" },
  { className: "left-[8%] top-[90%] h-[400px] w-[400px] bg-indigo-600/10" },
];

const authGlows: GlowOrb[] = [
  { className: "right-[-8%] top-[15%] h-[520px] w-[520px] bg-indigo-500/18" },
  { className: "right-[10%] top-[40%] h-[400px] w-[400px] bg-violet-600/12" },
  { className: "left-[-5%] top-[70%] h-[360px] w-[360px] bg-blue-500/10" },
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
            "absolute rounded-full blur-[100px]",
            glow.className
          )}
        />
      ))}
    </div>
  );
};

export default PageGlow;

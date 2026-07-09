import { cn } from "@/lib/utils";
import PageGlow from "./PageGlow";

type HeroBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "hero" | "auth";
};

const HeroBackground = ({
  children,
  className,
  variant = "hero",
}: HeroBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative",
        variant === "auth"
          ? "overflow-hidden bg-[#00040f]"
          : "overflow-x-clip bg-primary",
        className
      )}
    >
      {variant === "hero" ? <PageGlow variant="landing" /> : null}
      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
};

export default HeroBackground;

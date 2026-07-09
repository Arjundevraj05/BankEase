"use client";
import { features } from "../app/uiux/constants/index.js";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeatureCard = ({ icon, title, content }: { icon: string, title: string, content: string, index: number }) => (
  <div className="flex flex-row rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-lg">
      <Image src={icon} alt="feature icon" width={28} height={28} className="object-contain brightness-0 invert" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-white text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-gray-300 text-[16px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  return (
    <section id="features" className="flex flex-col gap-12 md:flex-row md:gap-16">
      <div className="flex flex-1 flex-col justify-center gap-6">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className="font-poppins text-[18px] font-normal leading-[30.8px] text-gray-400">
          With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-2" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;

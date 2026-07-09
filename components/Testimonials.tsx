"use client";

import Image from "next/image";
import { feedback } from "../app/uiux/constants/index.js";
import styles from "../app/uiux/styles.js";

const FeedbackCard = ({
  content,
  name,
  title,
}: {
  content: string;
  name: string;
  title: string;
}) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="feedback-card flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 px-10 py-12 backdrop-blur-sm sm:w-[370px]">
      <Image src="/icons/quotes.svg" alt="quotes" width={42} height={27} />
      <p className="my-10 font-poppins text-[18px] font-normal leading-[32px] text-white">
        {content}
      </p>
      <div className="flex flex-row items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient font-poppins text-lg font-semibold text-white shadow-md">
          {initials}
        </div>
        <div className="ml-4 flex flex-col">
          <h4 className="font-poppins text-[20px] font-semibold text-white">{name}</h4>
          <p className="font-poppins text-[16px] font-normal text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const marqueeItems = [...feedback, ...feedback];

  return (
    <section id="clients" className="relative overflow-hidden">
      <h2 className={`${styles.heading2} mb-12 sm:mb-16`}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>

      <div className="relative -mx-6 sm:-mx-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary to-transparent sm:w-24" />

        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {marqueeItems.map((card, index) => (
              <FeedbackCard key={`${card.id}-${index}`} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

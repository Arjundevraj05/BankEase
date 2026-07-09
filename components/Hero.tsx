import styles from "../app/uiux/styles.js";
import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Image src="/icons/Discount.svg" alt="discount" width={22} height={22} />
          <p className="font-poppins text-sm text-gray-200">
            <span className="font-semibold text-white">20%</span> off your first month
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-between sm:flex-row">
          <h1 className="flex-1 text-center font-poppins text-[48px] font-semibold leading-[1.15] text-white ss:text-[68px] sm:text-left">
            Unlock <br className="hidden sm:block" />
            <span className="text-gradient">the Power</span>
            <br />
            of Modern Finance.
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} mt-6 max-w-[480px] text-gray-300`}>
          With a personalized approach, our experts guide you in selecting the best financial strategies. We assess your expenses, savings potential, and transaction history.
        </p>
      </div>

      <div className={`relative my-10 flex flex-1 overflow-visible ${styles.flexCenter} md:my-0`}>
        <div className="relative z-[5] h-[380px] w-full overflow-visible md:h-[520px]">
          <Image
            src="/icons/robot.png"
            alt="BankEase assistant"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute left-[-8%] top-[-8%] z-[0] h-[55%] w-[55%] rotate-45 bg-gradient-to-r from-indigo-500/30 via-violet-400/20 to-cyan-300/15 blur-[80px]" />
        <div className="absolute bottom-[-20%] right-[-15%] z-[1] h-[90%] w-[90%] rounded-full bg-gradient-to-b from-indigo-500/25 via-violet-500/15 to-transparent blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-8%] z-[2] h-[55%] w-[55%] rounded-full bg-gradient-to-r from-blue-500/35 to-violet-600/25 blur-[70px]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

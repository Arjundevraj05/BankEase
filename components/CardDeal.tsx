"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles, { layout } from "../app/uiux/styles.js";
import Button from "./Button";

const CardDeal = () => {
  const router = useRouter();

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] text-gray-400`}>
          Compare rewards, link your accounts securely with Plaid, and move money
          with Dwolla — all from one modern banking dashboard.
        </p>
        <Button styles="mt-2" onClick={() => router.push("/sign-up")} />
      </div>

      <div className={layout.sectionImg}>
        <div className="relative z-[5] w-full max-w-[420px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-8 shadow-2xl">
          <div className="mb-10 flex items-center justify-between">
            <Image src="/icons/logo.svg" alt="BankEase" width={36} height={36} />
            <Image src="/icons/Paypass.svg" alt="contactless" width={28} height={28} />
          </div>
          <p className="font-poppins text-sm uppercase tracking-widest text-white/70">
            BankEase Card
          </p>
          <p className="mt-4 font-poppins text-2xl font-semibold tracking-[0.2em] text-white">
            ●●●● ●●●● ●●●● 1234
          </p>
          <div className="mt-10 flex items-end justify-between">
            <div>
              <p className="font-poppins text-xs text-white/60">Card holder</p>
              <p className="font-poppins text-lg text-white">Alex Morgan</p>
            </div>
            <Image src="/icons/mastercard.svg" alt="mastercard" width={56} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDeal;

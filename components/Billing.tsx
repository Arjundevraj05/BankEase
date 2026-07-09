"use client";

import Image from "next/image";
import styles, { layout } from "../app/uiux/styles.js";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="relative z-[5] flex w-full max-w-[480px] flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl">
        <div className="flex items-center gap-3">
          <Image src="/icons/credit-card.svg" alt="card" width={40} height={40} />
          <div>
            <p className="font-poppins text-sm text-gray-400">Monthly overview</p>
            <p className="font-poppins text-2xl font-semibold text-white">$2,450.80</p>
          </div>
        </div>
        <div className="mt-2 space-y-3">
          {[
            { icon: "/icons/apple.svg", name: "Apple Store", amount: "-$24.99" },
            { icon: "/icons/google.svg", name: "Google Play", amount: "-$12.50" },
            { icon: "/icons/transaction.svg", name: "Transfer in", amount: "+$320.00" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Image src={item.icon} alt={item.name} width={28} height={28} />
                <span className="font-poppins text-white">{item.name}</span>
              </div>
              <span className="font-poppins text-gray-300">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 h-[50%] w-[50%] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute z-[0] -left-1/2 bottom-0 h-[50%] w-[50%] rounded-full bg-pink-500/20 blur-3xl" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px] text-gray-400`}>
        Track spending, schedule payments, and keep every invoice in one place.
        BankEase gives you a clear view of cash flow so you never miss a due date.
      </p>

      <div className="mt-8 flex flex-row flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3">
          <Image src="/icons/apple.svg" alt="app store" width={24} height={24} />
          <span className="font-poppins text-white">App Store</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3">
          <Image src="/icons/google.svg" alt="google play" width={24} height={24} />
          <span className="font-poppins text-white">Google Play</span>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;

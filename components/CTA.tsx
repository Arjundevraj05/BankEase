"use client";

import { useRouter } from "next/navigation";
import styles from "../app/uiux/styles.js";
import Button from "./Button";

const CTA = () => {
  const router = useRouter();

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col rounded-[20px] bg-gradient-to-r from-gray-900 via-slate-900 to-gray-800 shadow-2xl sm:flex-row`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] text-gray-400`}>
          Everything you need to accept transfers and grow your business anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
        <Button onClick={() => router.push("/sign-up")} />
      </div>
    </section>
  );
};

export default CTA;

"use client";

import { clients } from "../app/uiux/constants/index.js";
import styles from "../app/uiux/styles.js";

const Clients = () => (
  <section className="py-4">
  <div className={`flex flex-row flex-wrap ${styles.flexCenter} gap-8`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} m-5 min-w-[120px] sm:min-w-[192px]`}
        >
          <span className="font-poppins text-xl font-semibold tracking-wide text-white/70 transition-colors hover:text-white sm:text-2xl">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;

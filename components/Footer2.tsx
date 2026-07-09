"use client";

import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialMedia } from "../app/uiux/constants/index.js";
import styles from "../app/uiux/styles.js";

const Footer2 = () => (
  <section className="flex flex-col pt-8">
    <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
      <div className="mr-10 flex flex-1 flex-col justify-start">
        <div className="flex items-center gap-3">
          <Image src="/icons/logo.svg" alt="BankEase" width={40} height={40} />
          <span className="font-poppins text-2xl font-semibold text-white">BankEase</span>
        </div>
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-gray-400`}>
          A new way to make payments easy, reliable, and secure.
        </p>
      </div>

      <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="ss:my-0 my-4 flex min-w-[150px] flex-col">
            <h4 className="font-poppins text-[18px] font-medium text-white">
              {footerLink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins text-[16px] font-normal text-gray-400 hover:text-white ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
      <p className="font-poppins text-center text-[18px] font-normal text-white">
        {new Date().getFullYear()} BankEase. All Rights Reserved.
      </p>
      <div className="mt-6 flex flex-row md:mt-0">
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
          >
            <Image src={social.icon} alt={social.id} width={21} height={21} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer2;

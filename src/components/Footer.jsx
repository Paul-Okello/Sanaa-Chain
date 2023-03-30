"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "@/app/styles/styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="visible"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8 text-center`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[20px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {/* <h4 className="text-[24px] font-extrabold text-white text-center">
            SanaaChain
          </h4> */}
          <p className="text-[14px] font-normal text-white opacity-50 text-center">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>

          <div className="flex gap-4 items-center w-full justify-center">
            {socials.map((social) => (
              <Image
                key={social.name}
                height={24}
                width={24}
                src={social.url}
                alt={social.name}
                className="cursor-pointer object-contain"
              />
              // <img
              //   key={social.name}
              //   src={social.url}
              //   alt={social.name}
              //   className="h-[24px] w-[24px] cursor-pointer object-contain"
              // />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

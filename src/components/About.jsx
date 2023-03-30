"use client";

import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";

import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "@/app/styles/styles";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="SanaaChain" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]"
        >
          Introducing{" "}
          <span className="font-extrabold text-white">SanaaChain</span> , the
          ultimate tool to{" "}
          <span className="font-extrabold text-white">
            generate stunning, high-quality images
          </span>{" "}
          in a matter of seconds. With SanaaChain, you can unleash your
          creativity and bring your ideas to life like never before. Powered by
          advanced machine learning models from OpenAI, SanaaChain offers a
          seamless image generation experience that is unmatched in the market.
          Whether you are a designer, artist, marketer, or business owner,
          SanaaChain is the perfect solution for all your image needs. Say
          goodbye to stock photos and hello to limitless possibilities with
          SanaaChain!
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="mt-[28px] h-[28px] w-[18px] object-contain"
        />
      </motion.div>
    </section>
  );
};

export default About;

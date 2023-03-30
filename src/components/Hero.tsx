"use client";

import { motion } from "framer-motion";

import styles from "@/app/styles/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          SanaaChain
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='relative -mt-[12px] w-full md:-mt-[20px]'>
        <img
          src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/06/best-ai-text-to-image-art-generators-featured.jpg'
          alt='hero_cover'
          className='relative z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px]'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

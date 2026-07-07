import React from "react";
import { motion } from "framer-motion";
import { discount, robot } from "../assets";
import styles from "../styles";
import GetStarted from "./GetStarted";
import Reveal from "./Reveal";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const btnVar = {
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 120,
    },
  },
};

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  return (
    <motion.span
      variants={container}
      initial="initial"
      animate="animate"
      className="inline-block"
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap mr-3">
          {[...word].map((char, cIndex) => (
            <motion.span
              key={cIndex}
              variants={letter}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* LEFT SIDE */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
          src={discount}
          alt="discount"
          className="w-[32px] h-[32px]"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
          className={`${styles.paragraph} ml-2`}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
            className="text-white"
          >
            20%
          </motion.span>{" "}
          Discount For{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
            className="text-white"
          >
            1 Month
          </motion.span>{" "}
          Account
        </motion.p>
      </motion.div>

      {/* TITLE */}
      <div className="flex flex-row justify-between items-center w-full">
        <motion.h1 className="flex-1 font-poppins break-keep font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <AnimatedText text="The Next " />
          <br className="sm:block hidden" />
          <AnimatedText
            className="text-gradient whitespace-nowrap"
            text="Generation"
          />
          <motion.span className="text-gradient"></motion.span>
        </motion.h1>

        <motion.div
          variants={btnVar}
          whileHover="hover"
          className="ss:flex hidden md:mr-4 mr-0"
        >
          <GetStarted />
        </motion.div>
      </div>

      {/* SECOND TITLE */}
      <h1 className="text-gradient font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        <AnimatedText text="Payment Method" />
      </h1>

      <motion.p
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </motion.p>
    </div>

    {/* RIGHT SIDE */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <motion.img
        src={robot}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5]"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    {/* MOBILE BUTTON */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;

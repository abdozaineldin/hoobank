import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexCenter} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
            className="text-gradient"
          >
            Get
          </motion.span>
        </p>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
          src={arrowUp}
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
          className="text-gradient"
        >
          Started
        </motion.span>
      </p>
    </div>
  </motion.div>
);

export default GetStarted;

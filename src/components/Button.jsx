import React from "react";
import { motion } from "framer-motion";

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

const Button = ({ styles }) => (
  <motion.button
    variants={btnVar}
    whileHover="hover"
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </motion.button>
);

export default Button;

import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { animate, color, delay, motion } from "framer-motion";

const navVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      // delay: 0.5,
    },
  },
};

const btnVar = {
  hover: {
    color: "#5ce1e6",
    scale: 1.2,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 120,
    },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="w-full flex py-6 justify-between items-center navbar"
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            variants={btnVar}
            whileHover="hover"
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
          >
            <motion.a href={`#${nav.id}`}>{nav.title}</motion.a>
          </motion.li>
        ))}
      </ul>

      {/* In Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.img
          variants={btnVar}
          whileHover="hover"
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <motion.li
                variants={btnVar}
                whileHover="hover"
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} `}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {/* In Mobile */}
    </motion.nav>
  );
};

export default Navbar;

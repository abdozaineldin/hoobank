import { quotes } from "../assets";
import { motion } from "framer-motion";

const btnVar = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 120,
    },
  },
};

const FeedBackCard = ({ content, name, title, img }) => (
  <motion.div
    variants={btnVar}
    whileHover="hover"
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] w-fit md:max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeedBackCard;

import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const picVariants = {
  animate: {
    x: [0, 15, -15, 15, -15, 0],
    y: [0, -15, 15, -15, 15, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <Reveal>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
      </Reveal>
      <Reveal>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
      </Reveal>

      <Reveal>
        <Button styles={`mt-10`} />
      </Reveal>
    </div>

    <div className={layout.sectionImg}>
      <motion.img
        variants={picVariants}
        animate="animate"
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;

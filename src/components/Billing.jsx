import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";
import Reveal from "./Reveal";
import { animate, motion } from "framer-motion";

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

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <motion.img
        variants={picVariants}
        animate="animate"
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <Reveal>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
      </Reveal>
      <Reveal>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </Reveal>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Reveal>
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
        </Reveal>
        <Reveal>
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </Reveal>
      </div>
    </div>
  </section>
);

export default Billing;

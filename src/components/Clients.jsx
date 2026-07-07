import { clients } from "../constants";
import styles from "../styles";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className={`overflow-hidden my-4`}>
      <motion.div
        className={`${styles.flexCenter} gap-20`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {logos.map((client, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;

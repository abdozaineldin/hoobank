import { motion } from "framer-motion";

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    // viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default Reveal;

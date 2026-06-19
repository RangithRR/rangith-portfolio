import { motion } from "framer-motion";

export default function App() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Rangith Portfolio
      </motion.h1>
    </div>
  );
}
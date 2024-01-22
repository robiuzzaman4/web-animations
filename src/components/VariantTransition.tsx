import { motion } from "framer-motion";

const VariantTransition = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <section className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 0.5, staggerChildren: 0.3 }}
        className="size-36 bg-yellow-600 rounded-lg grid grid-cols-2 gap-2 p-2"
      >
        <motion.div
          variants={child}
          className="h-full w-full bg-yellow-800 rounded-md"
        ></motion.div>
        <motion.div
          variants={child}
          className="h-full w-full bg-yellow-800 rounded-md"
        ></motion.div>
        <motion.div
          variants={child}
          className="h-full w-full bg-yellow-800 rounded-md"
        ></motion.div>
        <motion.div
          variants={child}
          className="h-full w-full bg-yellow-800 rounded-md"
        ></motion.div>
      </motion.div>
      <h3 className="text-xl font-medium text-yellow-500 text-center">
        Variants and Transition (Refresh page to see animations)
      </h3>
    </section>
  );
};

export default VariantTransition;

import { motion } from "framer-motion";

const Gestures = () => {
  const variants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
    },
  };
  return (
    <section className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <motion.div
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        className="size-36 bg-yellow-600 rounded-lg"
      ></motion.div>

      <h3 className="text-xl font-medium text-yellow-500 text-center">
        Gestures (Hover, Tap to see animations)
      </h3>
    </section>
  );
};

export default Gestures;

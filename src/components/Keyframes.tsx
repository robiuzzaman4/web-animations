import { motion } from "framer-motion";

const Keyframes = () => {
  const variants = {
    hidden: { opacity: 0.7, scale: 0.7, x: 0, y: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      x: [0, 200, -200, 0],
      y: [0, 200, -200, 0],
      transition: { duration: 1.5 },
    },
  };
  return (
    <section className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <div
        className="border border-fuchsia-500 rounded-lg size-72 grid place-items-center"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="size-36 bg-fuchsia-600 rounded-lg"
        >
          {/* <span className="text-sm font-medium text-center">Drag Me</span> */}
        </motion.div>
      </div>

      <h3 className="text-xl font-medium text-fuchsia-500 text-center ">
        Keyframe (Keyframe based animations)
      </h3>
    </section>
  );
};

export default Keyframes;

import { motion } from "framer-motion";
import { useRef } from "react";

const Drag = () => {
  const variants = {
    hidden: { opacity: 0.7 },
    hover: {
      transition: { duration: 0.3 },
      opacity: 1,
    },
  };
  const dragRef = useRef(null);
  return (
    <section className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <div 
      ref={dragRef}
      className="border border-fuchsia-500 rounded-lg size-72 grid place-items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          whileHover="hover"
          drag
          dragConstraints={dragRef}
        //   dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        //   dragSnapToOrigin={true}
          className="size-36 bg-fuchsia-600 rounded-lg hover:cursor-grabbing grid place-items-center"
        >
          <span className="text-sm font-medium text-center">Drag Me</span>
        </motion.div>
      </div>

      <h3 className="text-xl font-medium text-fuchsia-500 text-center ">
        Drag (Drag to see animations)
      </h3>
    </section>
  );
};

export default Drag;

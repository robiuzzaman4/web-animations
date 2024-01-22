import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const AnimationControls = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
    if (toggle) {
      controls.start({ x: 150 });
    } else {
      controls.start({ x: -150 });
    }
  };
  return (
    <section className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <motion.button
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
          },
        }}
        onClick={handleToggle}
        className="bg-fuchsia-500 text-neutral-50 font-medium text-sm px-4 py-1.5 rounded-lg flex items-center justify-center"
      >
        Toggle Div
      </motion.button>
      <div className="border border-fuchsia-500 rounded-lg size-72 grid place-items-center">
        <motion.div
          animate={controls}
          className="size-36 bg-fuchsia-600 rounded-lg"
        >
          {/* <span className="text-sm font-medium text-center">Drag Me</span> */}
        </motion.div>
      </div>

      <h3 className="text-xl font-medium text-fuchsia-500 text-center ">
        useAnimationControls() Hook
      </h3>
    </section>
  );
};

export default AnimationControls;

import { motion, useCycle } from "framer-motion";

const CycleHook = () => {
  const [x, cycleX] = useCycle(0, 100, -100);
  return (
    <section className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <motion.button
        onTap={() => cycleX()}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
          },
        }}
        className="bg-fuchsia-500 text-neutral-50 font-medium text-sm px-4 py-1.5 rounded-lg flex items-center justify-center"
      >
        Toggle Div
      </motion.button>
      <div className="border border-fuchsia-500 rounded-lg size-72 grid place-items-center">
        <motion.div
          animate={{ x: x }}
          className="size-36 bg-fuchsia-600 rounded-lg"
        ></motion.div>
      </div>

      <h3 className="text-xl font-medium text-fuchsia-500 text-center ">
        useCycle() Hook
      </h3>
    </section>
  );
};

export default CycleHook;

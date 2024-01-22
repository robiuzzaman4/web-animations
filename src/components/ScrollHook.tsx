import { motion, useScroll, useSpring } from "framer-motion";

const ScrollHook = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <section className="min-h-[300vh] w-full bg-neutral-900 text-neutral-50">
      <motion.div
        className="fixed top-0 origin-left h-1 w-full bg-fuchsia-500"
        style={{ scaleX }}
      ></motion.div>
    </section>
  );
};

export default ScrollHook;

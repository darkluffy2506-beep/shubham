import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shubham</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  SOC Analyst & Cybersecurity Specialist with a developer mindset,
  <br className="sm:block hidden" />
  creating secure web applications and interactive 3D experiences.
</p>
        </div>
      </div>

      {/* Laptop / 3D Computer */}
      <div className="absolute inset-0 top-[180px] sm:top-[150px] md:top-[100px] w-full h-[400px] sm:h-[450px] md:h-[500px]">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 44, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
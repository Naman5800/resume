import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Information from "../components/Information";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import LeftSlider from "../components/LeftSlider";
import DecryptedText from "../../DecryptedText/DecryptedText";
import About from "../components/About";

const Home = ({ scrollTarget }) => {
  const projectsRef = useRef(null);

  useEffect(() => {
    if (scrollTarget === "Projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTarget]);

  // Define the animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <div className="pt-48 px-4 sm:px-8 md:px-20 lg:px-40">
      <div id="Home">
        {/* DecryptedText with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-sm:pt-2"
        >
          <DecryptedText
            className="text-green-400 font-mono"
            encryptedClassName="text-green-400"
            parentClassName="text-sm lg:text-xl leading-relaxed"
            animateOn="view"
            sequential={true}
            speed={30}
          >
            Hi, my name is
          </DecryptedText>
        </motion.div>

        {/* Information with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Information />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
        >
          <About />
        </motion.div>

        {/* Skills with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
        >
          <Skills />
        </motion.div>

        {/* Projects with animation */}
        <motion.div
          ref={projectsRef}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
          id="Projects"
        >
          <Projects />
        </motion.div>

        {/* Contact with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
          id="Contact"
        >
          <Contact />
        </motion.div>
          <LeftSlider />
      </div>
    </div>
  );
};

export default Home;
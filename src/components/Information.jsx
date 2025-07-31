import About from "./About";
import { motion, scale, AnimatePresence } from "motion/react";

const name = "Naman Shah".split("");
const words= ["Better", "Awesome", "Aesthetic", "Modern"]
const handleScroll = (sectionId) => {
  if (location.pathname !== "/") {
    // Navigate to homepage and scroll to section
    window.location.href = `/#${sectionId}`;
  } else {
    // Scroll to section if already on homepage
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  }
  setMenuOpen(false); // Close mobile drawer
};

const Information = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        bounce: 1.4,
        duration: 0.5,
      },
    }),
  } 
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-b from-cyan-100 to-cyan-900 text-transparent bg-clip-text py-3">
        <AnimatePresence>
        {name.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className={letter === " " ? "w-4" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence > <br  /> Building the web Better.
        </h1>
        <p className="text-sm text-gray-400 lg:text-xl mt-4">
          Innovating the web with purpose and precision. As a full-stack
          engineer,
          <br /> I create accessible, user-friendly digital experiences that
          leave a lasting <br /> impact.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="max-sm:mt-10 w-30 text-green-400 mt-5 border-2 border-green-400 rounded-sm text-center py-2 h-13 md:w-36 hover:bg-green-950"
          onClick={() => handleScroll("Contact")}
          >
          Get In Touch
        </motion.button>
      </div>
    </div>
  );
};

export default Information;

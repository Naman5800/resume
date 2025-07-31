import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import CircularText from "../../CircularText/CircularText";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md  text-white px-6 py-4 md:px-12 z-50">
      <div className="md:px-20 flex justify-between md:justify-between items-center text-sm md:text-md lg:text-lg max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-cyan-300 hover:text-green-400 font-semibold"
          onClick={()=> handleScroll("Home")}
        >
          <CircularText text=" Naman Shah" className="text-white uppercase" />
        </motion.div>
        {/* Right Side: Desktop Menu */}
        <div className="max-md:hidden md:visible md:flex gap-10 text-cyan-200 ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("Home")}
            className="hover:text-green-400 transition"
          >
            Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("Projects")}
            className="hover:text-green-400 transition"
          >
            Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("Contact")}
            className="hover:text-green-400 transition"
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cyan-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col bg-black/90 px-6 py-4 gap-4 text-cyan-200">
          <button
            onClick={() => handleScroll("Home")}
            className="text-left hover:text-green-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("Projects")}
            className="text-left hover:text-green-400 transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("Contact")}
            className="text-left hover:text-green-400 transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

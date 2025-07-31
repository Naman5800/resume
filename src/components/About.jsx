  import React from "react";
  import { motion } from "motion/react";

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

  const About = () => {
    return (
      <motion.div  className="mt-30  md:mt-50 md:ml-15">
        <h2 className="text-green-400 text-2xl mb-10">About Me</h2>
        <p className="text-gray-400 text-sm md:text-xl">
          Hi there!, I'm Naman Shah, a full-stack Developer specializing in
          .NET,<br /> Angular and SQL Server. My passion lies in developing efficient
          web <br /> applications, managing SQL databases, and ensuring seamless <br />
          deployment. I am committed to creating dynamic, scalable, and
          user-<br />centric web applications using modern technologies. <br /> <br />
          Looking forward to sharpening my skills in a challenging environment. I <br />
          guarantee enthusiasm in work and fulfilling my projects with <br />
          inexpressible effort.
        </p>
      </motion.div>
    );
  };

  export default About;

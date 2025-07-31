import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import JavaScript from "../assets/images/JavaScript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";
import bootstrap from "../assets/images/bootstrap.png";
import framerMotion from "../assets/images/framerMotion.png";
import asp from "../assets/images/asp.png";
import mongodb from "../assets/images/mongodb.svg";
import express from "../assets/images/express.png";
import php from "../assets/images/php.png";
import clerk from "../assets/images/clerk.png";
import node from "../assets/images/node.png";
import mysql from "../assets/images/mysql.svg"
import postgresql from "../assets/images/postgresql.png"
import firebase from "../assets/images/firebase.png"

const frontEndSkills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: JavaScript },
  { name: "React", image: react },
  { name: "Tailwind", image: tailwind },
  { name: "TypeScript", image: typescript },
  { name: "Bootstrap", image: bootstrap },
  { name: "framerMotion", image: framerMotion },
];

const backEndSkills = [
  { name: "Asp.Net", image: asp },
  { name: "Express", image: express },
  { name: "Node", image: node },
  { name: "Php", image: php },
  { name: "Clerk", image: clerk },
];

const databaseSkills = [
  { name: "mongodb", image: mongodb },
  { name: "MySql", image: mysql },
  { name: "Postgresql", image: postgresql },
  { name: "firebase", image: firebase },
];

const Skills = () => {
  return (
    <div className="p-8 text-cyan-400">
      <h2 className="text-2xl md:text-3xl mt-16 mb-5 font-bold">Skills</h2>

      <div className= "mb-10">
        <h3 className="max-sm:text-center text-lg md:text-xl mb-8 font-semibold text-white">Front-end</h3>
        <div className="grid max-md:grid-cols-2 md:grid-cols-4 gap-8">
          {frontEndSkills.map((skill, index) => ( 
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2 hover:scale-115 transition-all duration-200 ease-in hover:animate-pulse"
              />
              <p className="text-green-400 text-md">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="max-sm:text-center text-lg md:text-xl mb-4 font-semibold text-white">Back-end</h3>
        <div className="grid max-md:grid-cols-2 md:grid-cols-4 gap-8">
          {backEndSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2 hover:scale-115 transition-all duration-200 ease-in hover:animate-pulse"
              />
              <p className="text-green-400 text-md">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="max-sm:text-center text-lg md:text-xl mb-4 font-semibold text-white">Database</h3>
        <div className="grid max-md:grid-cols-2 md:grid-cols-4 gap-8">
          {databaseSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2 hover:scale-115 transition-all duration-200 ease-in hover:animate-pulse"
              />
              <p className="text-green-400 text-md">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
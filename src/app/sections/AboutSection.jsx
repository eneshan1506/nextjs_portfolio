"use client";

import { about, skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const iconMap = {
  FaReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  FaNodeJs,
  SiMongodb,
  FaGitAlt,
  FaFigma,
};

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center">
          Über Mich
        </motion.h2>

        {/* Bio  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 mb-12 bg-white border border-gray-200 shadow-lg rounded-2xl">
          {about.bio.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-lg leading-relaxed text-gray-700 last:mb-0">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-2xl font-bold">
          Meine Fähigkeiten
        </motion.h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            const percentage = parseInt(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md group">
                {Icon && (
                  <Icon className="w-12 h-12 mx-auto mb-3 transition-transform text-blue-500 group-hover:scale-110" />
                )}
                <div className="mb-3 font-semibold">{skill.name}</div>

                {/* Progress Bar */}
                <div className="w-full h-2 mb-2 overflow-hidden bg-gray-200 rounded-full">
                  <div
                    className="h-full transition-all duration-1000 ease-out rounded-full bg-linear-to-r from-blue-400 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-600"
                    style={{
                      width: `${percentage}%`,
                      animation: "progressAnimation 1.5s ease-out",
                    }}
                  />
                </div>
                <div className="text-xs text-gray-600">{skill.level}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

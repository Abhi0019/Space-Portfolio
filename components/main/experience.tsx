"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "Feb 2025 - May 2025",
    title: "Software Engineer Intern — Abhyuday Bharat Projects Pvt. Ltd.",
    description:
      "Developed a Disaster Relief Management System website for Army and Disaster Relief Columns. Collaborated closely with government teams and defense personnel, gaining valuable exposure to real-world disaster response workflows and secure system design.",
  },
  {
    year: "June 2025 - Present",
    title: "Junior Software Engineer — Abhyuday Bharat Projects Pvt. Ltd.",
    description:
      "Created multiple full-stack applications including advanced eCommerce websites and a next-generation Disaster Relief Management System. Focused on building scalable, interactive web solutions using the MERN Stack, Redux, and TypeScript.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center w-full py-20 "
    >
      {/* Glowing vertical gradient behind */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
      >
        My Experience
      </motion.h2>

      {/* Motivating line in cursive */}
      <p className="cursive text-[25px] font-medium text-center text-gray-300 mb-4">
        “Every step forward is built on the experiences that shaped you.”
      </p>

      <div className="relative w-full max-w-5xl">
        {/* Vertical glowing line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500 h-full rounded-full blur-[1px] shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

        {/* Timeline items */}
        <div className="flex flex-col space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Glassy experience card */}
              <div
                className={`w-[45%] bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-gray-700/70 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-500 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <p className="text-sm text-purple-400 font-medium tracking-wide">
                  {exp.year}
                </p>
                <h3 className="text-2xl font-semibold text-white mt-2 mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {exp.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>

              {/* Glowing dot connector */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(168,85,247,0.8)",
                    "0 0 20px rgba(168,85,247,0.6)",
                    "0 0 10px rgba(168,85,247,0.8)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full border-[3px] border-gray-900"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaAws,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiFirebase,
  SiFlask,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiStreamlit,
  SiMysql,
  SiJupyter,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaJs />, name: "JavaScript" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiStreamlit />, name: "Streamlit" },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiMysql />, name: "SQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiFirebase />, name: "Firebase" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { icon: <SiGooglecloud />, name: "GCP" },
        { icon: <FaAws />, name: "AWS" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiLangchain />, name: "LangChain" },
      ],
    },
    {
      category: "Tools",
      items: [{ icon: <SiJupyter />, name: "Jupyter" }],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Anup Kumar Nayak</h1>
        <p className="text-lg mb-4">Aspiring Software Engineer | Tech Enthusiast</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-3xl">
                {skill.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center gap-1 hover:text-blue-400 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-12">
        &copy; 2025 Anup Kumar Nayak. All rights reserved.
      </footer>
    </div>
  );
}

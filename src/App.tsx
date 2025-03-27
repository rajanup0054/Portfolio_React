import React from "react";
import { Mail, Phone } from "lucide-react";
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

function Home() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { icon: <FaPython className="text-green-500" />, name: "Python" },
        { icon: <SiCplusplus className="text-blue-500" />, name: "C++" },
        { icon: <FaJava className="text-red-500" />, name: "Java" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <FaCss3 className="text-blue-500" />, name: "CSS" },
        { icon: <SiStreamlit className="text-red-500" />, name: "Streamlit" },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { icon: <SiFlask className="text-slate-300" />, name: "Flask" },
        { icon: <SiMysql className="text-blue-500" />, name: "SQL" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
        { icon: <SiPytorch className="text-red-500" />, name: "PyTorch" },
        { icon: <SiLangchain className="text-blue-500" />, name: "LangChain" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { icon: <SiGooglecloud className="text-blue-500" />, name: "GCP" },
        { icon: <FaAws className="text-orange-500" />, name: "AWS" },
      ],
    },
    {
      category: "Tools",
      items: [
        { icon: <SiJupyter className="text-orange-500" />, name: "Jupyter Notebook" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg animate-glow">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEN0G3WN9EJkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714897741734?e=1748476800&v=beta&t=KNEKrJDjkby8sMtZfI2GbHPLdz75-5551DpKri_S0Jk" 
              alt="Anup Kumar Nayak"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Anup Kumar Nayak</h1>
        </div>
        <div className="flex justify-center items-center space-x-6 text-slate-300 mb-8">
          <a href="tel:+917479557641" className="flex items-center hover:text-blue-500 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +91-7479557641
          </a>
          <a href="mailto:rajanup0054@gmail.com" className="flex items-center hover:text-blue-500 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            rajanup0054@gmail.com
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/anup-kumar-nayak-939607208/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition shadow-md"
          >
            <FaLinkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/rajanup0054"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center hover:bg-slate-600 transition shadow-md"
          >
            <FaGithub className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Professional Summary */}
        <section className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
          <p className="text-slate-200 leading-relaxed">
            Computer Science Engineering student with expertise in Java, Python, and C++, specializing in full-stack development, 
            machine learning, and automation. Passionate about designing scalable applications, optimizing performance, and solving 
            technical challenges. Adept at collaborating on software projects, writing clean code, and quickly adapting to new technologies.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors border border-slate-600 hover:border-slate-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-semibold text-white mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skill.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <span className="text-sm text-slate-300 text-center">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-4">Work Experience</h2>
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-semibold text-slate-100">Summer Intern | Indian Institute of Management (IIM) Kashipur</h3>
              <span className="text-slate-400 text-sm md:text-base">May 2024 – August 2024</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Developed a web scraping tool using Python to extract data from 700+ hotel websites, reducing manual effort by 40%</li>
              <li>Optimized datasets and reduced redundant features by 30%, enhancing data processing efficiency</li>
              <li>Consolidated and structured large datasets, improving accessibility for 3+ data analysts</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
          
          <div className="space-y-8">
            <div className="p-5 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-100">Generative BI</h3>
                <a href="https://github.com/rajanup0054/GenerativeBI" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center text-blue-500 hover:text-blue-400 transition-colors mt-2 md:mt-0">
                  <FaGithub className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Developed an interactive AI-powered business intelligence tool using Python, Streamlit, LangChain, and FAISS</li>
                <li>Improved data retrieval and query execution time by 50%, enhancing decision-making efficiency by 40%</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-100">Personalized Learning Web App</h3>
                <div className="flex space-x-4 mt-2 md:mt-0">
                  <a href="https://github.com/rajanup0054/yohan" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                    <FaGithub className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                  <a href="https://yohan-2.onrender.com/" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                    <span className="w-4 h-4 mr-1">🔗</span>
                    Live Demo
                  </a>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Built a Flask-based platform that generates personalized learning plans, improving student performance tracking by 35%</li>
                <li>Enhanced student engagement by 20% using data-driven recommendations and automated notifications</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Achievements */}
        <section className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-slate-300">
              <span className="text-yellow-500 mr-2">🏆</span>
              <span className="font-semibold">Winner:</span>
              <span className="ml-2">Idea to Prototype Hackathon</span>
            </li>
            <li className="flex items-center text-slate-300">
              <span className="text-gray-400 mr-2">🥈</span>
              <span className="font-semibold">Runner-Up:</span>
              <span className="ml-2">Technopreneur, Smart Ideathon, Global Innovation Drive</span>
            </li>
            <li className="flex items-center text-slate-300">
              <span className="text-orange-600 mr-2">🥉</span>
              <span className="font-semibold">2nd Runner-Up:</span>
              <span className="ml-2">Senior Ideate</span>
            </li>
            <li className="flex items-center text-slate-300">
              <span className="text-gray-400 mr-2">🥈</span>
              <span className="font-semibold">Runner-Up:</span>
              <span className="ml-2">Code Wave (Coding Competition)</span>
            </li>
          </ul>
        </section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <section className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700 hover:border-slate-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div>
              <h3 className="text-xl font-semibold text-slate-100">C.V. Raman Global University, Bhubaneswar</h3>
              <p className="text-slate-300">B.Tech in Computer Science Engineering (2022 – 2026)</p>
            </div>
          </section>

          <section className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700 hover:border-slate-600 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4">Certifications</h2>
            <ul className="list-disc list-inside text-slate-300">
              <li>Google IT Automation with Python (Coursera)</li>
            </ul>
          </section>
        </div>

        {/* Leadership & Extracurriculars */}
        <section className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8 border border-slate-700 hover:border-slate-600 transition-colors">
          <h2 className="text-2xl font-bold text-white mb-4">Leadership & Extracurriculars</h2>
          <ul className="space-y-3 text-slate-300">
            <li>Core Student Member, Institution Innovation Council (2022 – Present)</li>
            <li>Coordinator, Content Team, Institution Innovation Council (Jan 2024 – Sep 2024)</li>
          </ul>
        </section>
      </main>

      <footer className="bg-slate-900 py-6 mt-8 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 Anup Kumar Nayak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
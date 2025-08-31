import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const SectionHeading = ({ title }) => (
  <h2 className="text-3xl font-semibold md:hidden sticky top-0 text-white bg-gradient-to-r from-[#0a192f] via-[#0f2340] to-[#112240] py-3">{title}</h2>
);

const Card = ({ title, period, description, tags, image, alt, link, linkText }) => (
  <div className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
    {image && <img src={image} alt={alt} className="w-full aspect-video object-cover rounded-xl mb-4" />}
    <h3 className="text-xl font-bold text-[#64ffda]">{title}</h3>
    {period && <p className="text-gray-400 text-sm">{period}</p>}
    <p className="text-gray-300 mt-2">{description}</p>
    {tags && (
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-[#0a192f] text-[#64ffda] rounded-full text-sm">{tag}</span>
        ))}
      </div>
    )}
    {link && <a href={link} target="_blank" rel="noreferrer" className="text-[#64ffda] mt-3 inline-block">{linkText} →</a>}
  </div>
);

export default function App() {
  const sections = ["about", "experience", "domains", "articles", "projects"];

  const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

  const experienceData = [
    {
      title: "Accenture | AEM Developer",
      period: "Jan 2025 – Present",
      description: "Working on Bank of America project to reduce deployment efforts using AEM, creating dialogs with HTL, XML, and improving content authoring efficiency.",
      tags: ["AEM", "HTL", "JS"]
    },
    {
      title: "TCS | AEM Developer",
      period: "Mar 2023 – Dec 2024",
      description: "Worked on telecom client project, enhancing authoring efficiency, building scalable AEM components, and optimizing deployment workflows.",
      tags: ["AEM", "Dialog XML", "Frontend"]
    },
    {
      title: "Infosys Ltd. | Front-End Developer",
      period: "Mar 2021 – Feb 2023",
      description: "Built live, data-rich UI for a Sports platform, improving rendering speed by 40% and reducing API load by 35%. Developed interactive components for Media clients.",
      tags: ["ReactJS", "JavaScript", "CSS"]
    }
  ];

  const domainsData = [
    { title: "Banking", description: "Experience in developing secure, scalable AEM solutions for financial clients with focus on deployment automation and authoring efficiency." },
    { title: "Telecom", description: "Worked on telecom projects building modular AEM components, improving customer portals, and enabling smooth digital experiences." },
    { title: "Aerospace", description: "Contributed to aerospace domain projects by implementing performance-optimized front-end features and reusable UI components for critical dashboards." },
    { title: "Media", description: "Developed rich media solutions ensuring responsive and high-performing interfaces for news and entertainment clients." },
    { title: "Sports", description: "Built highly interactive and real-time data-driven sports platforms improving live updates and engagement features." }
  ];

  const articlesData = [
    {
      image: "/assets/react-virtualized.jpg",
      alt: "React Virtualized Guide",
      title: "React-Virtualized Guide for Beginners",
      description: "An easy guide to improve app performance by rendering only visible items with react-virtualized.",
      link: "https://medium.com/@saiteja991999/react-virtualized-guide-for-beginners-boost-your-app-performance-3c1f83398e67",
      linkText: "Read More"
    },
    {
      image: "/assets/useeffect-vs-uselayouteffect.jpg",
      alt: "useEffect vs useLayoutEffect",
      title: "useEffect vs useLayoutEffect",
      description: "Detailed comparison of useEffect and useLayoutEffect hooks with real-world examples.",
      link: "https://medium.com/@saiteja991999/useeffect-vs-uselayouteffect-in-react-with-simple-examples-and-real-life-scenarios-325693bd4ee9",
      linkText: "Read More"
    }
  ];

  const projectsData = [
    {
      image: "/assets/photography-app.jpg",
      alt: "Photography App",
      title: "Photography App",
      description: "A portfolio-style photography application built using React and modern CSS.",
      link: "https://joseph-photography.netlify.app/",
      linkText: "Visit Site"
    },
    {
      image: "/assets/wordle-game.jpg",
      alt: "Wordle Game",
      title: "Wordle Game",
      description: "A fun Wordle clone built with React, complete with animations and game state management.",
      link: "https://wordle-dummy.netlify.app/",
      linkText: "Play Game"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0f2340] to-[#112240] text-[#e6f1ff] font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <motion.nav initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="hidden md:flex md:w-2/5 h-screen flex-col items-center justify-between p-10 fixed left-0 bg-transparent">
        <div className="flex flex-col items-center md:items-start space-y-10">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-extrabold">Sai Teja</motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-[#64ffda]">Front-End & AEM Developer</motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col space-y-8 mt-16">
            {sections.map((sec) => (
              <motion.div key={sec} variants={fadeInUp}>
                <Link to={sec} spy smooth duration={700} offset={-100} activeClass="text-[#64ffda] font-bold" className="cursor-pointer text-base md:text-lg tracking-widest uppercase transition-colors duration-300 hover:text-[#64ffda]">{sec}</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex space-x-8 text-2xl mt-12 md:mt-0">
          <a href="mailto:saiteja991999@gmail.com" className="hover:text-[#64ffda]"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/sai-teja-604827154" target="_blank" rel="noreferrer" className="hover:text-[#64ffda]"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-[#64ffda]"><FaGithub /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#64ffda]"><FaInstagram /></a>
        </motion.div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="md:hidden w-full bg-gradient-to-r from-[#0a192f] via-[#0f2340] to-[#112240] p-6 flex flex-col items-center space-y-4 shadow-md mb-6">
        <h1 className="text-3xl font-extrabold text-white">Sai Teja</h1>
        <h2 className="text-base text-[#64ffda]">Front-End & AEM Developer</h2>
        <div className="flex space-x-6 text-xl mt-2">
          <a href="mailto:saiteja991999@gmail.com" className="hover:text-[#64ffda] text-white"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/sai-teja-604827154" target="_blank" rel="noreferrer" className="hover:text-[#64ffda] text-white"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-[#64ffda] text-white"><FaGithub /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#64ffda] text-white"><FaInstagram /></a>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="md:ml-[40%] md:w-3/5 w-full px-6 md:px-20 py-12 space-y-32">
        <motion.section id="about" className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
          <SectionHeading title="About" />
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">I craft accessible, pixel-perfect digital experiences for the web. With 4.2 years of experience across <span className="text-[#64ffda]">Banking, Telecom, Aerospace, Media, and Sports domains</span>, I specialize in ReactJS, Adobe Experience Manager (AEM), and modern front-end technologies.</p>
        </motion.section>

        <motion.section id="experience" className="space-y-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <SectionHeading title="Experience" />
          {experienceData.map((exp, index) => (
            <Card key={index} {...exp} />
          ))}
        </motion.section>

        <motion.section id="domains" className="space-y-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <SectionHeading title="Domains" />
          {domainsData.map((domain, index) => (
            <Card key={index} {...domain} />
          ))}
        </motion.section>

        <motion.section id="articles" className="space-y-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <SectionHeading title="Articles" />
          {articlesData.map((article, index) => (
            <Card key={index} {...article} />
          ))}
        </motion.section>

        <motion.section id="projects" className="space-y-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <SectionHeading title="Projects" />
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </motion.section>

        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-gray-500 text-sm text-center pt-20">© 2025 Sai Teja. Built with ❤️ using React & TailwindCSS.</motion.footer>
      </div>
    </div>
  );
}

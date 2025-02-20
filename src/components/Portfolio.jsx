import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Portfolio.css";
import ParticleBackground from "./ParticlesBackground";

const Portfolio = () => {
  const technologies = [
    { name: "Blender", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
    { name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" },
    { name: "HTML", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "JavaScript", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" },
    { name: "JSON", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { name: "NodeJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "React", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Trelo", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" },
    { name: "Unity", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
    { name: "VIteJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  ];

  const skills = [
    {
      category: "Linguagens em Aprendizado",
      items: [
        "PHP - Linguagem de script voltada para desenvolvimento web dinâmico.",
        "TypeScript - Tipagem estática para JavaScript",
        "Java - Linguagem robusta e amplamente utilizada para desenvolvimento web, mobile e desktop",
        "IntelliJ IDEA - IDE poderosa para desenvolvimento em Java e outras linguagens",
        "Stack Overflow - Plataforma essencial para solucionar dúvidas e aprender com a comunidade",
        "Unreal Engine - Motor gráfico avançado para criação de jogos e experiências interativas",
        "Visual Studio - IDE completa para desenvolvimento em diversas linguagens, incluindo C#, .NET e mais"
      ]
    },
    {
      category: "Áreas de Interesse",
      items: [
        "Desenvolvimento de Jogos - Criação de experiências interativas utilizando motores gráficos como Unity e Unreal Engine",
        "Inteligência Artificial",
        "Computação Gráfica",
        "Desenvolvimento Estilizado",
        "Arquitetura de Software"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Trabalho em Equipe",
        "Comunicação Efetiva",
        "Resolução de Problemas",
        "Pensamento Analítico",
        "Adaptabilidade",
        "Aprendizado Contínuo"
      ]
    }
  ];

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="portfolio-container">
      <ParticleBackground />

      <header className="nav-header">
        <motion.nav 
          className="nav-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#skills" className="nav-link">Habilidades</a>
          <a href="#tech" className="nav-link">Tecnologias</a>
        </motion.nav>
      </header>

      <motion.section
        ref={headerRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: headerInView ? 1 : 0, scale: headerInView ? 1 : 0.8 }}
        transition={{ duration: 0.8 }}
        className="header-section glass-morphism"
      >
        <h1 className="portfolio-title">Renann Portfólio</h1>
      </motion.section>

      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : -100 }}
        transition={{ duration: 0.8 }}
        className="about-section glass-morphism"
      >
        <h2 className="section-title">About Me / Sobre Mim</h2>
        <div className="about-content">
          <motion.p 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am Renann Felipe Volff, a passionate developer focused on JavaScript, with knowledge of Python and C++. 
            My expertise includes working with databases like MongoDB and MySQL, as well as tools like Unity, Blender, and various development environments.
            I love challenges and am always looking to learn something new.
          </motion.p>
          <motion.p 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sou Renann Felipe Volff, um desenvolvedor apaixonado, focado em JavaScript, com conhecimento em Python e C++.
            Minha experiência inclui trabalhar com bancos de dados como MongoDB e MySQL, bem como com ferramentas como Unity, Blender e diversos ambientes de desenvolvimento.
            Adoro desafios e estou sempre buscando aprender algo novo.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        ref={skillsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: skillsInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="skills-section glass-morphism"
      >
        <h2 className="section-title">Skills / Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: skillsInView ? 1 : 0, x: skillsInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.2 + itemIndex * 0.1 }}
                    className="skill-item"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="tech"
        ref={techRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: techInView ? 1 : 0, y: techInView ? 0 : 100 }}
        transition={{ duration: 0.8 }}
        className="tech-section glass-morphism"
      >
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: techInView ? 1 : 0, scale: techInView ? 1 : 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
            >
              <div className="tech-icon-wrapper">
                <img src={tech.image} alt={tech.name} className="tech-icon" />
              </div>
              <p className="tech-name">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
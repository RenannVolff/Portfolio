import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Portfolio.css";

const Portfolio = () => {
  const photos = [
    { src: "photo1.jpg", alt: "Photo 1", caption: "Caption 1" },
    { src: "photo2.jpg", alt: "Photo 2", caption: "Caption 2" },
    { src: "photo3.jpg", alt: "Photo 3", caption: "Caption 3" },
  ];

  const technologies = [
    { name: "Blender", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
    { name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" },
    { name: "HTML", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "Intellij", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
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

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Renann Portfolio</h1>

      <section className="card">
        <h2>About Me</h2>
        <p>
        I am Renann Felipe Volff, a passionate developer focused on JavaScript, with knowledge of Python and C++, and always eager to learn new programming languages. 
        My expertise includes working with databases like MongoDB and MySQL, as well as tools like Unity, Blender, and Astah. 
        I love challenges and am always looking to learn something new.
        </p>
      </section>

      <section>
        <h2 className="portfolio-title">Photo of Me</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} alt={photo.alt} className="carousel-image" />
              <p className="carousel-caption">{photo.caption}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="panoramic-section">
        <h2 className="portfolio-title">Technological Knowledge</h2>
        <table className="tech-table" style={{ margin: "0 auto" }}>
          <tbody>
            {Array.from({ length: Math.ceil(technologies.length / 5) }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {technologies.slice(rowIndex * 5, rowIndex * 5 + 5).map((tech, colIndex) => (
                  <td key={colIndex} className="tech-cell" style={{ textAlign: "center", padding: "20px" }}>
                    <h3 className="tech-name">{tech.name}</h3>
                    <img src={tech.image} alt={tech.name} className="tech-image" style={{ width: "80px", height: "80px", display: "block", margin: "10px auto" }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Portfolio;
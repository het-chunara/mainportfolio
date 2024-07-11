import styles from "../styles/Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "V-Ex Men's Wear",
      description: "An E-commerce website for men's cloths.",
      link: "https://github.com/yourusername/project-one",
      demo: "https://movieticketbooking-inky.vercel.app/",
    },
    {
      title: "Movie Ticket Booking",
      description:
        "Application that allows users to browse showtimes, select seats, and purchase tickets for movies easily.",
      link: "https://github.com/yourusername/project-two",
      demo: "https://movieticketbooking-inky.vercel.app/",
    },
    {
      title: "Cafe Billing System",
      description:
        "Application designed for managing orders, generating bills, and handling payments efficiently in a café or restaurant setting.",
      link: "https://github.com/yourusername/project-three",
      // demo: "https://project-three-demo.com",
    },
    {
      title: "ZEPHYR E-Commerce Women Wear",
      description:
        "Application designed for buying women's all types of cloths .",
      link: "https://github.com/yourusername/project-three",
      demo: "https://zephyr.v-extechsolution.in/",
    },
  ];

  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.description}>
        This is the projects page where you can showcase your work. Here you ll
        <br />
        find a list of projects I ve worked on, with detailed descriptions and
        <br />
        links to their repositories or live demos.
      </p>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Repository
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectDemo}
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          className={styles.profileImage}
          width={150}
          height={150}
        />
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Hello! I’m CHUNARA HET, a passionate developer with experience in
          building dynamic and user-friendly applications. My journey in
          technology started with a fascination for solving problems and
          creating innovative solutions. I enjoy working on challenging projects
          and learning new technologies. Feel free to explore my portfolio and
          get in touch if you have any questions or opportunities!
        </p>
      </div>

      <div className={styles.personalInfo}>
        <h2 className={styles.sectionTitle}>Personal Information</h2>
        <ul className={styles.infoList}>
          <li>
            <strong>Location:</strong> Thamna,Anand
          </li>
          <li>
            <strong>Email:</strong> chunarahet@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91-6354631090
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/het-chunara-703709242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/het-chunara-703709242
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/het-chunara"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/het-chunara
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.additionalInfo}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.skills}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>

        <h2 className={styles.sectionTitle}>Education</h2>
        <p className={styles.educationItem}>
          <strong>10th GSEB </strong> Thamna Education Institute-Thamna, 85%
        </p>
        <p className={styles.educationItem}>
          <strong>12th HSC</strong> Thamna Education Institute-Thamna, 71%
        </p>
        <p className={styles.educationItem}>
          <strong>Bachelor of Engineering in Information Technology:</strong>{" "}
          DJMIT-Mogar, CGPA 7.67
        </p>

        <h2 className={styles.sectionTitle}>Experience</h2>
        <p className={styles.experience}>
          9 months of experience in web development, including front-end and
          back-end technologies. Worked on various projects involving React,
          Next.js, and other modern web technologies.
          <br />
          <br />
          Additionally, completed a <strong>3 Month </strong>Internship at Vadodara
          <strong>V-Ex Tech Solution</strong>, where I contributed to Frontend
          Developer. During this period, I gained valuable experience in React
          JS.
          <br />
          <br />
          Previously worked as a <strong>React Develpoer</strong> at Nadiad {''}
          <strong>Groovy Web</strong> for <strong>6 Months</strong>, where I was
          involved in Frontend Developer
          <strong>Live projects</strong>. Developed skills in{" "}
          <strong>React JS,Node Js.</strong>
        </p>
      </div>
    </div>
  );
}

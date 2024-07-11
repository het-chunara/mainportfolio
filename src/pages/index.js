import styles from '../styles/Home.module.css';
import About from './about';
import Projects from './projects';
import Blog from './blog';
import Contact from './contact';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
      </header>
      <section id="about" className={styles.section}>
        <About />
      </section>
      <section id="projects" className={styles.section}>
        <Projects />
      </section>
      <section id="blog" className={styles.section}>
        <Blog />
      </section>
      <section id="contact" className={styles.section}>
        <Contact />
      </section>
    </div>
  );
}

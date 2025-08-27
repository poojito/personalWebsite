import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience.jsx";
import Intro from "../components/Intro.jsx";
import Projects from "../components/Projects.jsx";
import Section from "../components/Section.jsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Intro/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

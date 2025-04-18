import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projectData from "./projectData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects projects={projectData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

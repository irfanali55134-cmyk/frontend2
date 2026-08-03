import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../components/home/Experience";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
}

export default Home;
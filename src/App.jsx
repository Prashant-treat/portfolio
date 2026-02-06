import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact.jsx";
import Container from "./components/Container";
import Footer from "./components/footer.jsx";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Container>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </Container>
    </div>
  );
}

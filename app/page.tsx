import '../styles/globals.css';
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <div>
    <Nav/>
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  );
}

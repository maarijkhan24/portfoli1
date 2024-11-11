import '../app/globals.css'
import React from 'react'; // Import React to use JSX
import Nav from "../components/Nav"
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}


import React from "react";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contacts />
    </main>
  );
}
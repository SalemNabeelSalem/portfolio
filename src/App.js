import React from "react";

import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContactMe from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Card />

      <About />

      <Skills />

      <ContactMe />

      <Footer />
    </div>
  );
}

export default App;

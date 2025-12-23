import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import PrimaryCTA from "./components/sections/PrimaryCTA";
import Footer from "./components/layout/Footer";
import StickyMobileCTA from "./components/ui/StickyMobileCTA";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <PrimaryCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;

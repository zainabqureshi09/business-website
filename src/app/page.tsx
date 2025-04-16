'use client'
// import Blog from "./blog/page";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
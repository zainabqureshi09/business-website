'use client'
import AboutPage from "./about/page";
// import Blog from "./blog/page";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";
import Team from "./team/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPage/>
      <Services />
      <Team/>
      <Portfolio />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
"use client";

import { ThemeProvider } from "next-themes";

import Blogs from "./components/layout/pages/Blogs";
import Faq from "./components/layout/pages/Faq";
import Landing from "./components/layout/pages/Landing";
import Projects from "./components/layout/pages/Projects";
import Services from "./components/layout/pages/Services";
import Team from "./components/layout/pages/Team";
import Testimonials from "./components/layout/pages/Testimonials";
import Video from "./components/layout/pages/Video";
import Footer from "./components/layout/widgets/Footer";
import Header from "./components/layout/widgets/Header";
import Subscribe from "./components/layout/widgets/Subscribe";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <div className="flex mx-6 min-h-screen flex-col items-center justify-center">
        <Landing />
        <Video />
        <Services />
        <Team />
        <Projects />
        <Blogs />
        <Testimonials />
        <Faq />
        <Subscribe />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

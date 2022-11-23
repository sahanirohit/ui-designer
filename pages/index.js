import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>CLEAN UI - UI/UX DESIGNER & DEVELOPER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Expertise Section */}
      <Expertise />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Project Section */}
      <Projects />
    </div>
  );
}

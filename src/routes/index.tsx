import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Articles } from "@/components/portfolio/Articles";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { Socials } from "@/components/portfolio/Socials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bavanitha — AI & Data Science Developer" },
      { name: "description", content: "Portfolio of Bavanitha, an AI & Data Science engineer building intelligent, real-time systems with delightful interfaces." },
      { property: "og:title", content: "Bavanitha — AI & Data Science Developer" },
      { property: "og:description", content: "Interactive 3D portfolio showcasing AI, ML and real-time engineering projects." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen text-foreground"
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Articles />
      <CodingProfiles />
      <Socials />
      <Contact />
      <Footer />
    </motion.main>
  );
}

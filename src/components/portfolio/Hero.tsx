import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ClientOnly } from "./ClientOnly";
import { ParticlesBackground } from "./ParticlesBackground";
import { AnimatedLogoText } from "./AnimatedLogoText";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-auto">
        <ClientOnly>
          <ParticlesBackground />
        </ClientOnly>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center pt-28 pb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Available for opportunities · AI & Data Science
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <AnimatedLogoText />
            <br />
            <span className="text-foreground/80">I build </span>
            <span className="gradient-text">intelligent</span>
            <span className="text-foreground/80"> systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            AI & Data Science engineer crafting human-centered products at the
            intersection of machine learning, real-time systems and beautiful UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "var(--gradient-primary)", color: "#0a0a0f", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass hover:bg-white/5 transition"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex gap-8 text-xs text-muted-foreground font-mono"
          >
            <div><div className="text-2xl font-bold text-foreground">2+</div>YEARS</div>
            <div><div className="text-2xl font-bold text-foreground">10+</div>PROJECTS</div>
            <div><div className="text-2xl font-bold text-foreground">∞</div>CURIOSITY</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[600px]"
        >
          <div className="absolute inset-0 rounded-3xl glass overflow-hidden flex items-center justify-center p-6 sm:p-8">
            <img
              src="/images/brain.png"
              alt="Futuristic AI Brain"
              className="w-full h-full object-contain animate-float"
              loading="eager"
            />
          </div>
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-1"
      >
        <span className="font-mono">SCROLL</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}

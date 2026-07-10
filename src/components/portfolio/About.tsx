import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, ArrowRight, Sparkles, Brain, Code2, Rocket } from "lucide-react";
import { handleScroll } from "@/lib/utils";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer, learner, <span className="gradient-text">builder.</span></>}
      subtitle="A 3rd-year AI & Data Science undergraduate passionate about building real-world applications through AI, ML, and Full-Stack Development."
    >
      {/* Top row: Photo + Bio */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Photo Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 flex justify-center lg:justify-start"
        >
          <div className="relative group">
            {/* Glow behind image */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-500"
              style={{ background: "var(--gradient-primary)" }}
            />
            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl" style={{ boxShadow: "var(--shadow-glow)" }}>
              <img
                src="/images/bavanitha.jpg"
                alt="Bavanitha - AI & Data Science Developer"
                className="w-72 h-80 sm:w-80 sm:h-96 object-cover object-top"
                loading="eager"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">Available for opportunities</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bio Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-8 glass rounded-3xl p-8 sm:p-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">Who I Am</span>
          </div>

          <p className="text-lg leading-relaxed text-foreground/85">
            I'm <span className="text-foreground font-semibold">Bavanitha</span>, a 3rd-year
            Artificial Intelligence and Data Science undergraduate with a strong passion for
            AI, Machine Learning, Data Science, and Full-Stack Development. I enjoy building
            real-world applications that solve meaningful problems through technology.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My interests include Artificial Intelligence, Machine Learning, Python, React,
            TypeScript, Data Analytics, and Web Development. I have worked on projects such as
            AI-based Emergency Response Systems and continuously explore new technologies to
            improve my skills.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I believe in continuous learning, teamwork, and creating innovative solutions that
            make a positive impact. My goal is to become a skilled AI Engineer and Full-Stack
            Developer, contributing to cutting-edge technologies and real-world innovation.
          </p>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-primary)", color: "#0a0a0f", boxShadow: "var(--shadow-glow)" }}
          >
            <Mail className="w-4 h-4" />
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom row: Stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
      >
        {[
          { k: "Focus", v: "AI / ML", icon: Brain, color: "#00e5ff" },
          { k: "Year", v: "3rd Year", icon: Rocket, color: "#7c3aed" },
          { k: "Stack", v: "Python · React", icon: Code2, color: "#ec4899" },
          { k: "Status", v: "Open to work", icon: Sparkles, color: "#10b981" },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between min-h-[140px] relative overflow-hidden group cursor-default"
          >
            {/* Background glow on hover */}
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ background: c.color }}
            />
            <div className="flex items-center justify-between relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">{c.k}</div>
              <c.icon className="w-4 h-4" style={{ color: c.color }} />
            </div>
            <div className="text-xl font-semibold mt-2 relative z-10">{c.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

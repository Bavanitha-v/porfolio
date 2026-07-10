import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, ArrowRight } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer, learner, <span className="gradient-text">builder.</span></>}
      subtitle="A 3rd-year AI & Data Science undergraduate passionate about building real-world applications through AI, ML, and Full-Stack Development."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 glass rounded-3xl p-8 sm:p-10"
        >
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
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
            style={{ background: "var(--gradient-primary)", color: "#0a0a0f", boxShadow: "var(--shadow-glow)" }}
          >
            <Mail className="w-4 h-4" />
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {[
            { k: "Focus", v: "AI / ML" },
            { k: "Year", v: "3rd Year" },
            { k: "Stack", v: "Python · React" },
            { k: "Status", v: "Open to work" },
          ].map((c) => (
            <motion.div
              key={c.k}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-5 flex flex-col justify-between min-h-[120px]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">{c.k}</div>
              <div className="text-xl font-semibold mt-2">{c.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

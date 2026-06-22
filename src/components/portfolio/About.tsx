import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, ArrowRight } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer, learner, <span className="gradient-text">builder.</span></>}
      subtitle="I study Artificial Intelligence & Data Science, and I love turning research-grade ideas into products people can actually feel."
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
            I'm <span className="text-foreground font-semibold">Bavanitha</span> — an
            AI & Data Science undergrad who blends deep learning, real-time data
            pipelines, and thoughtful interface design. My work spans emergency
            response systems, emotion recognition, and tools that make machine
            intelligence feel approachable.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I'm happiest when I'm shipping fast, designing systems that scale, and
            making complex tech feel calm and useful.
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
            { k: "Studying", v: "AI & DS" },
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

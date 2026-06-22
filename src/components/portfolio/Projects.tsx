import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Emergency Response System",
    description:
      "Real-time platform that triages incoming SOS signals, routes responders, and visualises live incident maps for first-responder teams.",
    tech: ["React", "Python", "FastAPI", "WebSockets", "PostgreSQL"],
    demo: "#",
    github: "#",
    gradient: "from-cyan-500/30 via-sky-500/20 to-violet-500/30",
  },
  {
    title: "Emotion Recognition System",
    description:
      "Deep learning pipeline that detects human emotion from facial expressions and voice in real time, with a clean dashboard for analytics.",
    tech: ["TensorFlow", "OpenCV", "Python", "Streamlit"],
    demo: "#",
    github: "#",
    gradient: "from-fuchsia-500/30 via-pink-500/20 to-cyan-500/30",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects I'm <span className="gradient-text">proud of</span>.</>}
      subtitle="A glimpse of what I've been building lately."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-3xl overflow-hidden"
          >
            <div className={`h-52 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="font-mono text-4xl sm:text-5xl font-bold gradient-text tracking-tighter"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
              </div>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

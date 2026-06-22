import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Designing Real-Time Systems for Emergencies",
    excerpt: "Lessons learned building a low-latency dispatch platform for first responders.",
    tag: "Systems",
    read: "6 min",
  },
  {
    title: "Reading Emotion: Multi-modal Models in Practice",
    excerpt: "Fusing facial and audio cues for robust affect detection in the wild.",
    tag: "AI/ML",
    read: "8 min",
  },
  {
    title: "From Notebook to Product",
    excerpt: "How I ship ML experiments as polished web experiences without losing my sanity.",
    tag: "Engineering",
    read: "5 min",
  },
];

export function Articles() {
  return (
    <Section
      id="articles"
      eyebrow="Writing"
      title={<>Articles & <span className="gradient-text">notes</span></>}
      subtitle="Occasional posts about engineering, AI and the craft of building."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {articles.map((a, i) => (
          <motion.a
            href="#"
            key={a.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span className="text-cyan-400">{a.tag}</span>
                <span>{a.read}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug group-hover:gradient-text transition">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
              Read article
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

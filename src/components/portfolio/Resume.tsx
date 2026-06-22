import { motion } from "framer-motion";
import { Section } from "./Section";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={<>One page. <span className="gradient-text">Everything you need.</span></>}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-primary)" }} />

        <div className="relative z-10 flex items-start gap-5">
          <div className="p-4 rounded-2xl glass">
            <FileText className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Bavanitha — Resume.pdf</h3>
            <p className="text-muted-foreground mt-1">
              Experience, projects, education and skills — all in one place.
            </p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#"
          download
          className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ background: "var(--gradient-primary)", color: "#0a0a0f", boxShadow: "var(--shadow-glow)" }}
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>
      </motion.div>
    </Section>
  );
}

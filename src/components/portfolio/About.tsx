import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, ArrowRight, Brain, Code2, Rocket, Sparkles, Trophy, FolderGit2, Award, Lightbulb, ShieldCheck, Star } from "lucide-react";
import { handleScroll } from "@/lib/utils";

const achievements = [
  {
    icon: FolderGit2,
    title: "10+ Projects Built",
    description: "Delivered end-to-end applications spanning AI, ML, and full-stack web development.",
    color: "#3B82F6",
    tag: "Projects",
  },
  {
    icon: BrainIcon,
    title: "AI Developer",
    description: "Designed and deployed intelligent systems including AI-based Emergency Response models.",
    color: "#00e5ff",
    tag: "AI & ML",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Proficient in React, Node.js, TypeScript, and cloud-based deployment pipelines.",
    color: "#7c3aed",
    tag: "Development",
  },
  {
    icon: Award,
    title: "5+ Certifications",
    description: "Certified in Data Science, Machine Learning, and Cloud Computing from top platforms.",
    color: "#ec4899",
    tag: "Certifications",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    description: "Competed in multiple hackathons, building rapid prototypes under real-world constraints.",
    color: "#f59e0b",
    tag: "Competitions",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Solved 300+ coding challenges on LeetCode with a focus on algorithms and data structures.",
    color: "#10b981",
    tag: "LeetCode",
  },
];

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Brain {...(props as any)} />;
}

export function About() {
  return (
    <Section
      id="about"
      className="font-poppins"
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
          <div className="flex items-center gap-3 mb-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400">About Me</span>
            </div>
          </div>

          <p className="text-base sm:text-lg lg:text-xl leading-[1.8] text-foreground/85">
            I'm <span className="text-white font-bold text-lg sm:text-xl lg:text-[22px] leading-[1.8]">Bavanitha</span>, a 3rd-year
            <span className="font-bold text-[#3B82F6] text-lg sm:text-xl lg:text-[22px]"> Artificial Intelligence and Data Science</span> undergraduate with a strong passion for
            <span className="font-bold text-[#3B82F6] text-lg sm:text-xl lg:text-[22px]"> AI</span>, <span className="font-bold text-[#3B82F6] text-lg sm:text-xl lg:text-[22px]">Machine Learning</span>, <span className="font-bold text-[#3B82F6] text-lg sm:text-xl lg:text-[22px]">Data Science</span>, and <span className="font-bold text-[#3B82F6] text-lg sm:text-xl lg:text-[22px]">Full-Stack Development</span>. I enjoy building
            real-world applications that solve meaningful problems through technology.
          </p>
          <p className="mt-5 text-base sm:text-[17px] lg:text-lg leading-[1.8] text-muted-foreground">
            My interests include <span className="text-foreground/90 font-semibold">Artificial Intelligence</span>, <span className="text-foreground/90 font-semibold">Machine Learning</span>, <span className="text-foreground/90 font-semibold">Python</span>, <span className="text-foreground/90 font-semibold">React</span>,
            <span className="text-foreground/90 font-semibold"> TypeScript</span>, <span className="text-foreground/90 font-semibold">Data Analytics</span>, and <span className="text-foreground/90 font-semibold">Web Development</span>. I have worked on projects such as
            <span className="text-foreground/90 font-semibold"> AI-based Emergency Response Systems</span> and continuously explore new technologies to
            improve my skills.
          </p>
          <p className="mt-5 text-base sm:text-[17px] lg:text-lg leading-[1.8] text-muted-foreground">
            I believe in <span className="text-foreground/90 font-semibold">continuous learning</span>, teamwork, and creating innovative solutions that
            make a positive impact. My goal is to become a skilled <span className="text-foreground/90 font-semibold">AI Engineer</span> and <span className="text-foreground/90 font-semibold">Full-Stack
            Developer</span>, contributing to cutting-edge technologies and real-world innovation.
          </p>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base sm:text-lg font-semibold transition-transform hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-primary)", color: "#0a0a0f", boxShadow: "var(--shadow-glow)" }}
          >
            <Mail className="w-5 h-5" />
            Hire Me
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Stat cards */}
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
        ].map((c) => (
          <motion.div
            key={c.k}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between min-h-[140px] relative overflow-hidden group cursor-default"
          >
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ background: c.color }}
            />
            <div className="flex items-center justify-between relative z-10">
              <div className="font-mono text-[11px] uppercase tracking-widest text-cyan-400">{c.k}</div>
              <c.icon className="w-5 h-5" style={{ color: c.color }} />
            </div>
            <div className="text-xl sm:text-2xl lg:text-[28px] font-bold mt-3 relative z-10 leading-tight">{c.v}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Achievements Section ── */}
      <div className="mt-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 mb-4">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">Achievements</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What I've <span className="gradient-text">accomplished</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xs leading-relaxed">
            Milestones that reflect my growth as an AI developer.
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group border border-white/5 hover:border-white/15 transition-colors duration-300 cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: item.color }}
                />

                {/* Icon + Tag row */}
                <div className="flex items-center justify-between relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ color: item.color, background: `${item.color}15` }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg sm:text-xl font-bold text-white relative z-10 leading-snug">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed relative z-10">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip below achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "3+", label: "Years Learning", color: "#3B82F6" },
            { value: "10+", label: "Projects Built", color: "#00e5ff" },
            { value: "300+", label: "Problems Solved", color: "#7c3aed" },
            { value: "5+", label: "Certifications", color: "#10b981" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-2xl p-5 text-center relative overflow-hidden group cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${s.color}, transparent)` }}
              />
              <div
                className="text-3xl sm:text-4xl font-bold mb-1 relative z-10"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-semibold relative z-10">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Code2, Trophy } from "lucide-react";

const profiles = [
  { icon: Github, name: "GitHub", handle: "@bavanitha", stat: "120+ commits/yr", color: "#00e5ff", url: "https://github.com/Bavanitha-v" },
  { icon: Code2, name: "LeetCode", handle: "bavanithaV", stat: "300+ solved", color: "#ffa116", url: "https://leetcode.com/u/bavanithaV/" },
  { icon: Trophy, name: "HackerRank", handle: "bavanitha", stat: "5★ Problem Solving", color: "#ec4899", url: "#" },
];

export function CodingProfiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Coding Profiles"
      title={<>Where I <span className="gradient-text">practice the craft</span>.</>}
    >
      <div className="grid sm:grid-cols-3 gap-5">
        {profiles.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.a
              href={p.url}
              target={p.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group"
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
                style={{ background: p.color }}
              />
              <div className="relative w-12 h-12 rounded-xl glass flex items-center justify-center">
                <Icon className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <div className="relative">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{p.handle}</div>
              </div>
              <div className="relative text-sm text-muted-foreground mt-auto">{p.stat}</div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}

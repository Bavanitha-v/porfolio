import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Github, Twitter, Code2 } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bavanitha-v-76219b350", color: "#00e5ff" },
  { icon: Github, label: "GitHub", href: "https://github.com/Bavanitha-v", color: "#ffffff" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/bavanithaV/", color: "#ffa116" },
  { icon: Twitter, label: "Twitter", href: "#", color: "#00e5ff" },
  { icon: Instagram, label: "Instagram", href: "#", color: "#ec4899" },
  { icon: Youtube, label: "YouTube", href: "#", color: "#ef4444" },
];

export function Socials() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
      <div className="glass rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">Find me online</div>
          <div className="text-2xl font-semibold mt-2">Let's connect</div>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.1, rotate: -4 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition"
              >
                <Icon className="w-5 h-5" style={{ color: s.color }} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

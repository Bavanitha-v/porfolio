import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#articles", label: "Articles" },
  { href: "#profiles", label: "Profiles" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
      >
        <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-3 inset-x-0 z-40 mx-auto max-w-5xl px-4 transition-all`}
      >
        <div className={`glass rounded-2xl px-4 py-3 flex items-center justify-between ${scrolled ? "glow-ring" : ""}`}>
          <a href="#home" className="font-mono text-sm tracking-tight">
            <span className="gradient-text font-bold">{"<bavanitha />"}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg"
            style={{ background: "var(--gradient-primary)", color: "#0a0a0f" }}
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass rounded-2xl mt-2 p-3 flex flex-col"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>
    </>
  );
}

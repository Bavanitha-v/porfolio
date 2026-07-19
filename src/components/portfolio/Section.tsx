import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.15] tracking-tight">{title}</h2>
          {subtitle && <p className="mt-5 text-muted-foreground text-base sm:text-lg lg:text-xl leading-[1.7]">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

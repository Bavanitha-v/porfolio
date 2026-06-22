import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Send, Check } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Open the user's email client as a no-backend fallback.
    const subject = encodeURIComponent(`Portfolio contact from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\nFrom: ${parsed.data.name} <${parsed.data.email}>`);
    window.location.href = `mailto:bavanithav2006@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="gradient-text">something together</span>.</>}
      subtitle="Got a project, an idea or just want to say hi? Drop me a message."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 glass rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Reach out directly</h3>
            <p className="mt-2 text-muted-foreground">
              Prefer email? I read every message and reply within a day or two.
            </p>
          </div>
          <a
            href="mailto:bavanithav2006@gmail.com"
            className="mt-8 font-mono text-sm gradient-text hover:underline break-all"
          >
            bavanithav2006@gmail.com
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 glass rounded-3xl p-8 space-y-5"
        >
          {(["name", "email"] as const).map((field) => (
            <div key={field}>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => update(field, e.target.value)}
                placeholder={field === "email" ? "you@domain.com" : "Your name"}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition"
              />
              {errors[field] && (
                <div className="text-xs text-red-400 mt-1">{errors[field]}</div>
              )}
            </div>
          ))}
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition resize-none"
            />
            {errors.message && (
              <div className="text-xs text-red-400 mt-1">{errors.message}</div>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={loading || sent}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm disabled:opacity-60"
            style={{ background: "var(--gradient-primary)", color: "#0a0a0f", boxShadow: "var(--shadow-glow)" }}
          >
            {sent ? (<><Check className="w-4 h-4" /> Sent — check your mail app</>) :
              loading ? "Opening..." :
              (<><Send className="w-4 h-4" /> Send Message</>)}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <div>© {new Date().getFullYear()} Bavanitha · Crafted with care.</div>
        <div className="gradient-text">AI · Data Science · Design</div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";

const text = "Bavanitha";
const letters = Array.from(text);

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const child = {
  hidden: { opacity: 0, y: 50, scale: 0.5, filter: "blur(10px) brightness(2)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    transition: { type: "spring", damping: 12, stiffness: 200 }
  }
};

export function AnimatedLogoText() {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative inline-flex overflow-visible"
    >
      {/* Glowing background aura (Neural Network Glow) */}
      <motion.span 
        className="absolute inset-0 blur-[30px] opacity-40 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      
      {/* Staggered letter animation */}
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="relative z-10 gradient-text drop-shadow-[0_0_12px_rgba(0,229,255,0.7)] font-extrabold"
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
      
      {/* Holographic sweep over the text */}
      <motion.div className="absolute inset-0 z-20 overflow-hidden pointer-events-none rounded-lg">
        <motion.span
          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent"
          style={{ mixBlendMode: "overlay", transform: "skewX(-20deg)" }}
          animate={{ left: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1 }}
        />
      </motion.div>

      {/* Futuristic cyan trail underlining */}
      <motion.span
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_10px_#00e5ff]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
      />
    </motion.span>
  );
}

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.6 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: ["#00e5ff", "#7c3aed", "#ec4899"] },
          links: {
            color: "#00e5ff",
            distance: 140,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            outModes: { default: "bounce" },
          },
          number: { value: 70, density: { enable: true } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}

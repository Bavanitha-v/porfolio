import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function RotatingKnot() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.35;
  });
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
      <TorusKnot ref={ref} args={[1.1, 0.32, 220, 32]}>
        <MeshDistortMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.5}
        />
      </TorusKnot>
    </Float>
  );
}

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.6}>
      <Sphere args={[0.45, 32, 32]} position={position}>
        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.4} distort={0.5} speed={2} roughness={0.2} />
      </Sphere>
    </Float>
  );
}

function Crystal({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
      <Icosahedron args={[0.55, 0]} position={position}>
        <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.5} metalness={0.9} roughness={0.1} wireframe />
      </Icosahedron>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00e5ff" />
      <pointLight position={[-5, -3, 3]} intensity={1} color="#7c3aed" />
      <pointLight position={[0, -5, -5]} intensity={0.6} color="#ec4899" />
      <RotatingKnot />
      <Orb position={[-2.2, 1.4, -1]} color="#ec4899" />
      <Orb position={[2.4, -1.2, -0.5]} color="#00e5ff" />
      <Crystal position={[2.6, 1.6, -1.5]} />
      <Crystal position={[-2.4, -1.5, -1]} />
    </Canvas>
  );
}

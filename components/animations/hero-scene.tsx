"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#2563EB"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function InnerRing() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.5;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.5, 0.02, 16, 100]} />
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.6} />
    </mesh>
  );
}

function OuterRing() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = -state.clock.elapsedTime * 0.3;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.015, 16, 100]} />
      <meshBasicMaterial color="#06B6D4" transparent opacity={0.4} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="!absolute inset-0">
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#2563EB" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <AnimatedSphere />
      <InnerRing />
      <OuterRing />
    </Canvas>
  );
}

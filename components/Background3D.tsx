import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  darkMode: boolean;
}

const ReactiveShape: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Mouse reaction
    const { x, y } = state.pointer;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y * 0.5, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5, 0.1);
  });

  const color = darkMode ? "#222" : "#eee";
  const emissive = darkMode ? "#FF0055" : "#00CCFF";

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 64, 64]} scale={2.5} ref={meshRef}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={emissive}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
    const count = 500;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);
            
            // Mouse repulse
            const mouseX = state.pointer.x * 10;
            const mouseY = state.pointer.y * 10;

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            
            // Basic reaction
            dummy.position.x += (mouseX - dummy.position.x) * 0.02;
            dummy.position.y += (mouseY - dummy.position.y) * 0.02;

            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshPhongMaterial color="#00FF99" />
        </instancedMesh>
    );
}

export const Background3D: React.FC<SceneProps> = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 -z-10 transition-colors duration-1000" style={{ background: darkMode ? '#050505' : '#f0f0f0' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#FF0055" />
        <ReactiveShape darkMode={darkMode} />
        <Particles />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};
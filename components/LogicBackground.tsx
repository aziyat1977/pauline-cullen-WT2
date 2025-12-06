import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const GridParticles = () => {
  const ref = useRef(null);
  
  // Generate random points for a "data cloud" effect
  const positions = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 25;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.y += delta / 25;
        ref.current.rotation.z += delta / 50;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00FF99"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

// A rotating wireframe structure representing "Logic/Structure"
const Structure = () => {
    const meshRef = useRef(null);
    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.002;
    });

    return (
        <lineSegments ref={meshRef} scale={2}>
            <edgesGeometry args={[new THREE.IcosahedronGeometry(4, 2)]} />
            <lineBasicMaterial color="#00CCFF" transparent opacity={0.05} />
        </lineSegments>
    );
};

export const LogicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <GridParticles />
        <Structure />
        <fog attach="fog" args={['#050505', 8, 30]} />
      </Canvas>
    </div>
  );
};
import React, { Component, ReactNode, useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// --- ROBUST ERROR BOUNDARY ---
// Handles WebGL Context Loss gracefully by switching to a CSS fallback

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.error("WebGL 3D Scene Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden">
             {/* CSS Fallback Animation */}
             <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#FF0055] rounded-full blur-[200px] opacity-[0.08] animate-pulse-slow"></div>
             <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#00CCFF] rounded-full blur-[200px] opacity-[0.08] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- PURE THREE.JS PARTICLES (No external math libs) ---
const StarField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Manually generate random points on a sphere surface (Native Math)
  const positions = useMemo(() => {
    const count = 2000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 15; // Radius
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
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#888"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

// --- CENTRAL REACTIVE ORB ---
const HeroOrb = ({ darkMode }: { darkMode: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Floating motion manual implementation
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    
    // Rotation based on mouse
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, pointerY * 0.5, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, pointerX * 0.5, 0.05);
  });

  return (
    <Sphere args={[1, 64, 64]} scale={2.5} ref={meshRef}>
      <meshStandardMaterial
        color={darkMode ? "#050505" : "#ffffff"}
        roughness={0.1}
        metalness={0.9}
        emissive={darkMode ? "#FF0055" : "#00CCFF"}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

export const Background3D = ({ darkMode }: { darkMode: boolean }) => {
  // Delay rendering to ensure DOM is ready and avoid initial load stutter
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  if (!ready) return <div className="fixed inset-0 -z-10 bg-[#030303]" />;

  return (
    <WebGLErrorBoundary>
      <div className="fixed inset-0 -z-10 transition-colors duration-1000 bg-[#030303]">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#FF0055" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#00CCFF" />
            
            <HeroOrb darkMode={darkMode} />
            <StarField />
            
            <fog attach="fog" args={['#030303', 5, 20]} />
          </Suspense>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
};
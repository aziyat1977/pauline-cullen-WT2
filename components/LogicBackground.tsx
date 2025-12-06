import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LogicCubes = () => {
    const count = 30;
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    
    // Generate static positions
    const { positions, rotations } = useMemo(() => {
        const pos = [];
        const rot = [];
        for (let i = 0; i < count; i++) {
            pos.push(
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40
            );
            rot.push(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        }
        return { positions: new Float32Array(pos), rotations: new Float32Array(rot) };
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        
        // Rotate cubes
        const time = state.clock.getElapsedTime();
        for (let i = 0; i < count; i++) {
            dummy.position.set(
                positions[i * 3],
                positions[i * 3 + 1],
                positions[i * 3 + 2]
            );
            
            // Apply rotation animation
            dummy.rotation.set(
                rotations[i * 3] + (time * 0.2 * (i % 2 === 0 ? 1 : -1)),
                rotations[i * 3 + 1] + (time * 0.3),
                rotations[i * 3 + 2]
            );
            
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    // Create line geometry connecting cubes
    const lineGeometry = useMemo(() => {
        const points = [];
        for (let i = 0; i < count; i++) {
            points.push(new THREE.Vector3(positions[i*3], positions[i*3+1], positions[i*3+2]));
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [positions]);

    return (
        <group>
            {/* Cubes */}
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="#FF0055" wireframe transparent opacity={0.15} />
            </instancedMesh>

            {/* Connecting Lines */}
            <line geometry={lineGeometry}>
                <lineBasicMaterial color="#ffffff" opacity={0.05} transparent />
            </line>
        </group>
    );
};

export const LogicBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0b0b10]">
            <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
                <LogicCubes />
            </Canvas>
        </div>
    );
};

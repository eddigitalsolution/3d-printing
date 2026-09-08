import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export type PipelineStageType = 'model' | 'slicing' | 'printing' | 'object';

interface IndustrialModelProps {
  stage: PipelineStageType;
  layerHeightProgress?: number; // 0 to 1
  materialType?: 'titanium' | 'carbon' | 'resin';
  autoRotate?: boolean;
}

export const IndustrialModel: React.FC<IndustrialModelProps> = ({
  stage,
  layerHeightProgress = 0.65,
  materialType = 'titanium',
  autoRotate = true,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const slicePlaneRef = useRef<THREE.Mesh>(null!);
  const printNozzleRef = useRef<THREE.Group>(null!);

  // Procedural complex mechanical geometry (Turbine / Lattice Impeller)
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1.5, 0.45, 128, 32, 2, 3);
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Outer lattice ring geometry for industrial flair
  const latticeGeo = useMemo(() => {
    return new THREE.CylinderGeometry(2.6, 2.6, 0.4, 36, 1, true);
  }, []);

  // Clipping plane for slicing and layer printing
  const clippingPlane = useMemo(() => {
    // Height maps from -2 to +2 roughly
    const planeY = (layerHeightProgress - 0.5) * 4.0;
    return new THREE.Plane(new THREE.Vector3(0, -1, 0), planeY);
  }, [layerHeightProgress]);

  // Frame animations
  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.4;
    }

    // Laser Slicing oscillation
    if (stage === 'slicing' && slicePlaneRef.current) {
      const time = state.clock.getElapsedTime();
      const oscY = Math.sin(time * 2) * 1.8;
      slicePlaneRef.current.position.y = oscY;
    }

    // Hotend nozzle positioning in printing mode
    if (stage === 'printing' && printNozzleRef.current) {
      const time = state.clock.getElapsedTime();
      const printY = (layerHeightProgress - 0.5) * 3.6;
      printNozzleRef.current.position.y = printY;
      printNozzleRef.current.position.x = Math.sin(time * 8) * 0.8;
      printNozzleRef.current.position.z = Math.cos(time * 8) * 0.8;
    }
  });

  // Material selection based on stage
  const renderMaterials = useMemo(() => {
    // 1. Model / Wireframe Material
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    // 2. Slicing Material with Laser Plane Highlight
    const slicingMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      wireframe: true,
      roughness: 0.2,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.3,
    });

    // 3. Printing Layer Build Material
    const printingMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3,
      clippingPlanes: [clippingPlane],
      clipShadows: true,
    });

    // 4. Physical Object Finish Materials
    let physicalMat: THREE.Material;
    if (materialType === 'carbon') {
      physicalMat = new THREE.MeshStandardMaterial({
        color: 0x111827,
        metalness: 0.1,
        roughness: 0.4,
        bumpScale: 0.05,
      });
    } else if (materialType === 'resin') {
      physicalMat = new THREE.MeshPhysicalMaterial({
        color: 0x00f0ff,
        transmission: 0.85,
        opacity: 1,
        transparent: true,
        roughness: 0.15,
        ior: 1.5,
        thickness: 1.2,
      });
    } else {
      // Titanium / Metal Default
      physicalMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.95,
        roughness: 0.2,
        envMapIntensity: 1.5,
      });
    }

    return { wireframeMat, slicingMat, printingMat, physicalMat };
  }, [clippingPlane, materialType]);

  return (
    <group ref={groupRef}>
      {/* ---------------- STAGE 1: 3D MODEL / WIREFRAME ---------------- */}
      {stage === 'model' && (
        <group>
          <mesh geometry={geometry} material={renderMaterials.wireframeMat} />
          <mesh geometry={latticeGeo} material={renderMaterials.wireframeMat} />
          
          {/* Wireframe Bounding Box */}
          <boxHelper args={[new THREE.Mesh(geometry), 0x00f0ff]} />
          
          {/* Point Cloud Nodes */}
          <points geometry={geometry}>
            <pointsMaterial size={0.04} color={0x00f0ff} sizeAttenuation={true} />
          </points>
        </group>
      )}

      {/* ---------------- STAGE 2: LASER SLICING ---------------- */}
      {stage === 'slicing' && (
        <group>
          {/* Base Model Mesh */}
          <mesh geometry={geometry} material={renderMaterials.slicingMat} />

          {/* Oscillating Laser Slice Plane Ring */}
          <mesh ref={slicePlaneRef} position={[0, 0, 0]}>
            <ringGeometry args={[0.2, 3.2, 64]} />
            <meshBasicMaterial
              color={0x00f0ff}
              side={THREE.DoubleSide}
              transparent
              opacity={0.6}
            />
          </mesh>

          {/* Grid Beam Coordinates */}
          <gridHelper args={[7, 14, 0x00f0ff, 0x1e293b]} position={[0, -2.2, 0]} />
        </group>
      )}

      {/* ---------------- STAGE 3: ACTIVE LAYER PRINTING ---------------- */}
      {stage === 'printing' && (
        <group>
          {/* Partially Built Mesh (Clipped) */}
          <mesh geometry={geometry} material={renderMaterials.printingMat} />

          {/* Ghost Wireframe for upper unbuilt portion */}
          <mesh geometry={geometry}>
            <meshBasicMaterial color={0x00f0ff} wireframe transparent opacity={0.15} />
          </mesh>

          {/* Extruder Hotend Nozzle Cone */}
          <group ref={printNozzleRef}>
            <mesh position={[0, 0.4, 0]} rotation={[Math.PI, 0, 0]}>
              <coneGeometry args={[0.25, 0.8, 16]} />
              <meshStandardMaterial color={0xff6b00} metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Hotend Tip Emission Light */}
            <pointLight color={0xff6b00} intensity={4} distance={2} />
            {/* Glow Ring at nozzle tip */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.05, 0.2, 16]} />
              <meshBasicMaterial color={0xff6b00} side={THREE.DoubleSide} />
            </mesh>
          </group>

          {/* Print Bed Build Plate */}
          <gridHelper args={[6, 20, 0xff6b00, 0x334155]} position={[0, -2.1, 0]} />
        </group>
      )}

      {/* ---------------- STAGE 4: FINISHED PHYSICAL OBJECT ---------------- */}
      {stage === 'object' && (
        <group>
          <mesh geometry={geometry} material={renderMaterials.physicalMat} castShadow receiveShadow />
          <mesh geometry={latticeGeo} material={renderMaterials.physicalMat} castShadow receiveShadow />
          
          {/* Subtle Emissive Core Ring */}
          <mesh position={[0, 0, 0]} scale={[0.9, 0.9, 0.9]}>
            <torusGeometry args={[1.5, 0.05, 16, 64]} />
            <meshBasicMaterial color={0x00f0ff} />
          </mesh>

          {/* Base Display Stand */}
          <mesh position={[0, -2.2, 0]}>
            <cylinderGeometry args={[2.5, 2.8, 0.2, 32]} />
            <meshStandardMaterial color={0x0f172a} metalness={0.8} roughness={0.3} />
          </mesh>
        </group>
      )}
    </group>
  );
};

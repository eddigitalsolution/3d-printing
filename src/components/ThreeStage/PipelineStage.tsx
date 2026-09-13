import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { IndustrialModel, PipelineStageType } from './IndustrialModel';

interface PipelineStageProps {
  stage: PipelineStageType;
  layerHeightProgress?: number;
  materialType?: 'titanium' | 'carbon' | 'resin';
  enableFloat?: boolean;
}

export const PipelineStage: React.FC<PipelineStageProps> = ({
  stage,
  layerHeightProgress = 0.65,
  materialType = 'titanium',
  enableFloat = true,
}) => {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] relative rounded-2xl overflow-hidden bg-industrial-950/80 border border-slate-800 shadow-2xl">
      {/* Blueprint Grid Watermark Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial Telemetry Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      {/* R3F Canvas Viewport */}
      <Canvas
        camera={{ position: [0, 1.5, 6.5], fov: 45 }}
        gl={{ localClippingEnabled: true, antialias: true }}
        className="w-full h-full relative z-10"
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#00f0ff" />
        <pointLight position={[0, 4, 0]} intensity={stage === 'printing' ? 3 : 1} color={stage === 'printing' ? '#ff6b00' : '#00f0ff'} />

        <Suspense fallback={null}>
          <Float speed={enableFloat && stage !== 'printing' ? 1.5 : 0} rotationIntensity={0.2} floatIntensity={0.3}>
            <IndustrialModel
              stage={stage}
              layerHeightProgress={layerHeightProgress}
              materialType={materialType}
            />
          </Float>
        </Suspense>

        {/* User Interactive OrbitControls */}
        <OrbitControls
          enableZoom={true}
          maxDistance={12}
          minDistance={3.5}
          maxPolarAngle={Math.PI / 2 + 0.1}
          autoRotate={false}
        />
      </Canvas>

      {/* Viewport Floating HUD Overlays */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-1 font-mono text-[11px]">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-industrial-900/90 border border-cyan-500/30 text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>VIEWPORT: R3F OPENGL</span>
        </div>
        <div className="text-slate-400 px-2 py-0.5 bg-black/40 rounded backdrop-blur-sm">
          CAM: [0.0, 1.5, 6.5]
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center gap-3 font-mono text-[11px] text-slate-400">
        <span className="px-2.5 py-1 rounded bg-industrial-900/80 border border-slate-800">
          ORBIT: INTERACTIVE
        </span>
        <span className="px-2.5 py-1 rounded bg-industrial-900/80 border border-slate-800 text-cyan-400">
          FPS: 60
        </span>
      </div>
    </div>
  );
};

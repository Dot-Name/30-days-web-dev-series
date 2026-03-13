import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls, FlyControls, PointerLockControls,
  FirstPersonControls, TrackballControls
} from '@react-three/drei';
import {
  Box, Sphere, TorusShape, Torusknot, Plane, Cone, Cylinder, Ring,
  Circle, Dodecahedron, Icosahedron, Octahedron, Tetrahedron,
  Capsule
} from './Shapes';

const geometryMap = {
  box: Box, sphere: Sphere, plane: Plane, cone: Cone, cylinder: Cylinder,
  torus: TorusShape, torusKnot: Torusknot, ring: Ring, circle: Circle,
  dodecahedron: Dodecahedron, icosahedron: Icosahedron, octahedron: Octahedron,
  tetrahedron: Tetrahedron, capsule: Capsule,
};

const shapeColors = {
  green: '#00FF00', red: '#FF0000', blue: '#0000FF', white: '#FFFFFF',
  black: '#000000', yellow: '#FFFF00', orange: '#FFA500', purple: '#800080',
  brown: '#A52A2A', gray: '#808080', pink: '#FFC0CB', cyan: '#00FFFF',
  magenta: '#FF00FF', lime: '#00FF00', maroon: '#800000', olive: '#808000',
  silver: '#C0C0C0', teal: '#008080', aqua: '#00FFFF',
};

const shapeArgsMap = {
  box: [3, 3, 3], sphere: [2, 32, 32], plane: [4, 4], cone: [1.5, 4, 32],
  cylinder: [1, 1, 3, 32], torus: [1.5, 0.3, 16, 100], torusKnot: [1, 0.3, 100, 16],
  ring: [1, 2, 32], circle: [2, 32], dodecahedron: [2, 0], icosahedron: [2, 0],
  octahedron: [2, 0], tetrahedron: [2, 0], capsule: [1, 1.5, 4, 8],
};

const panelClass = "backdrop-blur-xl bg-white/10 border border-white/[0.15] shadow-2xl rounded-xl p-4 flex flex-col gap-3";
const selectClass = "w-full px-4 py-2 rounded-lg bg-white/20 text-white font-semibold outline-none shadow focus:bg-white/30 transition-all duration-150 hover:bg-white/30";

const Hero = () => {
  const [shapeType, setShapeType] = useState('box');
  const [Controls, setControl] = useState("OrbitControls");
  const [color, setColor] = useState("green");
  const SelectedShape = geometryMap[shapeType];
  const args = shapeArgsMap[shapeType];
  const colors = shapeColors[color];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#23243a] via-[#353572] to-[#09e9ff] transition-all duration-300">
      {/* Floating control panel - moved to top-left */}
      <div className="fixed top-4 left-4 z-20 w-[320px] max-w-[90vw]">
        <div className={panelClass}>
          <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 mb-2 tracking-tight text-center">
            3D Shape Gallery
          </h1>
          
          <label className="text-sm font-bold mb-1 text-white/90">Shape</label>
          <select
            className={selectClass}
            value={shapeType}
            onChange={e => setShapeType(e.target.value)}
            style={{
              colorScheme: 'dark'
            }}
          >
            {Object.keys(geometryMap).map(key => (
              <option 
                key={key} 
                value={key}
                style={{ 
                  backgroundColor: '#1f2937', 
                  color: '#ffffff' 
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} Geometry
              </option>
            ))}
          </select>
          
          <label className="text-sm font-bold mt-2 mb-1 text-white/90">Color</label>
          <select
            className={selectClass}
            value={color}
            onChange={e => setColor(e.target.value)}
            style={{
              colorScheme: 'dark'
            }}
          >
            {Object.keys(shapeColors).map(key => (
              <option 
                key={key} 
                value={key}
                style={{ 
                  backgroundColor: '#1f2937', 
                  color: '#ffffff' 
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
          
          <label className="text-sm font-bold mt-2 mb-1 text-white/90">Controls</label>
          <select
            className={selectClass}
            value={Controls}
            onChange={e => setControl(e.target.value)}
            style={{
              colorScheme: 'dark'
            }}
          >
            <option value="OrbitControls" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
              Orbit (Default)
            </option>
            <option value="FlyControls" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
              Fly
            </option>
            <option value="PointerLockControls" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
              Pointer Lock
            </option>
            <option value="FirstPersonControls" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
              First Person
            </option>
            <option value="TrackballControls" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
              Trackball
            </option>
          </select>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-[85vh] md:w-[80vw] md:h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-slate-900/40 ring-1 ring-cyan-200/30">
        <Canvas style={{ width: '100%', height: '100%', background: 'transparent' }}>
          {/* Lighting for shape realism */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[8, 16, 10]} intensity={0.7} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <pointLight position={[-7, -6, -5]} intensity={0.7} />
          
          {/* Soft shadow underneath */}
          <mesh receiveShadow position={[0, -2.15, 0]}>
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.24} />
          </mesh>
          
          {/* Shape with highlight ring */}
          {SelectedShape && (
            <group>
              <SelectedShape position={[0, 0.5, 0]} color={colors} args={args} castShadow />
              {/* Glow effect ring */}
              {/* <mesh>
                <ringGeometry args={[2.2, 2.7, 64]} />
                <meshBasicMaterial color={colors} transparent opacity={0.3} />
              </mesh> */}
            </group>
          )}

          {/* Controls */}
          {Controls === "OrbitControls" &&
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={1}
              maxDistance={100}
              maxPolarAngle={Math.PI}
              minPolarAngle={0}
              autoRotate={false}
              autoRotateSpeed={1.5}
            />}
          {Controls === "FlyControls" &&
            <FlyControls movementSpeed={10} rollSpeed={0.5} dragToLook={true} autoForward={false} />}
          {Controls === "PointerLockControls" && <PointerLockControls />}
          {Controls === "FirstPersonControls" &&
            <FirstPersonControls activeLook={true} lookSpeed={0.1} movementSpeed={5} lookVertical={true} constrainVertical={false} />}
          {Controls === "TrackballControls" && <TrackballControls />}
        </Canvas>
      </div>

      {/* Decorative blurred glow for glass effect */}
      <div 
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-80 pointer-events-none blur-2xl opacity-60 z-0"
        style={{ background: "radial-gradient(ellipse at center, #00ffd0ab 0%, #ff7cf7a7 100%)" }}
      >
      </div>
    </div>
  );
};

export default Hero;
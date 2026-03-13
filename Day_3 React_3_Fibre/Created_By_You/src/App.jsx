import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";


// Floating Cube

function FloatingCube(){
  const cubeRef = useRef();

  useFrame((state,delta)=> {
    cubeRef.current.rotation.x+= delta*0.6;
    cubeRef.current.rotation.y+= delta*0.9;
  })
  
  return(
    <mesh ref={cubeRef} castShadow>
      <boxGeometry args={[1.8,1.8,1.8]}/>
      <meshStandardMaterial
        color="#7c3aed"
        metalness={0.45} //metel surface
        roughness={0.2} // roughness
      />
    </mesh>
  )
}

//Scene

function Scene(){
  return(
    <Canvas>
      {/* lightings */}
      <ambientLight intensity={1.2}/>
      <directionalLight position={[3,3,3]} intensity={2} castShadow/>
      <pointLight position={[-3,-2,2]} intensity={1.5}/>

      {/* main 3D object */}
      <FloatingCube/>

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
      />
    </Canvas>
  )
}

export default function App(){
  return(
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10 lg:px-16">
        <div className="space-y-6">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300 backdrop-blur">
            Day 3 - React three fiber intro
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            React is not only 
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">2D anymore</span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Build elegant 3D experiences in React with React Three Fiber.
            Simple components, smooth animation, and a more modern web feel.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-500">
              Explore 3D
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-200 transition hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_55%)]">
            <Scene/>
          </div>
        </div>
      </section>
    </main>
  )
}
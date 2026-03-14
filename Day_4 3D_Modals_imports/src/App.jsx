import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./component/Model.jsx";
import { Suspense } from "react";

export default function App(){
  return(
    <div className="w-full h-screen bg-black">
      <Canvas camera={{position:[0,2,5], fov:50}}>
        <ambientLight intensity={1}/>
        <directionalLight position={[2,5,2]} intensity={2}/>
        
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" />
        </Suspense>
          <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  )
}
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const gltf = useGLTF("/models/Parrot.glb");
    return (
        <primitive object={gltf.scene} scale={0.25} position={[1.5, -1.5, 0]} rotation={[0, Math.PI/4, 0]}
         {...props} />
    );
}

useGLTF.preload("/models/Parrot.glb");
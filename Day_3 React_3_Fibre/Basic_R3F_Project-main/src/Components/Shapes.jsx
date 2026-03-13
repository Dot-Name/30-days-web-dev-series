import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Torus } from '@react-three/drei';

const Box =  ({posi, color, args}) =>{
    return (
        <group>
            <mesh position={posi}>
                <boxGeometry  args={args}/>
                <meshLambertMaterial color={color}/>
            </mesh>
            <mesh position={posi}>
                <boxGeometry  args={args}/>
                <meshLambertMaterial color={color}/>
                <meshBasicMaterial color={"Black"} wireframe/>
            </mesh>
        </group>
    )
};

const Sphere = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <sphereGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <sphereGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const TorusShape = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <torusGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <torusGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Torusknot = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <torusKnotGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <torusKnotGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Plane = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <planeGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <planeGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Cone = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <coneGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <coneGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Cylinder = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <cylinderGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <cylinderGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Ring = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <ringGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <ringGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Circle = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <circleGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <circleGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Dodecahedron = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <dodecahedronGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <dodecahedronGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Icosahedron = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <icosahedronGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <icosahedronGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Octahedron = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <octahedronGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <octahedronGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Tetrahedron = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <tetrahedronGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <tetrahedronGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

const Capsule = ({ posi, color, args }) => {
    return (
        <group>
            <mesh position={posi}>
                <capsuleGeometry args={args} />
                <meshLambertMaterial color={color} />
            </mesh>
            <mesh position={posi}>
                <capsuleGeometry args={args} />
                <meshBasicMaterial color="black" wireframe />
            </mesh>
        </group>
    );
};

export {Box, Sphere, TorusShape, Torusknot, Plane, Cone, Cylinder, Ring, Circle, Dodecahedron, Icosahedron, Octahedron, Tetrahedron, Capsule}
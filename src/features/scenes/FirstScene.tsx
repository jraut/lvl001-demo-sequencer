import { FC, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Depth, LayerMaterial } from "lamina";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HelloWorldBackground {
  blue: number;
}

export const HelloWorldBackground = () => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x =
        mesh.current.rotation.y =
        mesh.current.rotation.z +=
          delta;
    }
  });
  // @ts-ignore
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial color="#f0aed2" attach="material" side={THREE.BackSide}>
        <Depth
          colorA="blue"
          colorB="#00aaff"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={300}
          origin={[10, 10, 10]}
        />
        <Depth
          colorA="#ff0000"
          colorB="#00aaff"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
};

export interface FirstScene {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export const FirstScene = () => {
  return <HelloWorldBackground />;
};

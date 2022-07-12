import { FC, ReactNode, Suspense } from "react";
import { Canvas as _Canvas } from "@react-three/fiber";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Canvas {
  children: ReactNode;
}

export const Canvas: FC<Canvas> = ({ children }) => {
  return (
    <_Canvas dpr={[1, 2]} camera={{ position: [2, 0, 0], fov: 80 }}>
      <Suspense fallback={null}>{children}</Suspense>
    </_Canvas>
  );
};

import React from "react";
import "./App.css";
import { FirstScene } from "./features/scenes/FirstScene";
import { Canvas } from "./features/utility/Canvas";

function App() {
  return (
    <>
      <div className="absolute -z-10">
        <div className="flex justify-center h-screen">
          <Canvas>
            <FirstScene />
          </Canvas>
        </div>
      </div>
      <div className="flex justify-center h-screen">
        <div className="m-auto">LVL001 Sequencing tool</div>
      </div>
    </>
  );
}

export default App;

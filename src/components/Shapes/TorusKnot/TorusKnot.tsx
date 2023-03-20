import React, { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { ReturnContainer } from "../../Home/style";

interface Props {
  uploadedImage: File | null;
}

const TorusKnot: React.FC<Props> = ({ uploadedImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const createScene = async () => {
      // Create Babylon.js engine and scene
      const engine = new BABYLON.Engine(canvasRef.current!, true);
      const scene = new BABYLON.Scene(engine);

      // Create a camera and position it
      const camera = new BABYLON.ArcRotateCamera(
        "camera",
        BABYLON.Tools.ToRadians(45),
        BABYLON.Tools.ToRadians(45),
        10,
        new BABYLON.Vector3(0, 0, 0),
        scene
      );
      camera.attachControl(canvasRef.current!, true);

      // Create a light and position it
      const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
      );

      const reader = new FileReader();

      const blob = new Blob([reader.result as string], {
        type: uploadedImage?.type,
      });
      // Load the image as a texture

      const texture = new BABYLON.Texture(
        //@ts-ignore
        URL.createObjectURL(uploadedImage),
        scene
      );

      // Create a torus knot mesh with the texture applied
      const torusKnot = BABYLON.MeshBuilder.CreateTorusKnot(
        "torusKnot",
        //@ts-ignore
        { radius: 1, tessellation: 64, thickness: 0.4 },
        scene
      );
      const material = new BABYLON.StandardMaterial("material", scene);
      material.diffuseTexture = texture;
      torusKnot.material = material;

      const bgColor = new BABYLON.Color4(255, 255, 255, 1);
      scene.clearColor = bgColor;

      // Render the scene
      engine.runRenderLoop(() => {
        scene.render();
      });
    };

    createScene();
  }, [uploadedImage]);

  return (
    <ReturnContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </ReturnContainer>
  );
};

export default TorusKnot;

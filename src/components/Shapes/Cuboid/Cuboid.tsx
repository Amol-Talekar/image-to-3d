import React, { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { ReturnContainer } from "../../Home/style";

interface Props {
  uploadedImage: File | null;
}

const Cuboid: React.FC<Props> = ({ uploadedImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && uploadedImage) {
      // Initialize the Babylon.js engine
      const engine = new BABYLON.Engine(canvasRef.current, true);

      // Create a new scene
      const scene = new BABYLON.Scene(engine);

      // Create a camera and position it
      var camera = new BABYLON.ArcRotateCamera(
        "Camera",
        0,
        0.8,
        100,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.lowerBetaLimit = 0.1;
      camera.upperBetaLimit = (Math.PI / 2) * 0.9;
      camera.lowerRadiusLimit = 30;
      camera.upperRadiusLimit = 150;
      camera.attachControl(canvasRef, true);

      // Create a light and position it
      const light = new BABYLON.HemisphericLight(
        "HemiLight",
        new BABYLON.Vector3(0, 1, 0),
        scene
      );
      light.intensity = 0.7;

      // Create a material for the cuboid and apply the uploaded uploadedImage to it
      const material = new BABYLON.StandardMaterial("Material", scene);
      const texture = new BABYLON.Texture(
        URL.createObjectURL(uploadedImage),
        scene,
        false,
        true,
        BABYLON.Texture.TRILINEAR_SAMPLINGMODE
      );
      material.diffuseTexture = texture;

      // Create the cuboid with proper folding and apply the material to it
      const cuboid = BABYLON.MeshBuilder.CreateBox("Cuboid", {
        size: 50,
        width: 70,
        height: 70,
        depth: 70,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      });
      cuboid.parent = new BABYLON.TransformNode("foldedCuboid", scene);
      cuboid.position.x = -2;
      cuboid.position.y = -2;
      cuboid.position.z = -1;
      cuboid.scaling.y = 0.5;
      cuboid.scaling.z = 0.5;
      cuboid.material = material;

      const bgColor = new BABYLON.Color4(255, 255, 255, 1);
      scene.clearColor = bgColor;

      // Render the scene
      engine.runRenderLoop(() => {
        scene.render();
      });

      // Resize the canvas when the window is resized
      window.addEventListener("resize", () => {
        engine.resize();
      });

      // Cleanup function to dispose of the scene and engine
      return () => {
        scene.dispose();
        engine.dispose();
      };
    }
  }, [canvasRef, uploadedImage]);

  return (
    <ReturnContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </ReturnContainer>
  );
};

export default Cuboid;

import React, { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { ReturnContainer } from "../../Home/style";

interface Props {
  uploadedImage: File | null;
}

const Capsule: React.FC<Props> = ({ uploadedImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new BABYLON.Engine(canvasRef.current, true);
    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      const camera = new BABYLON.ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        Math.PI / 2,
        5,
        new BABYLON.Vector3(0, 0, 0),
        scene
      );
      camera.attachControl(canvasRef.current, true);

      const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
      );

      const capsule = BABYLON.MeshBuilder.CreateCapsule(
        "capsule",
        { capSubdivisions: 16, tessellation: 48, height: 2, radius: 0.5 },
        scene
      );

      const mat = new BABYLON.StandardMaterial("mat", scene);

      const texture = new BABYLON.Texture(
        //@ts-ignore
        URL.createObjectURL(uploadedImage),
        scene
      );
      mat.diffuseTexture = texture;
      capsule.material = mat;

      return scene;
    };

    const scene = createScene();
    const bgColor = new BABYLON.Color4(255, 255, 255, 1);
    scene.clearColor = bgColor;
    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, [uploadedImage]);

  return (
    <ReturnContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </ReturnContainer>
  );
};

export default Capsule;

import { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { ReturnContainer } from "../../Home/style";

interface Props {
  uploadedImage: File | null;
}

const Ribbons: React.FC<Props> = ({ uploadedImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // create babylon.js engine
    const engine = new BABYLON.Engine(canvas, true);

    // create babylon.js scene
    const scene = new BABYLON.Scene(engine);

    // create a camera and attach it to the scene
    const camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0,
      10,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);

    // create a light and attach it to the scene
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    // create a ribbon from the image
    const ribbon = BABYLON.MeshBuilder.CreateRibbon(
      "ribbon",
      {
        //@ts-ignore
        pathArray: getImagePathArray(),
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        updatable: true,
      },
      scene
    );
    function getImagePathArray(): BABYLON.Vector3[] {
      // Load the image as an HTMLImageElement
      const img = new Image();
      img.src = getBase64Image();
      img.width = 512;
      img.height = 512;

      // create a 2D context from the image
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d")!;
      context.drawImage(img, 0, 0, img.width, img.height);

      // create an array of path points from the image data
      const pathArray: BABYLON.Vector3[] = [];
      const imageData = context.getImageData(0, 0, img.width, img.height);
      for (let y = 0; y < img.height; y++) {
        const row = [];
        for (let x = 0; x < img.width; x++) {
          const pixel = imageData.data[(y * img.width + x) * 4];
          const depth = pixel / 255.0;
          row.push(
            new BABYLON.Vector3(x - img.width / 2, y - img.height / 2, depth)
          );
        }
        pathArray.push(...row);
      }

      return pathArray;
    }

    function getBase64Image(): string {
      const reader = new FileReader();
      //@ts-ignore
      reader.readAsDataURL(uploadedImage);
      return reader.result as string;
    }

    // set material for the ribbon
    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = new BABYLON.Texture(getBase64Image(), scene);
    ribbon.material = material;

    // render the scene
    engine.runRenderLoop(() => {
      scene.render();
    });

    // clean up
    return () => {
      engine.stopRenderLoop();
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

export default Ribbons;

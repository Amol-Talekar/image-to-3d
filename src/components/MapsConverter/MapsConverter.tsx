import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from "@babylonjs/core";
// import mumbai from "../../assets/mumbai.png";
// import { Container, InputContainer } from "./style";
// import ImageUploader from "../ImageUploader/ImageUploader";

// const MapsConverter = () => {
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const canvasRef = useRef(null);

//   const handleImageUpload = (file: File) => {
//     console.log(`Selected file: ${file.name}`);
//     // Do something with the selected file, such as upload it to a server
//   };

//   const handleConvertTo3D = () => {
//     const canvas = canvasRef.current;
//     const engine = new BABYLON.Engine(canvas, true);

//     const createScene = () => {
//       const scene = new BABYLON.Scene(engine);

//       // Create a camera and position it
//       const camera = new BABYLON.ArcRotateCamera(
//         "camera",
//         -Math.PI / 2,
//         Math.PI / 2,
//         10,
//         new BABYLON.Vector3(0, 0, 0),
//         scene
//       );
//       camera.attachControl(canvas, true);

//       // Create a light source
//       const light = new BABYLON.PointLight(
//         "light",
//         camera.globalPosition,
//         scene
//       );

//       // Create a material for the map texture
//       const material = new BABYLON.StandardMaterial("material", scene);

//       // Load the image and set it as the texture
//       //@ts-ignore
//       const texture = new BABYLON.Texture(imageFile, scene, false, true);
//       material.diffuseTexture = texture;

//       // Create the 3D cuboid with the map texture
//       //   const options = {
//       //     width: 10,
//       //     height: 4,
//       //     depth: 8,
//       //     faceColors: [
//       //       new BABYLON.Color4(1, 1, 1, 1),
//       //       new BABYLON.Color4(1, 1, 1, 1),
//       //       new BABYLON.Color4(1, 1, 1, 1),
//       //       new BABYLON.Color4(1, 1, 1, 1),
//       //       new BABYLON.Color4(1, 1, 1, 1),
//       //       new BABYLON.Color4(1, 1, 1, 1),
//       //     ],
//       //     wrap: true,
//       //   };
//       const options = {
//         diameter: 10,
//         segments: 16,
//       };
//       const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", options, scene);
//       sphere.material = material;
//       sphere.rotation.x = Math.PI;
//       //const cuboid = BABYLON.MeshBuilder.CreateBox("cuboid", options, scene);

//       //cuboid.material = material;

//       return scene;
//     };

//     const scene = createScene();

//     engine.runRenderLoop(() => {
//       if (scene) {
//         scene.render();
//       }
//     });

//     return () => {
//       scene.dispose();
//       engine.dispose();
//     };
//   };
//   return (
//     <Container>
//       <InputContainer>
//         <button onClick={handleConvertTo3D}>Transform</button>
//         <ImageUploader
//           onImageUpload={handleImageUpload}
//           imageFile={imageFile}
//           setImageFile={setImageFile}
//         />
//       </InputContainer>
//       <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
//     </Container>
//   );
// };

// export default MapsConverter;

import React, { useState } from "react";
import Cuboid from "../Shapes/Cuboid/Cuboid";
import TorusKnot from "../Shapes/TorusKnot/TorusKnot";
import Cylinder from "../Shapes/Cylinder/Cylinder";
import Capsule from "../Shapes/Capsule/Capsule";
import Sphere from "../Shapes/Sphere/Sphere";
import {
  ButtonsContainer,
  Footer,
  HomeContainer,
  ImagePreview,
  MainContainer,
  ShapeContainer,
  UploadAnimation,
  UploadButton,
  UploadButtonContainer,
} from "./style";

interface Props {}

const Home: React.FC<Props> = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [selectedChild, setSelectedChild] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const renderChildComponent = () => {
    switch (selectedChild) {
      case "cuboid":
        return <Cuboid uploadedImage={uploadedImage} />;
      case "torusknot":
        return <TorusKnot uploadedImage={uploadedImage} />;
      case "cylinder":
        return <Cylinder uploadedImage={uploadedImage} />;
      case "capsule":
        return <Capsule uploadedImage={uploadedImage} />;
      case "sphere":
        return <Sphere uploadedImage={uploadedImage} />;

      default:
        return null;
    }
  };

  return (
    <HomeContainer>
      <h1 style={{ textAlign: "center" }}>
        Image to 3D shape using babylon.js
      </h1>

      <UploadButtonContainer>
        <UploadButton>
          <span>Upload Image</span>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </UploadButton>
        {uploadedImage && (
          <ImagePreview
            src={URL.createObjectURL(uploadedImage)}
            alt="Uploaded Image"
          />
        )}
        {!uploadedImage && <UploadAnimation />}
      </UploadButtonContainer>

      <MainContainer>
        <ButtonsContainer>
          <button onClick={() => setSelectedChild("cuboid")}>Cuboid</button>
          <button onClick={() => setSelectedChild("torusknot")}>
            Torus Knot
          </button>
          <button onClick={() => setSelectedChild("cylinder")}>Cylinder</button>
          <button onClick={() => setSelectedChild("capsule")}>Capsule</button>
          <button onClick={() => setSelectedChild("sphere")}>Sphere</button>
        </ButtonsContainer>
        <ShapeContainer>{renderChildComponent()}</ShapeContainer>
      </MainContainer>
      <Footer>Copyright @2023</Footer>
    </HomeContainer>
  );
};

export default Home;

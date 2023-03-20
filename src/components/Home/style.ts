import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
  //height: 80vh;
  margin: auto;
`;

export const ReturnContainer = styled.div`
  width: "75vw";

  margin: "auto";
  padding: "20px";
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  min-height: 80vh;
  @media (max-width: 768px) {
    min-height: 40vh;
  }

  button {
    white-space: nowrap;
    padding: 10px 20px;
    background-color: white;
    border: none;
    border-radius: 20px;
    color: blue;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: blue;
      color: white;
    }

    &:active {
      animation: ${keyframes`
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    `} 0.3s ease-in-out;
    }
  }
`;

export const ShapeContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 90vw;
  margin: auto;
`;

export const UploadButton = styled.label`
  display: inline-block;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #0077c2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: fit-content;
  margin-left: 60px;
  white-space: nowrap;
  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 420px) {
    margin-left: 6px;
    padding: 4px 8px;
    font-size: 12px;
  }

  &:hover {
    background-color: #005ca9;
  }

  input[type="file"] {
    display: none;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 200px;
`;
const flow = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;
export const UploadButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  padding: 20px;

  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  height: 200px;
  width: 87.5vw;
  margin: 20px auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const UploadAnimation = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0077c2;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top-color: transparent;
    animation: rotate 0.8s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const Footer = styled.div`
  margin-top: 200px;
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
`;

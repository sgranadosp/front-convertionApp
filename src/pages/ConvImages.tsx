// src/pages/ConvImages.tsx
import React from "react";
import NavBar from "../components/NavBar";
import FileUploaderImg from "../components/FileUploaderImg";
import PrimeReactWrapper from "../PrimeReactWrapper";
import "./ConvImages.css";

const ConvImages = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div
        style={{
          paddingTop: "1rem",
        }}
      >
        <h1 className="title-text">Conversión de Imágenes</h1>
        <h5 className="subtitle-text">
          ¡Aquí puedes convertir tus imágenes a cualquier formato que puedas
          imaginar!
        </h5>
      </div>

      <div style={{ padding: "5rem" }}>
        <PrimeReactWrapper>
          <FileUploaderImg />
        </PrimeReactWrapper>
      </div>
    </>
  );
};

export default ConvImages;

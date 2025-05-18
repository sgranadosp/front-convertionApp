// src/pages/ConvImages.tsx
import React from "react";
import NavBar from "../components/NavBar";
import FileUploaderImg from "../components/FileUploaderImg";
import PrimeReactWrapper from "../PrimeReactWrapper";

const ConvImages = () => {
  return (
    <>
      <div>
        <NavBar />
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

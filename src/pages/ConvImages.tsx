import React from "react";
import NavBar from "../components/NavBar";
import FileUploaderImg from "../components/FileUploaderImg";

const ConvImages = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div style={{ padding: "5rem" }}>
        <FileUploaderImg />
      </div>
    </>
  );
};

export default ConvImages;

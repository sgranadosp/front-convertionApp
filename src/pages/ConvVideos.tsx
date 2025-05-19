import React from "react";
import { FileUpload } from "primereact/fileupload";
import NavBar from "../components/NavBar";
import PrimeReactWrapper from "../PrimeReactWrapper";
import FileUploaderVid from "../components/FileUploaderVid";

const ConvVideos = () => {
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
        <section className="hero-section">
          <h1 className="animate__animated animate__tada titulo-principal">
            Conversión de Videos
          </h1>
          <p className="animate__animated animate__backInUp subtitle-text">
            ¡Aquí puedes convertir tus videos a cualquier formato que puedas
            imaginar!
          </p>
        </section>
      </div>

      <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
        <PrimeReactWrapper>
          <FileUploaderVid />
        </PrimeReactWrapper>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer className="simple-footer">
        <div className="footer-sections">
          <div>
            <h4>EasyConv</h4>
            <ul>
              <li>Inicio</li>
              <li>Herramientas</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
          <div>
            <h4>Proyecto</h4>
            <ul>
              <li>Materia: Desarrollo Web</li>
              <li>Estudiantes: Grupo 4</li>
              <li>Universidad XYZ</li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>easyconv@correo.com</li>
              <li>+57 300 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          <p>© 2025 EasyConv</p>
        </div>
      </footer>
    </>
  );
};

export default ConvVideos;

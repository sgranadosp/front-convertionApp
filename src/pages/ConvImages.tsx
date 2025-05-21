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
      <br></br>
      <div
        style={{
          paddingTop: "1rem",
        }}
      >
        <section className="hero-section">
          <h1 className="animate__animated animate__tada titulo-principal">
            Conversión de Imágenes
          </h1>
          <p className="animate__animated animate__backInUp subtitle-text">
            ¡Aquí puedes convertir tus imágenes a cualquier formato que puedas
            imaginar!
          </p>
        </section>
      </div>

      <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
        <PrimeReactWrapper>
          <FileUploaderImg />
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

export default ConvImages;

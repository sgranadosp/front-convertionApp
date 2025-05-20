import React from "react";
import DataTableC from "../components/DataTableC";
import NavBar from "../components/NavBar";

const Perfil = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          paddingTop: "3rem",
        }}
      >
        <section className="hero-section">
          <h1 className="animate__animated animate__tada titulo-principal">
            Historial de Conversiones
          </h1>
          <p className="animate__animated animate__backInUp subtitle-text">
            ¡Aquí puedes consultar todas las conversiones que has realizado!
          </p>
        </section>
      </div>
      <div
        style={{
          padding: "5rem",
        }}
      >
        <DataTableC />
      </div>
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

export default Perfil;

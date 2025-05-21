import React from "react";
import DataTableC from "../components/DataTableC";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Historial = () => {
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
            <h4>Redes</h4>
            <ul>
              <li>¡Conoce más de nosotros en redes!</li>
              <p>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#e53e70", marginRight: "8px" }}
                />
                <a
                  href="https://www.instagram.com/easyconv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EasyConv
                </a>
              </p>
            </ul>
          </div>
          <div>
            <h4>Sobre este proyecto</h4>
            <ul>
              <li>Creado por Estudiantes</li>
              <li>Universidad El Bosque</li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>easyconv1@gmail.com</li>
              <li>+57 3125167335</li>
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

export default Historial;

import React from "react";
import LoginForm from "../components/LoginForm";
import DataNavbar from "../components/DataNavbar";
import "./Login.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogIn() {
  return (
    <>
      <div className="fondo-login">
        {/* Navbar fijo arriba */}
        <div>
          <DataNavbar />
        </div>
        {/* Contenedor del formulario que ocupa el resto de la pantalla */}
        <div>
          <LoginForm />
        </div>

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
      </div>
    </>
  );
}

export default LogIn;

/**
 * LogIn.tsx
 *
 * Componente de la vista de inicio de sesión para EasyConv.
 *
 * 📦 Funcionalidades:
 * - Renderiza el formulario de login mediante el componente `LoginForm`.
 * - Incluye una barra de navegación superior personalizada (`DataNavbar`).
 * - Muestra un pie de página con enlaces a redes sociales, contacto y preguntas frecuentes.
 *
 * 📁 Estilos:
 * - Se aplica un fondo personalizado definido en `Login.css`.
 *
 * 📱 Responsive:
 * - La estructura y los estilos permiten adaptación a distintas resoluciones de pantalla.
 *
 * 🧩 Componentes utilizados:
 * - `DataNavbar`: Barra de navegación superior (versión pública).
 * - `LoginForm`: Formulario que permite al usuario autenticarse en el sistema.
 * - `FontAwesomeIcon`: Ícono de Instagram utilizado en el footer.
 *
 * @module LogIn
 * @returns {JSX.Element} Página de inicio de sesión del proyecto EasyConv
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import DataNavbar from "../components/DataNavbar";
import "./Login.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="fondo-login">
        {/* Navbar fijo arriba */}
        <div>
          <DataNavbar />
        </div>
        {/* Contenedor del formulario */}
        <div>
          <LoginForm />
        </div>

        {/* Footer con información adicional */}
        <footer className="simple-footer">
          <div className="footer-sections">
            <div>
              <h4>Redes</h4>
              <ul>
                <li>Conoce más de nosotros en redes</li>
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
                <li onClick={() => navigate("/Questions")}>
                  Preguntas frecuentes
                </li>
              </ul>
            </div>
            <div>
              <h4>Sobre este proyecto</h4>
              <ul>
                <li>Somos 4 estudiantes creando</li>
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

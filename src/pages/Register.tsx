/**
 * Register.tsx
 *
 * Página de registro de usuarios del proyecto EasyConv.
 *
 * 📦 Funcionalidades:
 * - Muestra una barra de navegación pública (`DataNavbar`) en la parte superior.
 * - Renderiza un formulario de registro mediante el componente `RegisterForm`.
 * - Incluye un pie de página con enlaces de redes sociales, preguntas frecuentes, información del proyecto y datos de contacto.
 *
 * 🧩 Componentes utilizados:
 * - `DataNavbar`: Barra de navegación para usuarios no autenticados.
 * - `RegisterForm`: Formulario de registro de nuevos usuarios.
 * - `FontAwesomeIcon`: Ícono de Instagram importado desde FontAwesome.
 *
 * 🔗 Navegación:
 * - Usa `useNavigate` de React Router para redirigir a la página de preguntas frecuentes.
 *
 * 🎨 Estilos:
 * - Utiliza la clase `simple-footer` para el estilo del pie de página.
 *
 * 📱 Responsive:
 * - Hereda el diseño responsivo de sus componentes hijos.
 *
 * @module Register
 * @returns {JSX.Element} Página de registro de EasyConv.
 */
import React from "react";
import RegisterForm from "../components/RegisterForm";
import DataNavbar from "../components/DataNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      {/* Navbar fijo arriba */}
      <div>
        <DataNavbar />
      </div>

      {/* Contenedor del formulario de registro */}
      <div>
        <RegisterForm />
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
    </>
  );
}

export default Register;

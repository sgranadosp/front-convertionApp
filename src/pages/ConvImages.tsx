/**
 * ConvImages.tsx
 *
 * Componente principal de la sección de conversión de imágenes de la aplicación EasyConv.
 *
 * 📦 Funcionalidades:
 * - Muestra una cabecera animada con título y subtítulo.
 * - Renderiza un formulario interactivo para subir imágenes (`FileUploaderImg`).
 * - Utiliza el proveedor `PrimeReactWrapper` para encapsular los estilos de PrimeReact sin afectar otros componentes.
 * - Incluye una barra de navegación (`NavBar`) y un footer con redes, contacto y enlace a preguntas frecuentes.
 *
 * 🧩 Componentes utilizados:
 * - `NavBar`: Barra de navegación principal.
 * - `FileUploaderImg`: Componente personalizado para la carga y conversión de imágenes.
 * - `PrimeReactWrapper`: Encapsula estilos y contexto de PrimeReact.
 *
 * 🎨 Estilos:
 * - Usa clases de `ConvImages.css` y animaciones de `animate.css`.
 *
 * 📱 Responsive:
 * - El diseño está pensado para adaptarse a diferentes resoluciones mediante clases CSS y contenedores fluidos.
 *
 * 🔗 Navegación:
 * - Permite redirigir al usuario a la sección de preguntas frecuentes mediante `useNavigate()` de React Router.
 *
 * @module ConvImages
 * @returns {JSX.Element} Página de conversión de imágenes
 */
import React from "react";
import NavBar from "../components/NavBar";
import FileUploaderImg from "../components/FileUploaderImg";
import PrimeReactWrapper from "../PrimeReactWrapper";
import "./ConvImages.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ConvImages = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Navegación superior */}
      <div>
        <NavBar />
      </div>
      <br></br>
      {/* Cabecera de la página */}
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

      {/* Contenedor del uploader */}
      <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
        <PrimeReactWrapper>
          <FileUploaderImg />
        </PrimeReactWrapper>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Footer */}
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
};

export default ConvImages;

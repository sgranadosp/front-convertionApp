/**
 * ConvVideos.tsx
 *
 * Componente principal de la sección de conversión de videos de la aplicación EasyConv.
 *
 * 📦 Funcionalidades:
 * - Presenta un encabezado animado con título y descripción.
 * - Renderiza un formulario de carga y conversión de videos mediante el componente `FileUploaderVid`.
 * - Usa el `PrimeReactWrapper` para aislar los estilos de PrimeReact, evitando conflictos con otros componentes.
 * - Incluye una barra de navegación (`NavBar`) y un pie de página informativo con enlaces a redes y contacto.
 *
 * 🧩 Componentes utilizados:
 * - `NavBar`: Barra de navegación superior.
 * - `FileUploaderVid`: Componente de carga y procesamiento de videos.
 * - `PrimeReactWrapper`: Encapsula el contexto de PrimeReact para estilos y funcionalidades.
 *
 * 📱 Responsive:
 * - El diseño es adaptable a diferentes resoluciones gracias al uso de clases CSS y contenedores con padding.
 *
 * 🔗 Navegación:
 * - Integra navegación dinámica usando `useNavigate()` de React Router para redirigir a la sección de preguntas frecuentes.
 *
 * @module ConvVideos
 * @returns {JSX.Element} Página de conversión de videos
 */
import React from "react";
import NavBar from "../components/NavBar";
import PrimeReactWrapper from "../PrimeReactWrapper";
import FileUploaderVid from "../components/FileUploaderVid";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ConvVideos = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Barra de navegación */}
      <div>
        <NavBar />
      </div>
      {/* Sección principal con título y descripción */}
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

      {/* Contenedor del uploader */}
      <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
        <PrimeReactWrapper>
          <FileUploaderVid />
        </PrimeReactWrapper>
      </div>

      {/* Espaciado */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Pie de página con redes y contacto */}
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

export default ConvVideos;

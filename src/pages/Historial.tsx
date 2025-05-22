/**
 * Historial.tsx
 *
 * Componente principal para visualizar el historial de conversiones realizadas por el usuario
 * en la plataforma EasyConv.
 *
 * 📦 Funcionalidades:
 * - Muestra un encabezado animado con título y descripción del historial.
 * - Renderiza la tabla de historial mediante el componente `DataTableC`, que contiene las conversiones previas.
 * - Incluye barra de navegación (`NavBar`) y un pie de página con enlaces de contacto y redes sociales.
 *
 * 🧩 Componentes utilizados:
 * - `NavBar`: Barra de navegación superior reutilizable.
 * - `DataTableC`: Tabla personalizada que muestra las conversiones realizadas por el usuario.
 *
 * 🔗 Navegación:
 * - Usa `useNavigate()` de `react-router-dom` para redirigir a la página de preguntas frecuentes al hacer clic.
 *
 * 📱 Responsive:
 * - Utiliza estilos en línea y clases CSS externas para mantener compatibilidad con diferentes dispositivos.
 *
 * @module Historial
 * @returns {JSX.Element} Página con el historial de conversiones del usuario
 */
import React from "react";
import DataTableC from "../components/DataTableC";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Historial = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Barra de navegación */}
      <div>
        <NavBar />
      </div>
      {/* Encabezado de la sección */}
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
      {/* Contenedor de la tabla de historial */}
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

      {/* Pie de página con enlaces y contacto */}
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

export default Historial;

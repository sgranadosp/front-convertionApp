import React from "react";
import "animate.css";
import "./AfterLoginForm.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImage,
  faFilePdf,
  faFileVideo,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

/**
 * Props que recibe el componente ToolCard.
 */
interface ToolCardProps {
  /** Título principal de la tarjeta (ej. "De MP3 a MP4") */
  title: string;

  /** Subtítulo descriptivo de la función de la herramienta */
  subtitle: string;

  /** Ícono que se mostrará en la tarjeta (FontAwesome) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;

  /** Clase CSS adicional para estilizar el ícono */
  iconClass?: string;

  /** Función que se ejecuta al hacer clic en el botón */
  onClick?: () => void;
}

/**
 * Componente reutilizable que representa una tarjeta con una herramienta de conversión.
 *
 * @param props - Propiedades de la tarjeta, incluyendo título, ícono y acción al hacer clic
 * @returns JSX.Element
 */
export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  subtitle,
  icon,
  iconClass,
  onClick,
}) => {
  return (
    <motion.div
      className="tool-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        backgroundColor: "#f3e5f5",
        scale: 1.03,
        boxShadow: "0 8px 16px hsla(258, 87.90%, 54.50%, 0.15)",
        borderColor: "#a51bcf",
      }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="card-inner">
        <div className={`card-icon ${iconClass}`}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <button className="primary-button" onClick={onClick}>
          Usar herramienta
        </button>
      </div>
    </motion.div>
  );
};

/**
 * Componente principal mostrado después del registro de un usuario.
 * Ofrece herramientas de conversión de formato y muestra información del equipo.
 *
 * @returns JSX.Element
 */
const AfterLoginForm = () => {
  const navigate = useNavigate();

  // Lista de herramientas de conversión de video
  const toolsUp = [
    {
      title: "De MP3 a MP4",
      subtitle: "Convierte tu archivo MP3 a MP4",
      icon: faFileVideo,
      iconClass: "icon-blue",
    },
    {
      title: "De MP4 a MPG",
      subtitle: "Convierte tu video MP4 a MPG",
      icon: faFileVideo,
      iconClass: "icon-orange",
    },
    {
      title: "De MOV a MP4",
      subtitle: "Convierte tu video MOV a MP4",
      icon: faFileVideo,
      iconClass: "icon-purple",
    },
  ];

  // Lista de herramientas de conversión de imagen
  const toolsDown = [
    {
      title: "De PNG a JPG",
      subtitle: "Convierte tu imagen PNG a JPG",
      icon: faFileImage,
      iconClass: "icon-purple",
    },
    {
      title: "De JPEG a PNG",
      subtitle: "Convierte tu imagen JPEG a PNG",
      icon: faFileImage,
      iconClass: "icon-blue",
    },
    {
      title: "De JPG a PDF",
      subtitle: "Convierte tu imagen JPG a PDF",
      icon: faFilePdf,
      iconClass: "icon-orange",
    },
  ];

  return (
    <>
      {/* Sección de bienvenida */}
      <div className="home-container">
        <section className="hero-section">
          <h1 className="animate__animated animate__tada titulo-principal">
            ¡Gracias por registrarte!
          </h1>
          <p className="subtitle">
            Disfruta sin límites de todos nuestros servicios de conversión de
            formato de imágenes y videos. ¡El límite lo pones tú!
          </p>
        </section>

        {/* Herramientas de video */}
        <div className="tools-grid">
          {toolsUp.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              subtitle={tool.subtitle}
              icon={tool.icon}
              iconClass={tool.iconClass}
              onClick={() => navigate("/vidConv")}
            />
          ))}
        </div>

        {/* Herramientas de imagen */}
        <div className="tools-grid">
          {toolsDown.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              subtitle={tool.subtitle}
              icon={tool.icon}
              iconClass={tool.iconClass}
              onClick={() => navigate("/imgConv")}
            />
          ))}
        </div>
      </div>

      {/* Botones extra de navegación */}
      <div className="more-tools-container animate__animated animate__shakeX">
        <button
          className="secondary-button faarrowpointer"
          onClick={() => navigate("/imgConv")}
        >
          Conversión de imágenes <FontAwesomeIcon icon={faArrowPointer} />
        </button>
        <br />
        <br />
        <button
          className="secondary-button faarrowpointer"
          onClick={() => navigate("/vidConv")}
        >
          Conversión de videos <FontAwesomeIcon icon={faArrowPointer} />
        </button>
      </div>

      <br />
      <br />

      {/* Sección del equipo */}
      <section className="nuestro-equipo">
        <h2>Nuestro Equipo</h2>
        <p>
          Somos pocos, pero apasionados por crear soluciones útiles que ayuden a
          los demás. Esta app fue desarrollada con dedicación por estudiantes de
          Ingeniería de Sistemas.
        </p>

        <div className="equipo-grid">
          <div className="miembro">
            <img src="perfil.png" alt="Integrante 1" className="avatar" />
            <h3>Santiago Granados</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="miembro">
            <img src="perfil.png" alt="Integrante 2" className="avatar" />
            <h3>Camila Castro</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="miembro">
            <img src="perfil.png" alt="Integrante 3" className="avatar" />
            <h3>Laura Tao</h3>
            <p>Backend Developer</p>
          </div>
          <div className="miembro">
            <img src="perfil.png" alt="Integrante 4" className="avatar" />
            <h3>Sebastián Pérez</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default AfterLoginForm;

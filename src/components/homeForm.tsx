// Importaciones principales de React y librerías de estilo/animación
import React from "react";
import "./homeForm.css"; // Estilos específicos para este componente
import "animate.css"; // Librería de animaciones CSS
import { motion } from "framer-motion"; // Animaciones declarativas para React
// Navegación entre rutas (React Router)
import { useNavigate } from "react-router-dom";
// Íconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImage,
  faFilePdf,
  faFileVideo,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Tipado de propiedades que recibirá el componente ToolCard
interface ToolCardProps {
  title: string; // Título de la herramienta
  subtitle: string; // Descripción corta
  icon: any; // Icono de FontAwesome
  iconClass?: string; // Clase CSS para el icono (color)
  onClick?: () => void; // Acción al hacer clic en "Usar herramienta"
}

/**
 * Componente reutilizable que representa una tarjeta de herramienta
 * con animación y botón para redireccionar al uso de la herramienta.
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
 * Componente principal de la página de inicio de EasyConv.
 * Contiene la bienvenida, herramientas disponibles, historia del proyecto, equipo y footer.
 */
const HomeForm = () => {
  const navigate = useNavigate(); //Hook para redireccionamiento
  // Lista de herramientas disponibles que se renderizan como ToolCard
  const tools = [
    {
      title: "De PNG a JPG",
      subtitle: "Convierte tu imagen PNG a JPG",
      icon: faFileImage,
      iconClass: "icon-blue",
    },
    {
      title: "De MP3 a MP4",
      subtitle: "Convierte tu archivo MP3 a MP4",
      icon: faFileVideo,
      iconClass: "icon-orange",
    },
    {
      title: "De JPG a PDF",
      subtitle: "Convierte tu imagen JPG a PDF",
      icon: faFilePdf,
      iconClass: "icon-purple",
    },
  ];

  return (
    <>
      {/* Sección principal de bienvenida */}
      <div className="home-container">
        <section className="hero-section">
          <h1 className="animate__animated animate__tada titulo-principal">
            ¡Bienvenido a EasyConv!
          </h1>
          <p className="subtitle">
            Tu plataforma online para convertir imágenes y videos sin enredos.
            Pasa de JPG a PDF, de PNG a JPG o de MP4 a otros formatos con
            herramientas rápidas, intuitivas y 100% gratuitas.
          </p>
        </section>

        {/* Grid de herramientas (tarjetas) */}
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              subtitle={tool.subtitle}
              icon={tool.icon}
              iconClass={tool.iconClass}
              onClick={() => navigate("/LogIn")}
            />
          ))}
        </div>
      </div>
      {/* Botón de acceso a más herramientas */}
      <div className="more-tools-container animate__animated animate__shakeX">
        <button
          className="secondary-button faarrowpointer"
          onClick={() => navigate("/LogIn")}
        >
          Click para más herramientas <FontAwesomeIcon icon={faArrowPointer} />
        </button>
      </div>
      {/* Sección "Nuestra Historia" */}
      <div className="historia">
        <h2 className="titulo-historia">Nuestra Historia</h2>
        <p>
          Somos cuatro estudiantes de tercer semestre de Ingeniería de Sistemas,
          apasionados por la tecnología y el desarrollo de software. Durante el
          proceso de creación de esta aplicación, dos de nosotros nos enfocamos
          en el desarrollo del BackEnd, asegurando que toda la lógica y
          funcionamiento interno de la página sean robustos y eficientes,
          mientras que los otros dos nos encargamos del desarrollo del FrontEnd,
          para ofrecer así, una experiencia intuitiva y amigable a los usuarios.
          La idea de esta app surgió de una necesidad personal, la cual fue:
          convertir el formato de archivos de imágen y video de manera fácil,
          rápida y completamente gratuita. Queríamos crear una herramienta
          accesible para todos, sin complicaciones ni costos adicionales.
          Además, esta experiencia nos ha permitido crecer como equipo y como
          profesionales, enfrentando retos y aprendiendo a colaborar de forma
          efectiva.
        </p>
        <p>
          Nos llena de orgullo saber que lo que hemos desarrollado no solo nos
          facilita la vida a nosotros, sino que también puede ayudar a muchas
          otras personas a resolver sus problemas de conversión de archivos de
          forma práctica. Este proyecto es el reflejo de nuestro compromiso y
          pasión por la tecnología, y estamos emocionados por seguir mejorándolo
          y expandiendo sus funcionalidades en el futuro.
        </p>
        <img
          src="LogoEasyConvMorado.png"
          alt="Logo de EasyConv"
          className="logo-principal"
        />
      </div>
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
            <img src="santiago.jpg" alt="Integrante 1" className="avatar" />
            <h3>Santiago Granados</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="miembro">
            <img src="camila.jpg" alt="Integrante 2" className="avatar" />
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

      {/* Pie de página con información adicional */}
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

// Exportación del componente principal
export default HomeForm;

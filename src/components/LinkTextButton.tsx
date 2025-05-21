// Importa React y el hook useNavigate de React Router
import React from "react";
import { useNavigate } from "react-router-dom";

// Definición de los props que acepta el componente LinkTextButton
interface LinkTextButtonProps {
  to: string; // Ruta a la que se desea navegar
  children: React.ReactNode; // Texto o contenido que se mostrará como botón
}

/**
 * Componente LinkTextButton
 *
 * Este componente actúa como un enlace estilizado en forma de texto subrayado,
 * con estilo visual de "botón clickeable" que navega a una ruta especificada
 * usando navegación programática (`useNavigate`) de React Router.
 *
 * Es útil cuando deseas que un texto funcione como un botón o enlace, sin
 * necesidad de usar un `<Link>` tradicional o un `<button>`, manteniendo un
 * diseño más fluido con el contenido.
 */
const LinkTextButton: React.FC<LinkTextButtonProps> = ({ to, children }) => {
  const navigate = useNavigate(); // Hook de navegación entre rutas

  return (
    <span
      onClick={() => navigate(to)} // Al hacer clic, redirige a la ruta especificada
      style={{
        color: "blueviolet", // Estilo llamativo y consistente
        textDecoration: "underline",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
};

// Exportación por defecto del componente para su uso en otros archivos
export default LinkTextButton;

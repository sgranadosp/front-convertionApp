/**
 * Questions.tsx
 *
 * Componente de la vista de Preguntas Frecuentes (FAQ) del proyecto EasyConv.
 *
 * 📦 Funcionalidades:
 * - Muestra una barra de navegación pública (`DataNavbar`) en la parte superior.
 * - Renderiza el componente `QuestionsForm`, que contiene las preguntas frecuentes.
 *
 * 🧩 Componentes utilizados:
 * - `DataNavbar`: Barra de navegación para usuarios no autenticados.
 * - `QuestionsForm`: Componente que incluye una lista de preguntas frecuentes y sus respuestas.
 *
 * 📱 Responsive:
 * - Hereda la responsividad de sus componentes hijos (`DataNavbar` y `QuestionsForm`).
 *
 * @module Questions
 * @returns {JSX.Element} Página de preguntas frecuentes del proyecto EasyConv.
 */
import DataNavbar from "../components/DataNavbar";
import QuestionsForm from "../components/QuestionsForm";

const Questions = () => {
  return (
    <>
      {/* Navbar sin sección de perfil */}
      <div>
        <DataNavbar />
      </div>
      {/* Contenedor del formulario de preguntas frecuentes */}
      <QuestionsForm />
    </>
  );
};

export default Questions;

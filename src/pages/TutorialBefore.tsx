// Importa React, necesario para definir componentes funcionales
import React from "react";
// Importa el componente que renderiza el formulario del tutorial
import TutorialForm from "../components/TutorialForm";
// Importa la barra de navegación personalizada que se muestra en la parte superior de la vista
import DataNavbar from "../components/DataNavbar";

// Define un componente funcional llamado `TutorialBefore`
const TutorialBefore = () => {
  return (
    <>
      {/* Renderiza la barra de navegación en la parte superior */}
      <div>
        <DataNavbar />
      </div>
      {/* Renderiza el formulario del tutorial debajo de la barra de navegación */}
      <div>
        <TutorialForm />
      </div>
    </>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default TutorialBefore;

/**
 * AfterLogIn.tsx
 *
 * Este componente representa la vista principal que se muestra
 * después de que un usuario inicia sesión exitosamente en la aplicación.
 *
 * 📦 Estructura:
 * - Muestra la barra de navegación (`NavBar`)
 * - Renderiza el contenido principal mediante el componente `AfterLoginForm`
 *
 * 🧩 Componentes utilizados:
 * - `NavBar`: componente de navegación superior.
 * - `AfterLoginForm`: componente con la funcionalidad principal disponible tras iniciar sesión.
 *
 * 🎨 Estilos:
 * - Aplica estilos desde `AfterLogin.css`.
 *
 * 🔒 Ruta protegida:
 * - Este componente debe estar dentro de una ruta protegida para garantizar
 *   que solo usuarios autenticados puedan acceder.
 *
 * @module AfterLogIn
 * @returns {JSX.Element} Vista principal del usuario autenticado
 */
import React from "react";
import AfterLoginForm from "../components/AfterLoginForm";
import NavBar from "../components/NavBar";
import "./AfterLogin.css";

const AfterLogIn = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <AfterLoginForm />
    </>
  );
};

export default AfterLogIn;

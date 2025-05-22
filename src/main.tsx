/**
 * index.tsx
 *
 * Punto de entrada principal de la aplicación React.
 *
 * Funciones principales:
 * - Importa estilos globales como Bootstrap y CSS personalizado.
 * - Crea la raíz del DOM React usando `createRoot` de React 18+.
 * - Renderiza el componente raíz <App /> dentro de un <StrictMode> para ayudar
 *   a detectar problemas potenciales en la app durante el desarrollo.
 *
 * Detalles:
 * - `document.getElementById("root")!` obtiene el elemento DOM donde se montará React.
 * - Se asegura que Bootstrap y estilos propios se carguen globalmente.
 * - El `StrictMode` no afecta producción pero ayuda en dev con warnings y comprobaciones.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"; // Importa estilos de Bootstrap globalmente
import App from "./App.tsx"; // Componente raíz principal
import "./index.css"; // Estilos globales personalizados

// Crea el root React y monta la aplicación dentro del elemento con id "root"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

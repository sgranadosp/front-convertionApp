/**
 * App.tsx
 *
 * Componente principal de la aplicación que configura el enrutamiento de las distintas páginas usando React Router.
 *
 * 📍 Rutas definidas:
 * - "/"            : Página principal (Home)
 * - "/logIn"       : Página de inicio de sesión
 * - "/Register"    : Página de registro de usuario
 * - "/vidConv"     : Página de conversión de videos
 * - "/imgConv"     : Página de conversión de imágenes
 * - "/Verification": Página para verificación de usuario (código o correo)
 * - "/Questions"   : Página de preguntas frecuentes
 * - "/afterLogin"  : Página mostrada luego de iniciar sesión exitosamente
 * - "/tutorial"    : Página con tutorial o guía de uso
 * - "/historial"   : Página con historial de conversiones realizadas
 *
 * Estructura:
 * - Usa `BrowserRouter` para el manejo de rutas.
 * - Cada ruta renderiza el componente correspondiente importado desde `/pages`.
 * - El contenedor principal tiene un padding superior de 64px para evitar solapamiento con elementos fijos (como la navbar).
 *
 * @module App
 * @returns {JSX.Element} Componente principal con rutas de la aplicación.
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Tutorial from "./pages/Tutorial";
import Home from "./pages/Home";
import Historial from "./pages/Historial";
import AfterLogIn from "./pages/AfterLogIn";
import ConvImages from "./pages/ConvImages";
import ConvVideos from "./pages/ConvVideos";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import Questions from "./pages/Questions";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/vidConv" element={<ConvVideos />} />
          <Route path="/imgConv" element={<ConvImages />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/afterLogin" element={<AfterLogIn />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Tutorial from "./pages/Tutorial";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import AfterLogIn from "./pages/AfterLogIn";
import ConvImages from "./pages/ConvImages";
import ConvVideos from "./pages/ConvVideos";

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/home" element={<Home />} /> //Esta será la landing page
          <Route
            path="/"
            element={<Home />}
          /> {/* Página principal */} //Esto va a cambiar, la landing page será
          el Home.tsx
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/vidConv" element={<ConvVideos />} />
          <Route path="/imgConv" element={<ConvImages />} />
          <Route path="/afterLogin" element={<AfterLogIn />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/perfilUsuario" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

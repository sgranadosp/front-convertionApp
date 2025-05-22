import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Tutorial from "./pages/Tutorial";
import NavBar from "./components/NavBar";
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
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
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

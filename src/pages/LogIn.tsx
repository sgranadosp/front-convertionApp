import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

function LogIn() {
  return (
    <>
      {/* Navbar fijo arriba */}
      <div>
        <NavBar />
      </div>

      {/* Contenedor del formulario que ocupa el resto de la pantalla */}
      <div>
        <LoginForm />
      </div>
    </>
  );
}

export default LogIn;

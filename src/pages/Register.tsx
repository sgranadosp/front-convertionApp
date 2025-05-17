import React from "react";
import RegisterForm from "../components/RegisterForm";
import NavBar from "../components/NavBar";

function Register() {
  return (
    <>
      {/* Navbar fijo arriba */}
      <div>
        <NavBar />
      </div>

      {/* Contenedor del formulario que ocupa el resto de la pantalla */}
      <div>
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;

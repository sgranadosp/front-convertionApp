import React from "react";
import RegisterForm from "../components/RegisterForm";
import DataNavbar from "../components/DataNavbar";

function Register() {
  return (
    <>
      {/* Navbar fijo arriba */}
      <div>
        <DataNavbar />
      </div>

      {/* Contenedor del formulario que ocupa el resto de la pantalla */}
      <div>
        <RegisterForm />
      </div>

      <footer className="simple-footer">
        <div className="footer-sections">
          <div>
            <h4>EasyConv</h4>
            <ul>
              <li>Inicio</li>
              <li>Herramientas</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
          <div>
            <h4>Proyecto</h4>
            <ul>
              <li>Materia: Desarrollo Web</li>
              <li>Estudiantes: Grupo 4</li>
              <li>Universidad XYZ</li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>easyconv@correo.com</li>
              <li>+57 300 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          <p>© 2025 EasyConv</p>
        </div>
      </footer>
    </>
  );
}

export default Register;

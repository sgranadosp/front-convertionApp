import React from "react"; // Importa React para crear el componente
import "./VerificationForm.css"; // Importa los estilos CSS específicos del componente

/**
 * Componente VerificacionCard
 *
 * Muestra una tarjeta con un mensaje de "verificación en curso",
 * útil como pantalla de carga o espera luego de acciones como registro o login.
 */
const VerificacionCard = () => {
  return (
    <div className="card-verificacion">
      <img
        src="LogoEasyConvMorado.png"
        alt="Logo de EasyConv"
        className="logo-principal"
      />
      {/* Título del mensaje de estado */}
      <h2>Verificando tu información...</h2>
      {/* Indicador de carga animado (ver su estilo en CSS) */}
      <div className="spinner"></div>
      {/* Mensaje explicativo para el usuario */}
      <p>
        Por favor espera mientras procesamos tu solicitud. Este proceso puede
        tardar unos segundos.
      </p>
    </div>
  );
};

export default VerificacionCard;

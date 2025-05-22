import React from 'react';
import './VerificationForm.css';

const VerificacionCard = () => {
  return (
    <div className="card-verificacion">
        <img 
         src="LogoEasyConvMorado.png" 
         alt="Logo de EasyConv" 
         className="logo-principal"
        />
      <h2>Verificando tu información...</h2>
      <div className="spinner"></div>
      <p>
        Por favor espera mientras procesamos tu solicitud. Este proceso puede tardar unos segundos.
      </p>
    </div>
  );
};

export default VerificacionCard;

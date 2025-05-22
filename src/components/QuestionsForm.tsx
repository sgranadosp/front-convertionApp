import React, { useState } from 'react';
 import './QuestionsForm.css';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const faqs = [
  {
    pregunta: "¿Es realmente gratuita la aplicación?",
    respuesta: "Sí, nuestra app es completamente gratuita y no tiene costos ocultos.",
  },
  {
    pregunta: "¿Qué tipos de archivos puedo convertir?",
    respuesta: "Principalmente puedes convertir imágenes y videos a diferentes formatos.",
  },
  {
    pregunta: "¿Necesito registrarme para usarla?",
    respuesta: "Si, creando tu cuenta de manera gratuita puedes disfrutar de los diferentes servicios",
  },
  {
    pregunta: "¿Hay un límite de tamaño para los archivos?",
    respuesta: "Sí, el límite para imágenes es de una mega y para videos 100.000 megas.",
  },
  {
    pregunta: "¿Cómo reporto un problema o error",
    respuesta: "Puedes escribirnos por Instagram, por correo o llamando a nuestro numero de contanto.",
  },
];

const PreguntasFrecuentes = () => {
  const [abierta, setAbierta] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <>
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${abierta === index ? 'activa' : ''}`}>
            <button className="faq-pregunta" onClick={() => toggle(index)}>
              <h5>{faq.pregunta}</h5>
              <span>{abierta === index ? '▲' : '▼'}</span>
            </button>
            <div
              className="faq-respuesta"
              style={{ maxHeight: abierta === index ? "200px" : "0px" }}
            >
              <p>{faq.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
          <footer className="simple-footer">
            <div className="footer-sections">
              <div>
                <h4>Redes</h4>
                <ul>
                  <li>Conoce más de nosotros en redes</li>
                 <p>
                  <FontAwesomeIcon icon={faInstagram} style={{ color: "#e53e70", marginRight: "8px" }} />
                  <a href="https://www.instagram.com/easyconv/" target="_blank" rel="noopener noreferrer">
                    EasyConv
                  </a>
                </p>
                </ul>
              </div>
              <div>
                <h4>Sobre este proyecto</h4>
                <ul>
                  <li>Somos 4 estudiantes creando</li>
                  <li>Universidad El Bosque</li>
                </ul>
              </div>
              <div>
                <h4>Contacto</h4>
                <ul>
                  <li>easyconv1@gmail.com</li>
                  <li>+57 3125167335</li>
                </ul>
              </div>
            </div>
            <div className="footer-copy">
              <p>© 2025 EasyConv</p>
            </div>
          </footer>
    </>
  );
};

export default PreguntasFrecuentes;

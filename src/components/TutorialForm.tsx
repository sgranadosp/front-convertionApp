import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const TutorialForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>TutorialForm</div>
      <footer className="simple-footer">
        <div className="footer-sections">
          <div>
            <h4>Redes</h4>
            <ul>
              <li>Conoce más de nosotros en redes</li>
              <p>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#e53e70", marginRight: "8px" }}
                />
                <a
                  href="https://www.instagram.com/easyconv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EasyConv
                </a>
              </p>
              <li onClick={() => navigate("/Questions")}>
                Preguntas frecuentes
              </li>
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

export default TutorialForm;

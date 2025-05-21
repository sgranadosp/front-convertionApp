import React, { useState, useEffect } from "react";
// Componentes de PrimeReact para mostrar una tabla con columnas
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

// Servicio para obtener datos de conversiones del usuario
import { convertionUserData } from "../services/historial.service";

// Estilos personalizados para la tabla
import "./DataTableC.css";

// Componente contenedor que carga los estilos necesarios de PrimeReact
import PrimeReactWrapper from "../PrimeReactWrapper";

// Definición de la interfaz para tipar los datos que se mostrarán en la tabla
interface ConvertionData {
  tipo: string;
  nombre: string;
  tipoArchivoOriginal: string;
  tipoArchivoConvertido: string;
  fechaConversion: Date;
}

const DataTableC = () => {
  // Estado local para almacenar el arreglo de conversiones
  const [convertions, setConvertions] = useState<ConvertionData[]>([]);

  // Hook useEffect para cargar los datos del backend al montar el componente
  useEffect(() => {
    // Realiza una solicitud fetch al endpoint del backend que retorna todas las conversiones
    fetch("http://localhost:8081/usuario/getall")
      .then((response) => {
        if (!response.ok) {
          // Si la respuesta no es exitosa, lanza un error
          throw new Error("Error al importar las conversiones");
        }
        return response.json(); // Convierte la respuesta en JSON
      })
      .then((data: ConvertionData[]) => setConvertions(data)) // Guarda los datos en el estado
      .catch((error) => console.error("Error:", error)); // Muestra errores en consola
  }, []); // El array vacío indica que se ejecuta una sola vez al montar

  return (
    <div className="card">
      {/* Envolvemos la tabla en PrimeReactWrapper para garantizar carga correcta de estilos */}
      <PrimeReactWrapper>
        <DataTable
          value={convertions} // Datos que se van a mostrar
          showGridlines // Muestra líneas divisorias entre filas y columnas
          responsiveLayout="scroll" // Permite desplazamiento horizontal en pantallas pequeñas
          className="custom-datatable animate__animated animate__zoomIn" // Estilo y animación
        >
          {/* Definición de columnas: se enlazan a campos del objeto ConvertionData */}
          <Column field="tipo" header="Tipo de Archivo" />
          <Column field="nombre" header="Nombre" />
          <Column field="tipoArchivoOriginal" header="Formato Original" />
          <Column field="tipoArchivoConvertido" header="Formato Nuevo" />
          <Column field="fechaConversion" header="Fecha de Conversión" />
        </DataTable>
      </PrimeReactWrapper>
    </div>
  );
};

export default DataTableC;

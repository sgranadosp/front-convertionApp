import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { convertionUserData } from "../services/historial.service";
import "./DataTableC.css";

interface ConvertionData {
  tipo: string;
  nombre: string;
  tipoArchivoOriginal: string;
  tipoArchivoConvertido: string;
  fechaConversion: "2025-05-20T01:48:30.723Z";
}

const DataTableC = () => {
  const [convertions, setConvertions] = useState<ConvertionData[]>([]);
  useEffect(() => {
    // Llama al backend
    fetch("http://localhost:8081/usuario/getall")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al importar las conversiones");
        }
        return response.json();
      })
      .then((data: ConvertionData[]) => setConvertions(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="card">
      <DataTable
        value={convertions}
        showGridlines
        responsiveLayout="scroll"
        className="custom-datatable animate__animated animate__zoomIn"
      >
        <Column field="tipo" header="Tipo de Archivo" />
        <Column field="nombre" header="Nombre" />
        <Column field="tipoArchivoOriginal" header="Formato Original" />
        <Column field="tipoArchivoConvertido" header="Formato Nuevo" />
        <Column field="fechaConversion" header="Fecha de Conversión" />
      </DataTable>
    </div>
  );
};
export default DataTableC;

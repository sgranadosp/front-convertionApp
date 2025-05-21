import React, { useRef, useState } from "react";

// Componentes de PrimeReact
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import type {
  FileUploadHeaderTemplateOptions,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
  ItemTemplateOptions,
} from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

// Componente funcional para la carga de imágenes
const FileUploaderImg: React.FC = () => {
  const toast = useRef<Toast>(null); // Referencia al componente Toast para mostrar mensajes
  const [totalSize, setTotalSize] = useState(0); // Estado para llevar el total de tamaño de archivos seleccionados
  const fileUploadRef = useRef<FileUpload>(null); // Referencia al componente FileUpload

  // Maneja el evento cuando se seleccionan archivos
  const onTemplateSelect = (e: FileUploadSelectEvent) => {
    let _totalSize = totalSize;
    let files = e.files;

    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }

    setTotalSize(_totalSize); // Actualiza el total acumulado
  };

  // Maneja el evento cuando los archivos han sido subidos exitosamente
  const onTemplateUpload = (e: FileUploadUploadEvent) => {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current?.show({
      severity: "info",
      summary: "Éxito",
      detail: "Archivo subido",
    });
  };

  // Elimina un archivo de la lista
  const onTemplateRemove = (file: File, callback: Function) => {
    setTotalSize(totalSize - file.size);
    callback(); // Llama al callback de eliminación de PrimeReact
  };

  // Limpia todos los archivos seleccionados
  const onTemplateClear = () => {
    setTotalSize(0);
    toast.current?.show({
      severity: "warn",
      summary: "Borrado",
      detail: "Archivos removidos",
    });
  };

  // Cabecera personalizada del componente FileUpload
  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000; // Valor de la barra de progreso
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          />
        </div>
      </div>
    );
  };

  // Plantilla personalizada para renderizar cada archivo cargado
  const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
    const file = inFile as File;
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={URL.createObjectURL(file)}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  // Plantilla para mostrar cuando no hay archivos cargados
  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Arrastre su imágen aquí
        </span>
      </div>
    );
  };

  // Opciones personalizadas para los botones de FileUpload
  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  return (
    <div>
      {/* Componente Toast para mostrar mensajes flotantes */}
      <Toast ref={toast} />

      {/* Tooltips para los botones de acción */}
      <Tooltip
        target=".custom-choose-btn"
        content="Seleccionar"
        position="bottom"
      />
      <Tooltip target=".custom-upload-btn" content="Subir" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Borrar" position="bottom" />

      {/* Componente FileUpload de PrimeReact con templates personalizados */}
      <FileUpload
        className="animate__animated animate__slideInUp"
        ref={fileUploadRef}
        name="demo[]"
        url="/api/upload" // URL de destino para la carga (ajustable según tu backend)
        multiple
        accept="image/*" // Solo acepta imágenes
        maxFileSize={10000000} // Límite de 10 MB
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
    </div>
  );
};

export default FileUploaderImg;

// Importación de React y hooks necesarios
import React, { useRef, useState } from "react";
// Componentes de PrimeReact necesarios para la carga de archivos y su presentación
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
// Tipos específicos para los eventos y opciones del componente FileUpload
import type {
  FileUploadHeaderTemplateOptions,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
  ItemTemplateOptions,
} from "primereact/fileupload";
// Componentes adicionales para UI
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

// Componente funcional principal para la carga de videos
const FileUploaderVid: React.FC = () => {
  const toast = useRef<Toast>(null); // Referencia al componente Toast para notificaciones
  const [totalSize, setTotalSize] = useState(0); // Estado que almacena el tamaño total de los archivos seleccionados
  const fileUploadRef = useRef<FileUpload>(null); // Referencia al componente FileUpload para acceso a sus métodos

  /**
   * Maneja el evento de selección de archivos, sumando el tamaño total
   */
  const onTemplateSelect = (e: FileUploadSelectEvent) => {
    let _totalSize = totalSize;
    let files = e.files;

    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }

    setTotalSize(_totalSize);
  };

  /**
   * Maneja el evento de subida de archivos, actualiza el estado y muestra notificación
   */
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

  /**
   * Maneja la eliminación de un archivo individual desde la lista
   */
  const onTemplateRemove = (file: File, callback: Function) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  /**
   * Maneja el evento de limpieza de todos los archivos seleccionados
   */
  const onTemplateClear = () => {
    setTotalSize(0);
    toast.current?.show({
      severity: "warn",
      summary: "Borrado",
      detail: "Archivos removidos",
    });
  };

  /**
   * Renderiza la cabecera personalizada del componente FileUpload
   */
  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000000; //Tamaño máximo de 1.000.000 MB
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
          <span>{formatedValue} / 1.000.000 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  /**
   * Renderiza cada archivo individual como un elemento con su respectivo preview y botones
   */
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

  /**
   * Template mostrado cuando no hay archivos seleccionados
   */
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
          Arrastre su video aquí
        </span>
      </div>
    );
  };

  // Configuración visual de los botones personalizados
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

  /**
   * Render principal del componente, incluye Toast, Tooltips y FileUpload con todas las plantillas
   */
  return (
    <div>
      <Toast ref={toast}></Toast>

      <Tooltip
        target=".custom-choose-btn"
        content="Seleccionar"
        position="bottom"
      />
      <Tooltip target=".custom-upload-btn" content="Subir" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Borrar" position="bottom" />

      <FileUpload
        className="animate__animated animate__slideInUp"
        ref={fileUploadRef}
        name="demo[]"
        url="/api/upload"
        multiple
        accept="video/*"
        maxFileSize={1000000000000} //Tamaño máximo de 1.000.000 MB
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

// Exportación del componente
export default FileUploaderVid;

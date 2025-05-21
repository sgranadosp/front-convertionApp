/**
 * Payload requerido para registrar datos de conversión de archivos por parte del usuario.
 */
export interface ConvertionUserPayload {
  /** Tipo de conversión (por ejemplo: imagen, video, audio) */
  tipo: string;

  /** Nombre del archivo convertido */
  nombre: string;

  /** Tipo MIME o extensión del archivo original */
  tipoArchivoOriginal: string;

  /** Tipo MIME o extensión del archivo resultante */
  tipoArchivoConvertido: string;

  /** Fecha en la que se realizó la conversión (ISO 8601) */
  fechaConversion: Date;
}

/**
 * URL base del backend para las peticiones HTTP.
 */
const BASE_URL = "http://localhost:8081";

/**
 * Envía los datos de conversión realizados por el usuario al backend.
 *
 * Esta función hace una solicitud POST al endpoint `/usuario/getall`,
 * incluyendo detalles como tipo de conversión, nombre del archivo, tipo original y convertido, etc.
 * Se agregan campos adicionales como `role`, `credentialsNonExpired` y `enabled` automáticamente.
 *
 * @param userConvertionData - Objeto con los datos de conversión del usuario
 * @returns Una promesa que se resuelve con la respuesta del servidor en formato JSON
 * @throws Lanza un error si ocurre un problema al importar los datos o si la solicitud falla
 */
export const convertionUserData = async (userConvertionData: ConvertionUserPayload) => {
  const endpoint = `${BASE_URL}/usuario/getall`;

  const payload = {
    ...userConvertionData,
    role: "user",
    credentialsNonExpired: true,
    enabled: true,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al importar sus datos a la tabla");
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error al importar sus datos a la tabla", error);
    throw error;
  }
};

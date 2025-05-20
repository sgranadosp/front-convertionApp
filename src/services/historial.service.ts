export interface ConvertionUserPayload {
  tipo: string;
  nombre: string;
  tipoArchivoOriginal: string;
  tipoArchivoConvertido: string;
  fechaConversion: "2025-05-20T01:48:30.723Z";
}

const BASE_URL = "http://localhost:8081";

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
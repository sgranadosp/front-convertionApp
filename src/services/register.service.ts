/**
 * Payload requerido para registrar un nuevo usuario.
 */
export interface RegisterUserPayload {
  /** Nombre de usuario */
  username: string;

  /** Correo electrónico del usuario */
  correo: string;

  /** Contraseña del usuario */
  password: string;
}

/**
 * URL base del backend para las peticiones HTTP.
 */
const BASE_URL = "http://localhost:8081";

/**
 * Registra un nuevo usuario en el sistema.
 *
 * Envía una solicitud POST al endpoint `/auth/register` con los datos del usuario,
 * agregando automáticamente los campos `role`, `credentialsNonExpired` y `enabled`.
 *
 * @param userData - Objeto con los datos de registro del usuario (`username`, `correo`, `password`)
 * @returns Una promesa que se resuelve con la respuesta del servidor en formato JSON.
 * @throws Lanza un error si la respuesta del servidor no es satisfactoria o si ocurre un error en la red.
 */
export const registerUser = async (userData: RegisterUserPayload) => {
  const endpoint = `${BASE_URL}/auth/register`;

  const payload = {
    ...userData,
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
      throw new Error(errorData.message || "Error al registrar usuario");
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};

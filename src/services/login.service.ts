/**
 * Payload requerido para iniciar sesión de un usuario.
 */
export interface LoginUserPayload {
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
 * Inicia sesión de un usuario en el sistema.
 *
 * Envía una solicitud POST al endpoint `/auth/login` con las credenciales del usuario,
 * agregando automáticamente los campos `role`, `credentialsNonExpired` y `enabled`.
 *
 * @param userLogData - Objeto con los datos de inicio de sesión del usuario (`correo`, `password`)
 * @returns Una promesa que se resuelve con la respuesta del servidor en formato JSON.
 * @throws Lanza un error si las credenciales son incorrectas o si ocurre un error en la red.
 */
export const loginUser = async (userLogData: LoginUserPayload) => {
  const endpoint = `${BASE_URL}/auth/login`;

  const payload = {
    ...userLogData,
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
      throw new Error(errorData.message || "Error al verificar su usuario");
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error al verificar su usuario", error);
    throw error;
  }
};

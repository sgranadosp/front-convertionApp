export interface RegisterUserPayload {
  username: string;
  correo: string;
  password: string;
}

const BASE_URL = "http://localhost:8081";

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
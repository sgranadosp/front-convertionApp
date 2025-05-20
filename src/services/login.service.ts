export interface LoginUserPayload {
  correo: string;
  password: string;
}

const BASE_URL = "http://localhost:8081";

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
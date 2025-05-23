import axios from "axios";

export const verifyCode = async (code: string) => {
  const response = await axios.post("/api/verify", { code });
  return response.data;
};

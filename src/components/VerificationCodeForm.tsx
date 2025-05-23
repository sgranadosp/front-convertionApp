import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
import "./RegisterForm.css";
import { verifyCode } from "../services/verify.service";

const VerificationCodeForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await verifyCode(data.code);
      console.log("Código verificado:", response);
    } catch (error) {
      console.error("Error en la verificación:", error);
    }
  };

  return (
    <>
      <div className="card-container">
        <Card
          title="Verificar Código"
          subTitle="Ingresa el código que recibiste"
          className="md:w-25rem custom-register-card animate__animated animate__fadeIn"
          style={{
            border: "2px solid #673AB7",
            borderRadius: "10px",
            padding: "1.5rem",
            width: "410px",
            justifyContent: "center",
          }}
        >
          <img
            src="LogoEasyConvMorado.png"
            alt="Logo de EasyConv"
            className="logo-principal"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                {...register("code")}
                id="verification-code"
                label="Código de Verificación"
                variant="outlined"
                color="secondary"
                margin="dense"
                placeholder="Ej: 123456"
              />
            </Box>
            <div className="btn-container">
              <button className="btn custom-register-card" type="submit">
                Verificar
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default VerificationCodeForm;

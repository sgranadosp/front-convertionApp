// Importa el hook `useForm` de react-hook-form para manejar formularios con validación y registro de inputs
import { useForm } from "react-hook-form";

// Importa el contenedor Box de Material UI para layout flexible
import Box from "@mui/material/Box";

// Importa un campo de texto estilizado de Material UI
import TextField from "@mui/material/TextField";

// Importa el componente Card de PrimeReact, usado para mostrar contenido en un contenedor visualmente atractivo
import { Card } from "primereact/card";

// Importa los estilos personalizados del formulario de registro/verificación
import "./RegisterForm.css";

// Importa la función de servicio que realiza la verificación del código ingresado
import { verifyCode } from "../services/verify.service";

// Define un componente funcional llamado `VerificationCodeForm`
const VerificationCodeForm = () => {
  // Inicializa el formulario y obtiene funciones necesarias (registro de campos y manejo de envío)
  const { register, handleSubmit } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (data: any) => {
    try {
      // Llama a la función de verificación del servicio con el código ingresado
      const response = await verifyCode(data.code);
      console.log("Código verificado:", response);
    } catch (error) {
      // Manejo de errores si la verificación falla
      console.error("Error en la verificación:", error);
    }
  };

  // Renderizado del componente
  return (
    <>
      {/* Contenedor principal con clase para estilos personalizados */}
      <div className="card-container">
        {/* Tarjeta visual con título y subtítulo, usando PrimeReact */}
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
          {/* Logo de la aplicación */}
          <img
            src="LogoEasyConvMorado.png"
            alt="Logo de EasyConv"
            className="logo-principal"
          />

          {/* Formulario controlado por react-hook-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Contenedor de los inputs, usando Box de Material UI para layout */}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
            >
              {/* Campo de texto para ingresar el código de verificación */}
              <TextField
                fullWidth
                {...register("code")} // Registro del campo con react-hook-form
                id="verification-code"
                label="Código de Verificación"
                variant="outlined"
                color="secondary"
                margin="dense"
                placeholder="Ej: 123456"
              />
            </Box>

            {/* Botón para enviar el formulario */}
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

// Exporta el componente para su uso en otras partes de la aplicación
export default VerificationCodeForm;

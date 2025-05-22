import { useForm, type FieldValues } from "react-hook-form"; // Hook para manejar formularios
import Box from "@mui/material/Box"; // Componente contenedor de Material UI
import TextField from "@mui/material/TextField"; // Campo de texto de Material UI
import { Card } from "primereact/card"; // Componente de tarjeta de PrimeReact
import "./RegisterForm.css"; // Estilos personalizados del formulario
import { z } from "zod"; // Librería de validación de esquemas
import { zodResolver } from "@hookform/resolvers/zod"; // Adaptador para usar zod con react-hook-form
import LinkTextButton from "./LinkTextButton"; // Componente de botón de navegación estilizado
import { registerUser } from "../services/register.service"; // Servicio que hace la llamada a la API para registrar usuario

/**
 * Define las reglas para validar los campos del formulario
 * usando Zod, como longitud mínima y formatos obligatorios.
 */
const userSchema = z.object({
  username: z.string().min(3, "El nombre debe contener al menos 3 letras"),
  correo: z.string().email("Formato de correo inválido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .refine((val) => /[A-Z]/.test(val), {
      message: "La contraseña debe incluir al menos una letra mayúscula",
    })
    .refine((val) => /\d/.test(val), {
      message: "La contraseña debe incluir al menos un número",
    })
    .refine((val) => /[^a-zA-Z0-9]/.test(val), {
      message: "La contraseña debe incluir al menos un carácter especial",
    }),
});

// Tipado derivado del esquema de validación
type FormData = z.infer<typeof userSchema>;

/**
 * Componente RegisterForm
 *
 * Renderiza un formulario de registro con validación
 * usando react-hook-form y zod.
 */
const RegisterForm = () => {
  // Inicializa useForm con zodResolver para validación automática
  const {
    register, // Función para registrar los campos
    handleSubmit, // Manejador del envío del formulario
    formState: { errors, isValid }, // Estado de errores y validez del formulario
  } = useForm<FormData>({
    resolver: zodResolver(userSchema), // Conecta zod como validador
    mode: "onSubmit", // Solo valida al enviar el formulario
  });

  /**
   * Función que se ejecuta al enviar el formulario exitosamente.
   * Llama al servicio registerUser con los datos validados.
   */
  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await registerUser({
        username: data.username,
        correo: data.correo,
        password: data.password,
      });
      console.log("Usuario registrado:", response);
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <>
      <div className="card-container">
        <Card
          title="Formulario de Registro"
          subTitle="¡Regístrate y disfruta de nuestros servicios!"
          className="md:w-25rem custom-register-card animate__animated animate__bounceIn"
          style={{
            border: "2px solid #673AB7", // púrpura, puedes cambiar el color
            borderRadius: "10px",
            padding: "1.5rem",
            width: "410px",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                }}
              >
                {/* Campo: Nombre de Usuario */}
                <TextField
                  fullWidth
                  {...register("username")}
                  id="outlined-basic"
                  label="Nombre de Usuario"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  placeholder="Digite su nombre de usuario"
                  helperText="* Este campo es obligatorio"
                />
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}

                {/* Campo: Correo Electrónico */}
                <TextField
                  fullWidth
                  {...register("correo", { required: true })}
                  id="outlined-basic"
                  label="Correo Electrónico"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  placeholder="Digite su correo electrónico"
                  helperText="* Este campo es obligatorio"
                />
                {errors.correo && (
                  <p className="text-danger">{errors.correo.message}</p>
                )}

                {/* Campo: Contraseña */}
                <TextField
                  fullWidth
                  {...register("password", { required: true })}
                  id="outlined-basic"
                  label="Contraseña"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  placeholder="Digite su contraseña"
                  helperText="* Este campo es obligatorio"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Box>
            </div>
            {/* Botón de envío */}
            <div className="btn-container">
              <button
                disabled={!isValid}
                className="btn custom-register-card"
                type="submit"
              >
                Registrarse
              </button>
            </div>
            {/* Enlace a login */}
            <p className="register-footer-text">
              ¿Ya tienes una cuenta?{" "}
              <LinkTextButton to="/logIn">Accede aquí</LinkTextButton>
            </p>
            {/* Aviso legal */}
            <p className="footer-privacy-text">
              Al crear una cuenta, aceptas las{" "}
              <LinkTextButton to="">
                {" "}
                Condiciones del Servicio y Política de Privacidad{" "}
              </LinkTextButton>{" "}
              de EasyConv
            </p>
          </form>
        </Card>
      </div>
    </>
  );
};

export default RegisterForm;

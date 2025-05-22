// Importaciones de React y librerías auxiliares
import React from "react";

import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Componentes de Material UI y PrimeReact
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
// Estilos y componentes personalizados
import "./LoginForm.css";
import LinkTextButton from "./LinkTextButton";
import { loginUser } from "../services/login.service";
import "./LoginForm.css";

/**
 * Esquema de validación con Zod para el formulario de login.
 * Se asegura de que el correo sea válido y la contraseña no esté vacía.
 */
const loginSchema = z.object({
  correo: z
    .string()
    .nonempty("El correo es obligatorio")
    .email("Correo inválido"),
  contrasenia: z.string().nonempty("La contraseña es obligatoria"),
});

// Inferencia de tipos a partir del esquema de Zod
type LoginData = z.infer<typeof loginSchema>;

/**
 * Componente LoginForm
 *
 * Renderiza un formulario de inicio de sesión con validación usando React Hook Form y Zod.
 * Estilizado con PrimeReact, Material UI y animaciones CSS.
 */
const LoginForm = () => {
  // Configuración del hook useForm con validación Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit", //Validar solo al enviar el formulario
  });

  /**
   * Función que se ejecuta al enviar el formulario.
   * Llama al servicio loginUser para autenticar al usuario.
   */
  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await loginUser({
        correo: data.correo,
        password: data.contrasenia,
      });
      console.log("Usuario verificado:", response);
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }

    // Ejemplo: (puedes adaptarlo a Axios o fetch según uses)
    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" },
    // });

    // const result = await res.json();
    // console.log(result);
  };

  return (
    <div className="card-container">
      <Card
        title="Inicio de Sesión"
        subTitle="¡Ingresa tus datos y disfruta de nuestros servicios!"
        className="md:w-25rem custom-login-card animate__animated animate__bounceIn fondo-formulario"
        style={{
          border: "2px solid #673AB7",
          borderRadius: "10px",
          padding: "1.5rem",
          width: "410px",
        }}
      >
        {/* Formulario controlado por React Hook Form */}
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
            {/* Campo para el correo electrónico */}
            <TextField
              fullWidth
              {...register("correo")}
              label="Correo Electrónico"
              variant="outlined"
              color="secondary"
              placeholder="Digite su correo"
              margin="dense"
              helperText={errors.correo?.message || "* Campo obligatorio"}
              error={!!errors.correo}
            />
            {/* Campo para la contraseña */}
            <TextField
              fullWidth
              {...register("contrasenia")}
              label="Contraseña"
              type="password"
              variant="outlined"
              color="secondary"
              placeholder="Digite su contraseña"
              margin="dense"
              helperText={errors.contrasenia?.message || "* Campo obligatorio"}
              error={!!errors.contrasenia}
            />
          </Box>

          {/* Botón para enviar el formulario */}
          <div className="btn-container">
            <button
              className="btn custom-login-card"
              type="submit"
              disabled={!isValid}
            >
              Ingresar
            </button>
          </div>

          <br />
          {/* Enlace a la página de registro usando componente personalizado */}
          <p className="register-footer-text">
            ¿No tienes una cuenta?{" "}
            <LinkTextButton to="/register">Regístrate aquí</LinkTextButton>{" "}
          </p>
        </form>
      </Card>
    </div>
  );
};

// Exporta el componente
export default LoginForm;

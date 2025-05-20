import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
import "./LoginForm.css";
import LinkTextButton from "./LinkTextButton";
import { loginUser } from "../services/login.service";

const loginSchema = z.object({
  correo: z
    .string()
    .nonempty("El correo es obligatorio")
    .email("Correo inválido"),
  contrasenia: z.string().nonempty("La contraseña es obligatoria"),
});

type LoginData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: FieldValues) => {
    // Aquí deberías hacer una petición a tu backend para validar usuario
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
        className="md:w-25rem custom-login-card animate__animated animate__rotateIn"
        style={{
          border: "2px solid #673AB7",
          borderRadius: "10px",
          padding: "1.5rem",
          width: "410px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              {...register("correo")}
              label="Correo Electrónico"
              variant="outlined"
              color="secondary"
              placeholder="Digite su correo"
              margin="dense"
              helperText={errors.correo?.message || "* Campo obligatorio"}
              error={!!errors.correo}
            />
            <TextField
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
          <p className="register-footer-text">
            ¿No tienes una cuenta?{" "}
            <LinkTextButton to="/register">Regístrate aquí</LinkTextButton>{" "}
            {/* El path debo cambiarlo a /register, el /, osea la landing, será el Homme */}
          </p>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;

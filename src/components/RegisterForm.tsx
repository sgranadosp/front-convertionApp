import { useForm, type FieldValues } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "primereact/card";
import "./RegisterForm.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LinkTextButton from "./LinkTextButton";

const userSchema = z.object({
  nombreUsuario: z.string().min(3, "El nombre debe contener al menos 3 letras"),
  correo: z.string().email("Formato de correo inválido"),
  contrasenia: z
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

type FormData = z.infer<typeof userSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <div className="card-container">
        <Card
          title="Formulario de Registro"
          subTitle="¡Regístrate y disfruta de nuestros servicios!"
          className="md:w-25rem custom-register-card"
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
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  {...register("nombreUsuario")}
                  id="outlined-basic"
                  label="Nombre de Usuario"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  placeholder="Digite su nombre de usuario"
                  helperText="* Este campo es obligatorio"
                />
                {errors.nombreUsuario && (
                  <p className="text-danger">{errors.nombreUsuario.message}</p>
                )}

                <TextField
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

                <TextField
                  {...register("contrasenia", { required: true })}
                  id="outlined-basic"
                  label="Contraseña"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  placeholder="Digite su contraseña"
                  helperText="* Este campo es obligatorio"
                />
                {errors.contrasenia && (
                  <p className="text-danger">{errors.contrasenia.message}</p>
                )}
              </Box>
            </div>
            <div className="btn-container">
              <button
                disabled={!isValid}
                className="btn custom-register-card"
                type="submit"
              >
                Registrarse
              </button>
            </div>
            <p className="register-footer-text">
              ¿Ya tienes una cuenta?{" "}
              <LinkTextButton to="/logIn">Accede aquí</LinkTextButton>
            </p>
            <p className="footer-privacy-text">
              Al crear una cuenta, aceptas las{" "}
              <LinkTextButton to="">
                {" "}
                Condiciones del Servicio y Política de Privacidad{" "}
              </LinkTextButton>{" "}
              de FreeConv
            </p>
          </form>
        </Card>
      </div>
    </>
  );
};

export default RegisterForm;

/**
 * Verification.tsx
 *
 * Página destinada a la verificación del usuario, como parte del flujo de autenticación.
 *
 * 📦 Funcionalidades:
 * - Renderiza el componente `VerificationForm`, que gestiona la lógica y la UI de verificación.
 *
 * 🧩 Componentes utilizados:
 * - `VerificationForm`: Componente que contiene el formulario y lógica para verificar un código de autenticación,
 *   correo electrónico o acción relacionada con la seguridad de la cuenta.
 *
 * 🔒 Contexto:
 * - Usualmente utilizado después del registro o cuando se requiere confirmar una acción sensible mediante código.
 *
 * @module Verification
 * @returns {JSX.Element} Página de verificación de usuario.
 */
import VerificationForm from "../components/VerificationForm";

const Verification = () => {
  return <VerificationForm />;
};

export default Verification;

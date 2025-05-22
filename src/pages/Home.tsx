/**
 * Home.tsx
 *
 * Componente principal de la página de inicio de EasyConv.
 *
 * 📦 Funcionalidades:
 * - Renderiza la barra de navegación inicial personalizada (`DataNavbar`).
 * - Muestra el formulario principal (`HomeForm`) con opciones para explorar funcionalidades o ingresar al sistema.
 *
 * 🧩 Componentes utilizados:
 * - `DataNavbar`: Barra de navegación visible en la página principal, antes del login.
 * - `HomeForm`: Formulario de bienvenida con botones de acción para login, registro u otras rutas.
 *
 * 📱 Responsive:
 * - La estructura se adapta visualmente para distintos tamaños de pantalla mediante los estilos propios de los componentes.
 *
 * @module Home
 * @returns {JSX.Element} Página principal del proyecto EasyConv
 */
import DataNavbar from "../components/DataNavbar";
import HomeForm from "../components/homeForm";

const Home = () => {
  return (
    <>
      {/* Barra de navegación superior sin sección de perfil */}
      <div>
        <DataNavbar />
      </div>
      {/* Contenido principal: formulario de inicio */}
      <HomeForm />
    </>
  );
};

export default Home;

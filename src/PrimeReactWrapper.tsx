/**
 * PrimeReactWrapper.tsx
 *
 * Componente envoltorio que carga dinámicamente los estilos CSS de PrimeReact solo cuando
 * el componente se monta, evitando cargar estos estilos globalmente en toda la aplicación.
 *
 * Esto es útil para evitar conflictos de estilos o cargas innecesarias cuando solo ciertas
 * partes de la app usan PrimeReact.
 *
 * Funcionamiento:
 * - Usa estado local `ready` para controlar si los estilos ya fueron cargados.
 * - En el efecto `useEffect` hace importaciones dinámicas (lazy-load) de los archivos CSS de PrimeReact.
 * - Una vez cargados los estilos, cambia `ready` a true para renderizar los hijos (`children`).
 * - Mientras no estén listos los estilos, no renderiza nada (`null`).
 *
 * Props:
 * - children: React.ReactNode — Elementos React que serán renderizados una vez los estilos estén listos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos hijos a renderizar.
 * @returns {JSX.Element | null} Renderiza los hijos solo si los estilos están cargados.
 */
import React, { useEffect, useState } from "react";

// Este wrapper carga estilos de PrimeReact solo cuando se renderiza
const PrimeReactWrapper = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Importación dinámica de estilos solo en este contexto
    Promise.all([
      import("primereact/resources/themes/lara-light-blue/theme.css"),
      import("primereact/resources/primereact.min.css"),
      import("primeicons/primeicons.css"),
      import("primeflex/primeflex.css"),
    ]).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return <>{children}</>;
};

export default PrimeReactWrapper;

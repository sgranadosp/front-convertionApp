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

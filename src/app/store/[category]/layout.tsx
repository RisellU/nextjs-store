import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        //importante que el layout retorne el children que es el contenido de la página
        <main>
          <nav>Navegación de las categorias</nav>
          {children}
        </main>
    )
}
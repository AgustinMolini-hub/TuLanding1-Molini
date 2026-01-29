import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./components/NotFound"; // nuevo componente para 404
import Footer from "./components/Footer";     // opcional, para cierre visual

function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación siempre visible */}
      <NavBar />

      {/* Definición de rutas */}
      <Routes>
        {/* Página principal con saludo */}
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenido a Nouveau Parfum" />}
        />

        {/* Página de categoría: filtra productos por categoryId */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {/* Página de detalle: muestra un producto por id */}
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        {/* Página 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      {/* Footer global (opcional) */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      {/* Contenido principal envuelto en <main> */}
      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a Nouveau Parfum" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
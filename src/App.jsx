import React from "react";
import { Routes, Route } from "react-router-dom";

// Contexto
import { CartProvider } from "./context/CartContext";

// Layout
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";

// Home
import HomeIntro from "./components/home/HomeIntro";

// Catálogo
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

// Carrito
import Cart from "./components/cart/Cart";

// Checkout
import Checkout from "./components/checkout/Checkout";

// 🎨 Importa primero las variables y luego los estilos globales
import "./variables.css";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <main>
        <Routes>
          {/* Inicio con introducción */}
          <Route path="/" element={<HomeIntro />} />

          {/* Catálogo completo (sin categoría) */}
          <Route path="/category" element={<ItemListContainer />} />

          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Carrito */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
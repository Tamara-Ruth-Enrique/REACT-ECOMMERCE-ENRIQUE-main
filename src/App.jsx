import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Footer from "./components/layouts/footer/Footer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Productos from "./components/pages/productos/Productos";
import Contact from "./components/pages/contacto/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:productos"} element={<ItemListContainer />} />

        <Route path={"/carrito"} element={<CartContainer />} />
        <Route path={"productDetail/:id"} element={<ItemDetailContainer />} />
        <Route path={"/contacto"} element={<Contact />} />
        <Route path={"/productos"} element={<Productos />} />

        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

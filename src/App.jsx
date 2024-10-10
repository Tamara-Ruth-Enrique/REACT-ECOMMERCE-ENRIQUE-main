import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Footer from "./components/layouts/footer/Footer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/id" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CartContainer />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

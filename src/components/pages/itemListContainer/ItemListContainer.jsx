import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { productos } = useParams();

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === productos
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(productos ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, [productos]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

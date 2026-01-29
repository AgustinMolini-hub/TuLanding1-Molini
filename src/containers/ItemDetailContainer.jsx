import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((res) => {
      setProduct(res);
    });
  }, [itemId]);

  return (
    <div className="container mt-4">
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <h2>Cargando producto...</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
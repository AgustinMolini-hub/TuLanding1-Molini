import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <div className="container mt-4">
      {loading ? (
        <h2>Cargando producto...</h2>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <h2>Producto no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
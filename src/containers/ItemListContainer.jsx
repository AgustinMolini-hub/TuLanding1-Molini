import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/products";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      if (categoryId) {
        const filtered = res.filter(
          (p) => p.category.toLowerCase() === categoryId.toLowerCase()
        );
        setProducts(filtered);
      } else {
        setProducts(res);
      }
    });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      {greeting && <h2 className="mb-4">{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
import ItemCount from "./ItemCount";

const formatPrice = (price) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(price);

function ItemDetail({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Categoría: {product.category}</p>
        <p><strong>Precio:</strong> {formatPrice(product.price)}</p>
        <ItemCount />
      </div>
    </div>
  );
}

export default ItemDetail;
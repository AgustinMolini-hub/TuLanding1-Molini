import ItemCount from "./ItemCount";

const formatPrice = (price) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);

function ItemDetail({ product }) {
  if (!product) {
    return <p className="text-center text-purple fw-bold">Producto no disponible</p>;
  }

  return (
    <div className="container my-5">
      <div className="card card-lila shadow-lg">
        <div className="card-body text-center">
          <h2 className="card-title text-purple fw-bold mb-3">{product.name}</h2>
          <p className="card-text mb-3">{product.description}</p>
          <p className="card-text mb-2">
            <strong className="text-purple">Categoría:</strong> {product.category}
          </p>
          <p className="card-text fw-bold text-purple mb-4">
            Precio: {formatPrice(product.price)}
          </p>

          {/* Selector de cantidad */}
          <ItemCount />

          {/* Botón de acción */}
          <button className="btn btn-primary-nouveau mt-4">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
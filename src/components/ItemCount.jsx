import { useState } from "react";

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div className="d-flex align-items-center mt-3">
      {/* Botón disminuir */}
      <button onClick={decrease} className="btn btn-secondary-nouveau">
        -
      </button>

      {/* Contador */}
      <span className="mx-3 fw-bold text-purple">{count}</span>

      {/* Botón aumentar */}
      <button onClick={increase} className="btn btn-secondary-nouveau">
        +
      </button>

      {/* Botón agregar */}
      <button onClick={handleAdd} className="btn btn-primary-nouveau ms-4">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
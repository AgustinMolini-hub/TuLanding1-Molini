import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <Link to={`/item/${product.id}`} className="btn btn-dark">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
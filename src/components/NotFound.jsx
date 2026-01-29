import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center mt-5">
    <h2 className="mb-3">404 - Página no encontrada</h2>
    <p className="mb-4">La ruta que intentaste acceder no existe.</p>
    <Link to="/" className="btn btn-dark">
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;
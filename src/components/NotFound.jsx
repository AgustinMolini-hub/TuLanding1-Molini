import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center mt-5">
    <h2>404 - Página no encontrada</h2>
    <p>La ruta que intentaste acceder no existe.</p>
    <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
  </div>
);

export default NotFound;
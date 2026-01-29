const Footer = () => {
  return (
    <footer className="custom-footer text-center py-4">
      <div className="container">
        {/* Nombre del proyecto */}
        <h5 className="text-white fw-bold mb-3">Nouveau Parfum</h5>

        {/* Redes sociales */}
        <div className="mb-3">
          <a href="https://instagram.com" className="footer-link text-white me-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" className="footer-link text-white me-3">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="footer-link text-white">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <p className="text-white mb-0">
          © {new Date().getFullYear()} Nouveau Parfum – Proyecto académico desarrollado por Agustín con React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
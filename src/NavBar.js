import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Redragon
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Inicio
            </a>

            <a className="nav-link" href="#">
              Tienda
            </a>

            <a className="nav-link" href="#">
              Contacto
            </a>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

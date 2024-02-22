import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/argileLogo.png";
import "./Footer.css";
// import '@fortawesome/fontawesome-free/css/all.css'; // import FontAwesome CSS

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center border-top">
      <div className="container p-4">
        <section className="logo-home col-sm d-flex align-items-center justify-content-center mb-4">
          <Link
            className="navbar-brand nav-link d-flex align-items-center justify-content-center"
            to="/"
          >
            <img
              src={LogoImage}
              width="250"
              // height="30"
              alt=""
            />
          </Link>
        </section>

        <section className="mb-4 icons">
          <Link
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            to="*"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            to="*"
            role="button"
          >
            <i className="bi bi-envelope"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            to="*"
            role="button"
          >
            <i className="bi bi-instagram bi-3x"></i>
          </Link>
        </section>

        <section className="d-flex align-items-center justify-content-center">
          <div className="left-nav col-sm d-flex align-items-center justify-content-around gap-3 m-0">
            <Link className="navbar-brand nav-link " to="/ourStory">
              Our Story
            </Link>
            <Link className="navbar-brand nav-link" to="/collection">
              Products
            </Link>
            <Link className="navbar-brand nav-link" to="/findUs">
              Find Us
            </Link>
            <Link className="navbar-brand nav-link" to="/blogs">
              Blog
            </Link>
            <Link className="navbar-brand nav-link " to="/contactUs">
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link className="text-reset fw-bold mx-2" to="https://mdbootstrap.com/">
          MDBootstrap.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

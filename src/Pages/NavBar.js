import { Link } from "react-router-dom";
import Search from "./Search";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const changeBG = useSelector((state) => state.bgColor.color);
  console.log(changeBG);

  return (
    <nav className={`navbar navbar-expand-lg  ${changeBG === "dark"? "navbar-dark bg-dark":"navbar-light bg-light"}`} >
      <div className="container ">
        <Link className="navbar-brand">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/favorit" >
                Favorit
              </Link>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
export default Nav;

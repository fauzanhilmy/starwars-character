import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacters } from "../store/action";
import Logo from "../assets/logo.png"


function Navbar(props) {
  const dispatch = useDispatch();
  

  const search = useSelector((state) => {
    return state.searchReducer.search;
  });
  const handleChange = (event) => {
    dispatch(searchCharacters(event.target.value));

    // console.log(event.target.value);
  };
  //   console.log(search);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{width: "140px", height: "60px"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films">
                  Films
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={handleChange}
                className="form-control me-2"
                type="search"
                placeholder="Search Characters"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

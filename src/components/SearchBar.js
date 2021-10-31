import React, { useState } from "react";
import "./Searchbar.css";

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };
  return (
    <div className="container mt-5   ">
      <div className="row ">
        <form onSubmit={onSubmit}>
          <div className=" d-flex justify-content-end col">
            <button
              type="button"
              className=" exit btn btn-danger shadow-none mb-6 "
              aria-expanded="false"
              onClick={() => handleLogout()}
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>

          <h1
            className="title mb-3  text-center"
            style={{ fontFamily: "Quantico, sans-serif" }}
          >
            Find Your Heroes
          </h1>
          <div className="col-sm-11">
            <div className="input-group  text-center">
              <div className="input-group-text col">
                <button
                  className="  btn btn-utline-secondary shadow-none"
                  type="submit"
                >
                  <i
                    className=" lupa fab fa-searchengin "
                    style={{ fontSize: "35px" }}
                  ></i>
                </button>

                <input
                  type="search"
                  aria-label="Search"
                  className="form-control  form-control-lg shadow-none"
                  id="colFormLabelLg"
                  placeholder="Hero Finder"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

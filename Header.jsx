import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="https://htsg-store-gl.heytapimg.com/shop/202107/29/1-M00-00-35-CgGRkWECWOGAcsivAAAdpHTXhDU918.svg"
            className="img-fluid h-100 w-100"
            alt="Oppo Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mt-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link" style={{ color: "black" }}>
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/phone" className="nav-link" style={{ color: "black" }}>
                Phone{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/audio" className="nav-link" style={{ color: "black" }}>
                Audio{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tablet"
                className="nav-link"
                style={{ color: "black" }}
              >
                Tablet{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/wearables"
                className="nav-link"
                style={{ color: "black" }}
              >
                Wearables{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/accessories"
                className="nav-link"
                style={{ color: "black" }}
              >
                Accessories{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "black" }}>
                About OPPO{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/coloros"
                className="nav-link"
                style={{ color: "black" }}
              >
                ColorOS{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/storeLocator"
                className="nav-link"
                style={{ color: "black" }}
              >
                Store Locator{" "}
              </Link>
            </li>
          </ul>
          <form className="d-flex position-relative">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search by product"
              style={{
                borderRadius: "50px",
                padding: "10px 20px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{
                borderRadius: "50px",
                padding: "10px 20px",
                marginLeft: "-50px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
              }}
            >
              Search
            </button>
          </form>

          <div className="d-flex">
            <Link to="/login">
              <i
                className="far fa-user mx-3"
                style={{ color: "black", fontSize: "20px" }}
              ></i>
            </Link>
            <i
              className="fas fa-shopping-bag"
              style={{ color: "black", fontSize: "20px" }}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action"; 
import BackToTopButton from '../HtAf/BackToTopButton';

export default function Accessories() {
  const [accessories, setAccessories] = useState([]);
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://localhost:3000/Accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data));
  }, []);

  const handleImageClick = (accessoriesItem) => {
    dispatch(myAction(accessoriesItem)); 
    navigate("/cart"); 
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-center">Latest Mobile Accessories</h3>
        <p className="text-center" style={{ color: "gray" }}>
          Explore the latest Mobile Accessories from OPPO India.
        </p>
        {accessories.map((accessories) => (
          <div key={accessories.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={accessories.image}
                className="card-img-top"
                alt={accessories.name}
                onClick={() => handleImageClick(accessories)} 
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{accessories.name}</h5>
                {/* <p className="card-text text-justify">{accessories.description}</p> */}
                <p className="card-text text-muted">
                  <span className="text-dark">₹{accessories.price}</span>{" "}
                  <del>₹{accessories.originalPrice}</del>
                </p>

                <div className="d-flex justify-content-between">
                  <Link
                    to={`/accessories/${accessories.id}`}
                    className="btn btn-link text-dark"
                  >
                    Learn more
                  </Link>
                  <Link
                    to={`/accessories/${accessories.id}`}
                    className="btn btn-dark"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BackToTopButton />
    </div>
  );
}

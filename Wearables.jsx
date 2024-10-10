import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux"; 
import { myAction } from "../Redux/Action";
import BackToTopButton from "../HtAf/BackToTopButton";

export default function Wearables() {
  const [wearables, setWearables] = useState([]);
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  useEffect(() => {
    fetch("http://localhost:3000/Wearables")
      .then((response) => response.json())
      .then((data) => setWearables(data));
  }, []);

  const handleImageClick = (wearablesItem) => {
    dispatch(myAction(wearablesItem)); 
    navigate("/cart");
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-center">Latest Wearables</h3>
        <p className="text-center" style={{ color: "gray" }}>
          Explore the latest Wearables from OPPO India.
        </p>
        {wearables.map((wearables) => (
          <div key={wearables.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={wearables.image}
                className="card-img-top"
                alt={wearables.name}
                onClick={() => handleImageClick(wearables)} 
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{wearables.name}</h5>
                <p className="card-text">{wearables.description}</p>
                <p className="card-text text-muted">
                  <span className="text-dark">₹{wearables.price}</span>{" "}
                  <del>₹{wearables.originalPrice}</del>
                </p>

                <div className="d-flex justify-content-between">
                  <Link to={`/wearables/${wearables.id}`} className="btn btn-link text-dark">
                    Learn more
                  </Link>
                  <Link to={`/wearables/${wearables.id}`} className="btn btn-dark">
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

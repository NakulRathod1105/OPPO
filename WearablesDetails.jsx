import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";

export default function WearablesDetails() {
  const { id } = useParams();
  const [wearables, setWearables] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/Wearables/${id}`)
      .then((response) => response.json())
      .then((data) => setWearables(data))
      .catch((error) => console.error("Error fetching audio data:", error));
  }, [id]);

  if (!wearables) {
    return <div>Loading...</div>;
  }

  function cart() {
    dispatch(myAction(wearables));
    navigate("/cart");
  }

  return (
    <div className="container-fluid p-2">
      <div className="row mx-0 p-0">
        <div className="col-md-6 col-sm-12">
          <img
            src={wearables.image}
            className="img-fluid phone-image"
            alt={wearables.name}
          />
        </div>

        <div className="col-md-6 col-sm-12 mt-4 mt-md-0">
          <p className="text-success fs-5">One-day delivery available</p>
          <h2 className="phone-title mb-3">{wearables.name}</h2>
          <button className="btn btn-primary rounded-5 p-2 mb-3">
            Point Benefits
          </button>
          <p className="phone-price fs-3 mb-3">
            <span className="current-price">₹{wearables.price}</span>
            <del className="original-price ms-2 text-secondary">
              ₹{wearables.originalPrice}
            </del>{" "}
            (incl. of all taxes)
          </p>
          <p className="phone-description fs-4 mb-4">{wearables.description}</p>

          <button className="btn btn-dark btn-lg" onClick={cart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

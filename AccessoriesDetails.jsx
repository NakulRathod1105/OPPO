import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";

export default function AccessoriesDetails() {
  const { id } = useParams();
  const [accessories, setAccessories] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/Accessories/${id}`)
      .then((response) => response.json())
      .then((data) => setAccessories(data))
      .catch((error) => console.error("Error fetching audio data:", error));
  }, [id]);

  if (!accessories) {
    return <div>Loading...</div>;
  }

  function cart() {
    dispatch(myAction(accessories));
    navigate("/cart");
  }

  return (
    <div className="container-fluid p-2">
      <div className="row mx-0 p-0">
        <div className="col-md-6 col-sm-12">
          <img
            src={accessories.image}
            className="img-fluid phone-image"
            alt={accessories.name}
          />
        </div>

        <div className="col-md-6 col-sm-12 mt-4 mt-md-0">
          <p className="text-success fs-5">One-day delivery available</p>
          <h2 className="phone-title mb-3">{accessories.name}</h2>
          <button className="btn btn-primary rounded-5 p-2 mb-3">
            Point Benefits
          </button>
          <p className="phone-price fs-3 mb-3">
            <span className="current-price">₹{accessories.price}</span>
            <del className="original-price ms-2 text-secondary">
              ₹{accessories.originalPrice}
            </del>{" "}
            (incl. of all taxes)
          </p>
          <p className="phone-description fs-4 mb-4">{accessories.description}</p>
          <p className="phone-offer fs-5 mb-3 text-danger">
            Offer: {accessories.offer}
          </p>

          <button className="btn btn-dark btn-lg" onClick={cart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

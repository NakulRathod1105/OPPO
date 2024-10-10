import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";
import "./PhoneDetails.css";

export default function PhoneDetails() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/Phones/${id}`)
      .then((response) => response.json())
      .then((data) => setPhone(data))
      .catch((error) => console.error("Error fetching phone data:", error));
  }, [id]);

  if (!phone) {
    return <div className="loading">Loading...</div>;
  }

  function cart() {
    dispatch(myAction(phone));
    navigate("/cart");
  }

  return (
    <div className="container phone-details p-4">
      <div className="row">
  
        <div className="col-md-6 col-sm-12">
          <div className="phone-image-container">
            <img
              src={phone.image}
              className="img-fluid phone-image"
              alt={phone.name}
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mt-4 mt-md-0">
          <p className="text-success fs-5">One-day delivery available</p>
          <h2 className="phone-title mb-3">{phone.name}</h2>
          <button className="btn btn-primary rounded-5 p-2 mb-3">
            Point Benefits
          </button>
          <p className="phone-price fs-3 mb-3">
            <span className="current-price">₹{phone.price}</span>
            <del className="original-price ms-2 text-secondary">
              ₹{phone.originalPrice}
            </del>{" "}
            (incl. of all taxes)
          </p>
          <p className="phone-offer fs-5 mb-3 text-danger">
            Offer: {phone.offer}
          </p>
          <p className="phone-description fs-4 mb-4">{phone.description}</p>

          
          <div className="specs-section mb-4">
            <ul className="list-unstyled fs-5">
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-camera fs-4 me-2"></i> Radiant Halo Light
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="far fa-star fs-4 me-2"></i> AI Ultra-Clear Imaging
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-users fs-4 me-2"></i> 32MP Ultra-Clear Selfie Camera
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-battery-half fs-4 me-2"></i> 5000mAh Large Battery & 45W SUPERVOOC Flash Charge
              </li>
            </ul>
          </div>

          <button className="btn btn-dark btn-lg add-to-cart-button" onClick={cart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

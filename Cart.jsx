import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "./Redux/Action";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container cart-container mt-2 mb-2">
      <h1 className="text-center mb-4">Your Cart</h1>

      {data.length === 0 ? (
        <div className="text-center">
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        data.map((el, i) => (
          <div key={i} className="row align-items-center cart-item mb-4 p-3 shadow-sm bg-light rounded">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="cart-item-image-container">
                <img
                  src={el.image}
                  alt={el.name}
                  className="img-fluid cart-item-image"
                />
              </div>
            </div>

            <div className="col-md-8 col-sm-6 col-12">
              <h4 className="cart-item-name mb-2">{el.name}</h4>

              <div className="price-section d-flex align-items-center mb-2 fs-3">
                <span className="current-price">₹{el.price}</span>
                <del className="original-price ms-2 text-secondary">
                  ₹{el.originalPrice}
                </del>
                <span className="ms-3 text-danger">(incl. of all taxes)</span>
              </div>

              <p className="text-success mb-2">Bank offer: 10% off on select banks</p>
              <p>One-day delivery available</p>

              <p className="phone-description fs-4 mb-4">{el.description}</p>

      

              {/* Quantity Controls */}
              <div className="d-flex align-items-center cart-item-controls mt-3">
                <button
                  className="btn btn-dark me-2"
                  onClick={() => dispatch(decrementQuantity(i))}
                >
                  -
                </button>
                <span className="cart-item-quantity">{el.quantity}</span>
                <button
                  className="btn btn-dark ms-2"
                  onClick={() => dispatch(incrementQuantity(i))}
                >
                  +
                </button>
                <button
                  className="btn btn-dark ms-3"
                  onClick={() => dispatch(removeItem(i))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {data.length > 0 && (
        <div className="text-end mt-4">
          <h2>Total Price: ₹{totalPrice}</h2>
          <button
            type="button"
            className="btn btn-outline-dark mt-3"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";

export default function TabletDetails() {
  const { id } = useParams();
  const [tablet, setTablet] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/Tablet/${id}`)
      .then((response) => response.json())
      .then((data) => setTablet(data))
      .catch((error) => console.error("Error fetching tablet data:", error));
  }, [id]);

  if (!tablet) {
    return <div>Loading...</div>;
  }

  function cart() {
    dispatch(myAction(tablet));
    navigate("/cart");
  }

  return (
    <div className="container-fluid p-2">

      <div className="row mx-0 p-0">
       
        <div className="col-md-6 col-sm-12">
          <img
            src={tablet.image}
            className="img-fluid phone-image"
            alt={tablet.name}
          />
        </div>

     
        <div className="col-md-6 col-sm-12 mt-4 mt-md-0">
          <p className="text-success fs-5">One-day delivery available</p>
          <h2 className="phone-title mb-3">{tablet.name}</h2>
          <button className="btn btn-primary rounded-5 p-2 mb-3">
            Point Benefits
          </button>
          <p className="phone-price fs-3 mb-3">
            <span className="current-price">₹{tablet.price}</span>
            <del className="original-price ms-2 text-secondary">
              ₹{tablet.originalPrice}
            </del>{" "}
            (incl. of all taxes)
          </p>
          <p className="phone-description fs-4 mb-4">{tablet.description}</p>

          <button className="btn btn-dark btn-lg" onClick={cart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

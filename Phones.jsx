import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";
import BackToTopButton from '../HtAf/BackToTopButton';

export default function Phones() {
  const [phones, setPhones] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/Phones")
      .then((response) => response.json())
      .then((data) => setPhones(data));
  }, []);


  const handleImageClick = (phone) => {
    dispatch(myAction(phone));  
    navigate('/cart'); 
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-center">Latest Smartphone Models</h3>
        <p className="text-center" style={{ color: "gray" }}>
          Explore the latest models available from OPPO India.
        </p>
        {phones.map((phone) => (
          <div key={phone.id} className="col-md-3 mb-4">
            <div className="card h-100">
             
              <img
                src={phone.image}
                className="card-img-top"
                alt={phone.name}
                onClick={() => handleImageClick(phone)} 
                style={{ cursor: 'pointer' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{phone.name}</h5>
                <p className="card-text text-muted">
                  <span className="text-dark">₹{phone.price}</span>{" "}
                  <del>₹{phone.originalPrice}</del>
                </p>
        
                <p className="card-text">{phone.description}</p>

                <div className="d-flex justify-content-between">
                  <Link
                    to={`/phone/${phone.id}`}
                    className="btn btn-link text-dark"
                  >
                    Learn more
                  </Link>
                  <Link
                    to={`/phone/${phone.id}`}
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

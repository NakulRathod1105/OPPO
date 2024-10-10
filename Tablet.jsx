import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux"; 
import { myAction } from "../Redux/Action"; 
import BackToTopButton from "../HtAf/BackToTopButton";

export default function Tablet() {
  const [tablet, setTablet] = useState([]);
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://localhost:3000/Tablet")
      .then((response) => response.json())
      .then((data) => setTablet(data));
  }, []);

  const handleImageClick = (tabletItem) => {
    dispatch(myAction(tabletItem)); 
    navigate("/cart"); 
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-center">Latest OPPO Tablets</h3>
        <p className="text-center" style={{ color: "gray" }}>
          Explore the latest tablets from OPPO India.
        </p>
        {tablet.map((tablet) => (
          <div key={tablet.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={tablet.image}
                className="card-img-top"
                alt={tablet.name}
                onClick={() => handleImageClick(tablet)} 
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{tablet.name}</h5>
                <p className="card-text">{tablet.description}</p>
                <p className="card-text text-muted">
                  <span className="text-dark">₹{tablet.price}</span>{" "}
                  <del>₹{tablet.originalPrice}</del>
                </p>

                <div className="d-flex justify-content-between">
                  <Link to={`/tablet/${tablet.id}`} className="btn btn-link text-dark">
                    Learn more
                  </Link>
                  <Link to={`/tablet/${tablet.id}`} className="btn btn-dark">
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

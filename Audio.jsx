import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myAction } from "../Redux/Action";
import BackToTopButton from "../HtAf/BackToTopButton";

export default function Audio() {
  const [audio, setAudio] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/Audio")
      .then((response) => response.json())
      .then((data) => setAudio(data));
  }, []);

  const handleImageClick = (audioItem) => {
    dispatch(myAction(audioItem)); 
    navigate("/cart"); 
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-center">Latest Earbuds and Headphones</h3>
        <p className="text-center" style={{ color: "gray" }}>
          Explore the latest models available from OPPO India.
        </p>
        {audio.map((audio) => (
          <div key={audio.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={audio.image}
                className="card-img-top"
                alt={audio.name}
                onClick={() => handleImageClick(audio)} 
                style={{ cursor: 'pointer' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{audio.name}</h5>
                <p className="card-text">{audio.description}</p>
                <p className="card-text text-muted">
                  <span className="text-dark">₹{audio.price}</span> <del>₹{audio.originalPrice}</del>
                </p>

                <div className="d-flex justify-content-between">
                  <Link to={`/audio/${audio.id}`} className="btn btn-link text-dark">
                    Learn more
                  </Link>
                  <Link to={`/audio/${audio.id}`} className="btn btn-dark">
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

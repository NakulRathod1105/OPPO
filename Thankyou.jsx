import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Thankyou() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="container text-center my-5 py-5">
      <div className="card shadow-lg border-0 rounded-lg">
        <div className="card-body p-5">
          <img 
            src="https://htsg-store-gl.heytapimg.com/shop/202107/29/1-M00-00-35-CgGRkWECWOGAcsivAAAdpHTXhDU918.svg" 
            alt="Oppo Logo" 
            className="img-fluid mb-4" 
            style={{ width: '120px' }} 
          />
          <h1 className="display-4 text-dark mb-4">Thank You for Your Purchase!</h1>
          <p className="lead text-muted mb-4">
            Your order has been placed successfully. We appreciate your trust in Oppo. You will receive a confirmation email shortly with your order details.
          </p>
          <p className="lead text-muted mb-4">
            Stay tuned for updates, and don't forget to check out our latest products!
          </p>
          <button className="btn btn-outline-dark btn-lg mt-3" onClick={handleGoHome}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

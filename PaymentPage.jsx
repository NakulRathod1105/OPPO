import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/thankyou");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form 
        onSubmit={handleSubmit} 
        className="shadow-lg p-5 mb-3 mt-3 col-md-6 rounded bg-white" 
        style={{ borderRadius: '15px', border: '1px solid #ddd' }}
      >
        <h2 className="text-start fs-3 mb-4 text-dark">Payment Details</h2>

        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="cardNumber">
              <Form.Label className="fw-semibold">Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9123 4567"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>

          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="cardName">
              <Form.Label className="fw-semibold">Cardholder Name</Form.Label>
              <Form.Control
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="expiryDate">
              <Form.Label className="fw-semibold">Expiry Date</Form.Label>
              <Form.Control
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>

          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="cvv">
              <Form.Label className="fw-semibold">CVV</Form.Label>
              <Form.Control
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>
        </div>

        <h4 className="text-start fs-3 mb-4 text-dark">Billing Address</h4>

        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="address">
              <Form.Label className="fw-semibold">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>

          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="city">
              <Form.Label className="fw-semibold">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            <Form.Group controlId="postalCode">
              <Form.Label className="fw-semibold">Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="12345"
                required
                className="shadow-sm w-100"
              />
            </Form.Group>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
         <button className="btn btn-outline-dark">Payment Done</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login successful!" : "Signup successful!");

    navigate("/");
  };

  return (
    <div className="login-signup-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6">
            <div className="card shadow-lg p-4 rounded-lg border-0">
              <div className="card-body">
                <h2 className="text-start mb-4 " style={{fontSize:"30px"}}>
                  {isLogin ? "Login" : "Sign Up"}
                </h2>

                <form onSubmit={handleSubmit}>
                  {isLogin ? (
                    <>
                      <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control rounded-pill"
                          id="loginEmail"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          id="loginPassword"
                          placeholder="Enter password"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-pill"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mb-3">
                        <label htmlFor="signupName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-pill"
                          id="signupName"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="signupEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control rounded-pill"
                          id="signupEmail"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="signupPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          id="signupPassword"
                          placeholder="Create a password"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-pill"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </form>

                <div className="text-center mt-3">
                  <Link to="#">
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin
                        ? "Don't have an account? Sign up"
                        : "Already have an account? Login"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton/>  
    </div>
  );
}

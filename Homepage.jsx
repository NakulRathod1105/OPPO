import React from "react";
import BackToTopButton from "./BackToTopButton";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="container-fluid p-0">
      <div
        id="oppoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {" "}
          <div className="carousel-item active">
            <div className="position-relative" style={{ height: "500px" }}>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/06/aMWn02QqP6mnqvXv.jpg?x-amz-process=image/format,webp/quality,Q_80"
                className="d-block w-100"
                alt="Oppo Phone"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y w-100 text-center text-md-start px-4"
                style={{ zIndex: 1 }}
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h1 className="fw-bold">OPPO F27 Pro+5G</h1>
                    <p>Indian First Waterproof Rated IP69</p>
                    <p>Starts from ₹150/day with 6 months of no cost EMI</p>
                    <h2 className="fw-bold">
                      From ₹36,999
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹53,999
                      </span>
                    </h2>
                    <Link to="/phones">
                      <button className="btn btn-dark px-5 py-2 mt-3">
                        Buy now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="position-relative" style={{ height: "500px" }}>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/21/PaPROzHGz29PT3DE.jpg?x-amz-process=image/format,webp/quality,Q_80"
                className="d-block w-100"
                alt="Oppo Phone"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y w-100 text-center text-md-start px-4"
                style={{ zIndex: 1 }}
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h1 className="fw-bold">OPPO Reno12 Pro 5G</h1>
                    <p>Your Everyday AI Companion</p>
                    <p>Starts from ₹133/day with 9 months of no cost EMI</p>
                    <h2 className="fw-bold">
                      From ₹36,999
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹53,999
                      </span>
                    </h2>
                    <Link to="/phones">
                     <button className="btn btn-dark px-5 py-2 mt-3">
                      Buy now
                    </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative" style={{ height: "500px" }}>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202409/14/tcbxaKo9nIArepWm.jpg?x-amz-process=image/format,webp/quality,Q_80"
                className="d-block w-100"
                alt="Oppo Phone"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y w-100 text-center text-md-start px-4"
                style={{ zIndex: 1 }}
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h1 className="fw-bold">OPPO Festive Bonanza!</h1>
                    <p>Unlock Bank Offers, Points & Student Benefits</p>
                    <h2 className="fw-bold">14th - 30th sept</h2>
                    <Link to="/phones"> 
                    <button className="btn btn-dark px-5 py-2 mt-3">
                      Buy now
                    </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative" style={{ height: "500px" }}>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202409/10/d0Q1d7ecEhg0Dbji.jpg?x-amz-process=image/format,webp/quality,Q_80"
                className="d-block w-100"
                alt="Oppo Phone"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y w-100 text-center text-md-start px-4"
                style={{ zIndex: 1 }}
              >
                <div className="row text-white">
                  <div className="col-12 col-md-6">
                    <h1 className="fw-bold ">OPPO K12x 5G</h1>
                    <p>Indian First Waterproof Rated IP69</p>
                    <h2 className="fw-bold">
                      From ₹12,999
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹16,999
                      </span>
                    </h2>
                    <Link to="/phones">
                    <button className="btn btn-dark px-5 py-2 mt-3">
                      Buy now
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative" style={{ height: "500px" }}>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202409/10/qxaxyPSv3Z1NpSDn.jpg?x-amz-process=image/format,webp/quality,Q_80"
                className="d-block w-100"
                alt="Oppo Phone"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y w-100 text-center text-md-start px-4"
                style={{ zIndex: 1 }}
              >
                <div className="row ">
                  <div className="col-12 col-md-6">
                    <h1 className="fw-bold ">OPPO F27 5G</h1>
                    <p>Dare to Flaunt</p>
                    <h2 className="fw-bold">
                      From ₹22,999
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹26,999
                      </span>
                    </h2>
                    <Link to="/phones">
                    <button className="btn btn-dark px-5 py-2 mt-3">
                      Buy now
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative" style={{ height: "500px" }}>
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202407/31/Ykhxfj1ggtRjY6cs.jpg?x-amz-process=image/format,webp/quality,Q_80"
                className="d-block w-100"
                alt="Oppo Phone"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y w-100 text-center text-md-start px-4"
                style={{ zIndex: 1 }}
              >
                <div className="row ">
                  <div className="col-12 col-md-6">
                    <h1 className="fw-bold ">₹10 Gift Box</h1>
                    <p>super point & chance to win Reno 12 Pro 5G</p>
                    <h2 className="fw-bold">
                      1st September'24 - 17th september'24
                    </h2>
                    <Link to="/phones">
                    <button className="btn btn-dark px-5 py-2 mt-3">
                      Buy now
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#oppoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#oppoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row mx-0 p-5 mt-2">
        <div className="col-sm-2  col-12">
          <div class="card-body text-dark">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/19/BQgQCsYQWWRiF1UM.png?x-amz-process=image/format,webp/quality,Q_80"
                className="img-fluid"
                alt=""
              />
            </Link>

            <h5 class="card-title text-center">Phone</h5>
          </div>
        </div>

        <div className="col-sm-2  col-12">
          <div class="card-body text-dark">
            <Link to="/Audio">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202402/01/va02xIcJNGsqHz4w.png?x-amz-process=image/format,webp/quality,Q_80"
                className="img-fluid"
                alt=""
              />
            </Link>

            <h5 class="card-title text-center">Audio</h5>
          </div>
        </div>

        <div className="col-sm-2  col-12">
          <div class="card-body text-dark">
            <Link to="/Tablet">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202402/01/LdmzQOQWZHoRKrKy.png?x-amz-process=image/format,webp/quality,Q_80"
                className="img-fluid"
                alt=""
              />
            </Link>

            <h5 class="card-title text-center">Tablets</h5>
          </div>
        </div>

        <div className="col-sm-2  col-12">
          <div class="card-body text-dark">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/19/nlGIG1WSgMKy1Oxm.png?x-amz-process=image/format,webp/quality,Q_80"
                className="img-fluid"
                alt=""
              />
            </Link>

            <h5 class="card-title text-center">Accessories</h5>
          </div>
        </div>

        <div className="col-sm-2  col-12">
          <div class="card-body text-dark">
            <a href="https://www.oppo.com/in/store/event/trade-in/">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202401/31/YzUX3RB7lhHGIu0n.png?x-amz-process=image/format,webp/quality,Q_80"
                className="img-fluid"
                alt=""
              />
            </a>

            <h5 class="card-title text-center">Exchange</h5>
          </div>
        </div>

        <div className="col-sm-2  col-12">
          <div class="card-body text-dark">
            <a href="https://www.oppo.com/in/store/contents/event/protection-plan/">
              {" "}
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202401/31/PBWjDaLYqnYwqYXi.png?x-amz-process=image/format,webp/quality,Q_80"
                className="img-fluid"
                alt=""
              />
            </a>

            <h5 class="card-title text-center">OPPO Care</h5>
          </div>
        </div>
      </div>

      <div className="row mx-0">
        <h3>Hot-selling Smartphone above ₹20,000</h3>
        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202402/20/mcjmtcbbeYWk2N7s.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>
            <div className="card-body">
              <span className=" bg-light text-dark">17% OFF</span>
              <h6 className="card-title">OPPO F25 Pro 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹23,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹28,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/26/idPHBfjTSZBkJgd1.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 2"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">25% OFF</span>
              <h6 className="card-title">OPPO Reno12 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹32,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹43,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/26/5epX7H40eFR5WeZJ.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 3"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">31% OFF</span>
              <h6 className="card-title">OPPO Reno12 Pro 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹36,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹53,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202401/03/w62AbED5cOkimcDw.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 4"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">15% OFF</span>
              <h6 className="card-title">OPPO Reno11 Pro 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹37,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹44,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/15/TgeRkXM8uCzm7qSQ.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 4"
              />
            </Link>
            <div className="card-body">
              <span className=" bg-light text-dark">14% OFF</span>
              <h6 className="card-title">OPPO F27 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹22,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹26,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202407/25/DJYluTdgwm1mG9xs.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 4"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">GIFT</span>
              <h6 className="card-title">OPPO F27 Pro+ 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹27,999
                <span className="text-muted text-decoration-line-through">
                  ₹32,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0 p-0">
        <h3>Hot-selling Smartphone below ₹20,000</h3>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202312/20/LkMSUg1BTrUE8ZFz.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">17% OFF</span>
              <h6 className="card-title">OPPO A59 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹15,499{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹19,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202407/26/yGDoIUiWzyDw2vpi.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 2"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">25% OFF</span>
              <h6 className="card-title">OPPO A3x 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹12,499{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹14,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/21/BTl5EnupiCaFkK27.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 3"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">31% OFF</span>
              <h6 className="card-title">OPPO A3 Pro 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹17,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹20,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card">
            <Link to="/Phones">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/19/YAt1XTcwgRvRs8LY.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 4"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">15% OFF</span>
              <h6 className="card-title">OPPO A3 5G</h6>
              <p className="card-text">Bank offer up to 10% off</p>
              <h5>
                ₹15,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹19,999
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0">
        <h3>OPPO Audio</h3>
        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Audio">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/08/seAVtICTEb619BEO.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">56% OFF</span>
              <h6 className="card-title">OPPO Enco Buds2</h6>
              <h5>
                ₹1,799{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹3,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Audio">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/08/UCxpfeZlTgB6ObLU.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">37% OFF</span>
              <h6 className="card-title">OPPO Enco Air3 Pro</h6>
              <h5>
                ₹4,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹7,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Audio">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/08/f1ILrdV2ocbYp5lO.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">30% OFF</span>
              <h6 className="card-title">OPPO Enco Air2 Pro</h6>
              <h5>
                ₹3,499{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹4,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Audio">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202408/08/fNNY3qyaRcHm4czT.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">56% OFF</span>
              <h6 className="card-title">OPPO Enco Air2i</h6>
              <h5>
                ₹1,799{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹3,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Audio">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTl9ewVbBNlD3m2W1rs_DJIh7lUbKd568Obd1aIXpDYK0Ln5HapUt-jT13tMRGtVhTSov39C-l71ZTdP5mxdw8o5YfdCyB3fK9Ca809ec52CQMo3TTo-KUa7Oo&usqp=CAE"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">56% OFF</span>
              <h6 className="card-title">OPPO Open Box Buds</h6>
              <h5>
                ₹5,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹9,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Audio">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202205/26/eFvsHFYdJ7SGsmA2.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">16% OFF</span>
              <h6 className="card-title">OPPO MH135 Type-C Earphone</h6>
              <h5>
                ₹499
                <span className="text-muted text-decoration-line-through">
                  ₹599{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0">
        <h3>OPPO Accessories</h3>
        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202302/15/rcLtog33YRbD7DxA.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">66% OFF</span>
              <h6 className="card-title">OPPO SUPERVOOC 33W Power Adapter</h6>
              <h5>
                ₹999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹2,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202302/07/06CvPo78SnlOppGL.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">70% OFF</span>
              <h6 className="card-title">OPPO 10W Power Adapter</h6>
              <h5>
                ₹599{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹1,999
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/18/nwXFxx1Lub8qSoOn.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">44% OFF</span>
              <h6 className="card-title"> OPPO 45W Power Adapter</h6>
              <h5>
                ₹1,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹3,599{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202406/20/kTKCNWqpreMjL0YA.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">71% OFF</span>
              <h6 className="card-title">OPPO 80W Power Adapter</h6>
              <h5>
                ₹1,999{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹6,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202205/27/OgHfMUExniVX7qWD.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">41% OFF</span>
              <h6 className="card-title">OPPO Type-C Data Cable</h6>
              <h5>
                ₹399{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹599{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <div className="card">
            <Link to="/Accessories">
              <img
                src="https://opsg-img-cdn-gl.heytapimg.com/epb/202303/24/DGGO887Tr0fkHf2s.png?x-amz-process=image/format,webp/quality,Q_80"
                className="card-img-top"
                alt="Product 1"
              />
            </Link>

            <div className="card-body">
              <span className=" bg-light text-dark">50% OFF</span>
              <h6 className="card-title">OPPO 80W Car Charger</h6>
              <h5>
                ₹2,499{" "}
                <span className="text-muted text-decoration-line-through">
                  ₹4,999{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
}

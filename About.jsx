import React, { useRef } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";

const About = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mx-0 p-5">
          <h1 className="text-center fw-bold mb-4">Inspiration Ahead  <span> <button
              className="btn btn-dark"
              onClick={handlePlayPause}
            >
              Play/Pause Video
            </button></span></h1>

          <div className="video_box_pc mx-0 d-flex justify-content-center p-0 col-12">
            <video
              ref={videoRef}
              src="//image.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/about-kv-banner-pc.mp4"
              poster="/content/dam/oppo/common/mkt/about/v2/assets/about-kv-banner-pc.jpg"
              loop
              muted
              className="mx-0 p-0"
              style={{  width:"108%"}}
            ></video>
          </div>


        </div>

        <div
          className="row mx-0 p-5"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="col-lg-12 col-12 p-2">
            <h5 className="text-success fw-bold p-2 text-start">
              Brand Slogan
            </h5>
            <h1 className="fw-bold text-start">Inspiration Ahead</h1>
            <hr
              className="bg-success"
              style={{ height: "3px", width: "25%" }}
            />
          </div>

          <div className="col-lg-12">
            <p className="text-white">
              It stems from our value of "Benfen", asking us to do the right
              thing and keep an open mind as we strive to seek truth. It is also
              rooted in our product history: from our first mobile phone -
              "Smiley Face" – in 2008, OPPO has been in relentless pursuit of
              spreading optimism and inspiration to the world with technology.
            </p>
            <p className="text-white">
              "Inspiration Ahead" is OPPO's attitude towards the current state
              of the world, and is also shared by the group of people that OPPO
              wants to empower.
            </p>
            <p className="text-white">
              The current age is full of challenges and uncertainty. To believe
              in "Inspiration Ahead" is to believe that the future is promising.
              Just as we encourage everyone to brave the difficulties, OPPO will
              stick to the right thing and never sacrifice quality for speed.
            </p>
            <p className="text-white">
              OPPO identifies with the vast number of our fellows. We hope to
              empower them and elevate society with innovation and technology,
              and to make a difference and to find inspiration ahead.
            </p>
          </div>
        </div>

        <div className="row mx-0 p-5 text-white bg-dark">
          <h1 className="text-start mb-5">Technology Innovations</h1>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-12 col-lg-3 mb-4">
              <div className="card card-image h-100 w-100">
                <img
                  src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S02_img4.png"
                  className="card-img-top"
                  alt="SUPERVOOC"
                />
                <div className="card-body">
                  <p className="card-text">
                    SUPERVOOC <br /> More Than Fast
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6  col-12  col-lg-3 mb-4">
              <div className="card card-image h-100 w-100">
                <img
                  src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S02_img1.png"
                  className="card-img-top"
                  alt="INNO DAY 2021"
                />
                <div className="card-body">
                  <p className="card-text">
                    INNO DAY 2021 <br /> Reimagining the Future
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6  col-12  col-lg-3 mb-4">
              <div className="card card-image h-100 w-100">
                <img
                  src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S02_img2.png"
                  className="card-img-top"
                  alt="Innovation"
                />
                <div className="card-body">
                  <p className="card-text">
                    5G
                    <br />
                    Connect to the World
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6  col-12    col-lg-3 mb-4">
              <div className="card card-image h-100">
                <img
                  src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S02_img3.png"
                  className="card-img-top"
                  alt="Innovation"
                />
                <div className="card-body">
                  <p className="card-text">
                    Imaging
                    <br />
                    Smart Images to Savour Every Moment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row mx-0 p-4 "
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h2 className="text-start mx-3 p-3 fw-bold">Brand Partnerships</h2>

          <div class="col-sm-6 mb-3 col-12">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/en/assets/S03-UEFA-pc.png"
              className="img-fluid"
              alt=""
            />

            <p className="p-2 fs-5">
              OPPO X UEFA Champions League
              <br />
              Official Global Partner of the UEFA Champions League
            </p>
            <button className="btn btn-outline-light" onClick={handleGoHome}>
              Learn more
            </button>
          </div>

          <div class="col-sm-6 mb-3 col-12">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S03_img1.png"
              className="img-fluid"
              alt=""
            />

            <p className="p-2 fs-5">
              OPPO X Roland Garros
              <br />
              OPPO became a global partner of the French Open
            </p>
            <button className="btn btn-outline-light" onClick={handleGoHome}>
              Learn more
            </button>
          </div>

          <div class="col-sm-6 mt-5 col-12">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S03_img2.png"
              className="img-fluid"
              alt=""
            />

            <p className="p-2 fs-5">
              OPPO X Wimbledon
              <br />
              OPPO became a global partner of the Wimbledon Tennis Championship
            </p>
            <button className="btn btn-outline-light" onClick={handleGoHome}>
              Learn more
            </button>
          </div>

          <div class="col-sm-6 mt-5 col-12">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/S03_img4.png"
              className="img-fluid"
              alt=""
            />

            <p className="p-2 fs-5">
              OPPO X London Design Festival
              <br />
              OPPO was at the London Design Festival to explore the integration
              of technology and art with Kengo Kuma
            </p>
            <button className="btn btn-outline-light" onClick={handleGoHome}>
              Learn more
            </button>
          </div>
        </div>

        <div
          className="row mx-0 p-5 text-center"
          style={{ backgroundColor: "whitesmoke", color: "black" }}
        >
          <div className="col-12">
            <h1 className="fw-light mb-3" style={{ fontSize: "3rem" }}>
              OPPO is a leading
            </h1>
            <p className="fw-light" style={{ fontSize: "3rem" }}>
              innovator in smart devices
            </p>
          </div>
        </div>

        <div
          className="row mx-0 p-5"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <div className="col-lg-12 col-12 p-2">
            <h1 className="fw-light text-start">Brand History</h1>
            <hr
              className="bg-success"
              style={{ height: "2px", width: "18%" }}
            />
          </div>

          <div className="col-lg-12">
            <p className="text-dark fs-2 fw-light">
              OPPO Company was founded in 2004 and launched its DVD products in
              Europe and the United States in the same year. In 2008, OPPO
              launched its first mobile phone -- OPPO A103 "Smiley Face" and
              officially entered the mobile phone industry. OPPO continues to
              show goodwill in science and technology and the attitude
              "Inspiration Ahead" with all users.
            </p>

            <br />

            <p className="text-dark fs-2 fw-light">
              The founding team of OPPO has extensive experience in electronic
              industry. When the team left BBK Company and founded the new
              completely independent brand - OPPO, they adhered to the belief of
              creating great products. In the fierce competing market, OPPO
              gradually became one of the Top-5 mobile phone brands in the world
              and emerged in the IoT products.
            </p>

            <br />

            <p className="text-dark fs-2 fw-light">
              Today, OPPO produces mobile phones (including Reno series),
              headphones, watches, tablets and other smart devices. OPPO also
              developed ColorOS operating system. With an innovative, open and
              elegant software-hardware integrated experience, OPPO is committed
              to creating a beautiful and intelligent life for users all over
              the world.
            </p>
          </div>
        </div>

        <div
          className="row mx-0 p-5"
          style={{ backgroundColor: "whitesmoke", color: "black" }}
        >
          <h1>Awards and Honours</h1>
          <p className="fs-5 fw-light">
            OPPO has deepened its competencies in various fields, earning the
            recognition of users and professional institutions all over the
            world.
          </p>

          <div className=" col-sm-3 col-12 text-start p-0">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/s9-tab1-img1.png"
              className="p-3 img-fluid"
              alt=""
            />
            <p className="p-3">
              2021 <br /> Ranked 6th among Brand Z's Top 50 Global Brands in
              China
            </p>
          </div>

          <div className=" col-sm-3 col-12 text-start  p-0">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/s9-tab1-img2.png"
              className="img-fluid p-3"
              alt=""
            />
            <p className="p-3">
              2021 <br /> Ranked 6th among Brand Z's Top 50 Global Brands in
              China
            </p>
          </div>

          <div className=" col-sm-3 col-12 text-start p-0">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/s9-tab1-img3.png"
              className="img-fluid p-3"
              alt=""
            />
            <p className="p-3">
              2021 <br /> Ranked 6th among Brand Z's Top 50 Global Brands in
              China
            </p>
          </div>

          <div className=" col-sm-3 col-12 text-start p-0">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/about/v2/assets/s9-tab1-img4.png"
              className="img-fluid p-3"
              alt=""
            />
            <p className="p-3">
              2021 <br /> Ranked 6th among Brand Z's Top 50 Global Brands in
              China
            </p>
          </div>
        </div>

      
      </div>
      <div
      className="row mx-0 p-5 "
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div
        className="col-sm-6 col-12 border-end border-success"
        style={{ paddingRight: '-100px' }} 
      >
       <h2 className="p-2">Brand Values</h2>
       <h4 className="p-2">Benfen | User-led
       Pursue excellence | Open</h4>
       <p className="p-3">The core of OPPO's corporate culture has always been BenFen, and it is committed to creating great products that would delight the users. In the face of pressure and temptations from the external environment, we firmly believe that maintaining a calm posture and focusing on the fundamentals is the only way to make correct judgements and choices that will pave the way to health and longevity for the enterprise.</p>
      </div>
      <div
        className="col-sm-6 col-12 border-start border-success"
        style={{ paddingLeft: '30px' }} 
      >
       <h2 className="p-2">
       Brand Mission</h2>
       <h4 className="p-2">Technology for Mankind, Kindness for the World</h4>
       <p className="p-3">“Technology for Mankind, Kindness for the World” is the driving force behind OPPO's innovation and technology development. In other words, OPPO is committed to helping every individual with innovative spirit to grow, as well as helping the society as a whole to develop, while practicing the BenFen culture, helping humankind to build a mutually beneficial and inclusive society.</p>
      </div>
    </div>
    <BackToTopButton/>
    </div>

  );
};

export default About;

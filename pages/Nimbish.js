import React from "react";
// import comp from "../img/vector-10.svg";
import vector8 from "../public/vector-8.svg";
import logo from "../public/logo.svg";
import elipse5 from "../public/ellipse-5@2x.png";
import elipse3 from "../public/ellipse-3@2x.png";
import elipse2 from "../public/ellipse-2@2x.png";
import elipse6 from "../public/ellipse-6@2x.png";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Whoweare from "../components/Whoweare";
import Image from "next/image";
// import simblish from "../"

const Nimbish = () => {
  return (
    <div className="overflow-hidden">
      <section className="home-section overflow-hidden position-relative">
        <div
          className="circle1-big bg3s elipse rounded-circle position-absolute"
          style={{ right: -500, top: -570 }}
        ></div>
        <div className="nav-section">
          <Navbar />
        </div>
        <div className="hero mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="ms-md-5 px-3 pt-5 pt-md-0 ">
                <h1 className="get-text">
                  Get set to rock UNLIMITED TRIVIA with{" "}
                  <span className="get-text2 position-relative">
                    Nimblish
                    <Image
                      className="position-absolute"
                      src={vector8}
                      alt="underline"
                      style={{ top: 74, right: 0 }}
                    />
                  </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  autem voluptatem esse voluptates dignissimos reprehenderit
                  earum ducimus. Dolor velit tenetur enim? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quasi autem voluptatem esse
                  voluptates dignissimos reprehenderit earum ducimus. Dolor
                  velit tenetur enim?
                </p>
                <button
                  className="btn bg1 mb-2 rounded-pill text-white font1 py-2 px-5 mt-2"
                  style={{ backgroundColor: "#E36B08" }}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-4 mt-3 mt-md-0" style={{ height: 300 }}>
              <div className="position-relative">
                <div
                  className="circle1 position-absolute"
                  style={{ right: 200, top: -40 }}
                >
                  <Image
                    className="rounded-circle"
                    src={elipse2}
                    alt="soccer"
                    style={{ height: 230, width: 230 }}
                  />
                </div>
                <div
                  className="circle2 position-absolute"
                  style={{ right: 100, top: 50 }}
                >
                  <Image
                    className="rounded-circle"
                    src={elipse3}
                    alt="soccer"
                    style={{ height: 100, width: 100 }}
                  />
                </div>
                <div
                  className="circle3 position-absolute"
                  style={{ right: 140, top: 150 }}
                >
                  <Image
                    className="rounded-circle"
                    src={elipse5}
                    alt="soccer"
                    style={{ height: 100, width: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section py-5">
        <Whoweare />
      </section>
      <section className="about-section bg2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="img-circle d-flex align-items-center justify-content-center h-100">
                <Image
                  className="rounded-circle"
                  src={elipse6}
                  alt=""
                  style={{ height: 300, width: 310, objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-md-7 mt-4 my-md-0 ">
              <h3 className="text-uppercase fw-bold text1">about nimblish</h3>
              <p className="text-white" style={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit, nulla! Aliquid, quae cumque iusto alias minus rerum
                architecto repudiandae provident non, libero odit numquam enim
                officia itaque. Doloribus, aliquid! Asperiores possimus eos
                quibusdam quae eius similique, et earum facere molestiae
                explicabo corporis ullam alias, cum magni esse nulla, deleniti
                quidem doloribus?
              </p>
              <div className="text-white">
                <p>Get started in four simple steps</p>
                <ul style={{ fontSize: 13 }}>
                  <li>Create an account</li>
                  <li>Load wallet</li>
                  <li>Answer trivial quizzes</li>
                  <li>earn fantastic rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-section py-5">
        <h3 className="text-center fw-bold">How does Nimblish work?</h3>
        <div className="work container">
          <div className="row">
            <div className="col-md-4">
              <div className="shadow1 p-2">
                <div className="my-5"></div>
                <hr />
                <p className="fw-bold text-center">Create</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  nam porro reprehenderit!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow1">
                <div className="my-5"></div>
                <hr />
                <p className="fw-bold text-center">Create</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  nam porro reprehenderit!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-2 shadow1">
                <div className="my-5"></div>
                <hr />
                <p className="fw-bold text-center">Create</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  nam porro reprehenderit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-section bg4 py-5">
        <h3 className="fw-bold text1 container">What People Say About Us</h3>
        <div>
          <div className="row">
            <div className="col-md-4 py-2 px-5">
              <div className="d-flex ms-md-5 bg-white shadow rounded pt-2 px-2">
                <div
                  className="rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <Image
                    className="rounded-circle"
                    src={elipse2}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5">
              <div className="d-flex ms-md-5 shadow rev2 rounded pt-2 px-2">
                <div
                  className=" rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <Image
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5  text-white">
              <div className="d-flex ms-md-5 shadow rev1 rounded pt-2 px-2">
                <div
                  className=" rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <Image
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5  text-white">
              <div className="d-flex ms-md-5 shadow rev3 rounded pt-2 px-2">
                <div
                  className=" rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <Image
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5  text-white">
              <div className="d-flex ms-md-5 shadow rev4 rounded pt-2 px-2">
                <div
                  className=" rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <Image
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2 px-5  text-white">
              <div className="d-flex ms-md-5 shadow rev5 rounded pt-2 px-2">
                <div
                  className="rounded-circle"
                  style={{ height: 30, width: 30 }}
                >
                  <Image
                    className="rounded-circle"
                    src={logo}
                    alt=""
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="ms-2">
                  <p style={{ lineHeight: 0.9 }}>
                    Sarah leah <br />{" "}
                    <span className="" style={{ fontSize: 11 }}>
                      @Sarahleah
                    </span>
                  </p>
                  <p style={{ fontSize: 12 }}>
                    Numblish is one of the best places to safety get reward for
                    your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup-section">
        <div className="container py-5">
          <div className="shadow p-3 rounded">
            <div className="row position-relative signup-text">
              <div className="col-md-6">
                <h4 className="fw-bold">Signup for free.</h4>
                <h4 className="fw-bold">Play Trivia</h4>
                <h4 className="fw-bold">Start earning today.</h4>
                <button className="btn bg1 text-white font1 py-2 px-3 mt-2">
                  Get Started
                </button>
              </div>

              <div className="col-md-6">
                <div
                  className="overflow-hidden position-relative"
                  style={{ height: 150 }}
                >
                  <div
                    className="blue-circle bg-primary rounded-circle position-absolute"
                    style={{ top: 10, height: 10, width: 10, left: 100 }}
                  ></div>
                  <div
                    className="yellow-circle bg-warning rounded-circle position-absolute"
                    style={{ top: 10, height: 20, width: 20, right: 100 }}
                  ></div>
                  <div
                    className="c rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      height: 200,
                      width: 200,
                      marginTop: 30,
                      marginLeft: 200,
                      border: "1px solid orange",
                    }}
                  >
                    <div
                      className="a rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        height: 160,
                        width: 160,
                        border: "1px solid orange",
                      }}
                    >
                      <div
                        className="b rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          height: 120,
                          width: 120,
                          border: "1px solid orange",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <section className="footer-section text-start">
        <Footer />
      </section>
    </div>
  );
};

export default Nimbish;

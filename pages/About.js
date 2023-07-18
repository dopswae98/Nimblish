import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whoweare from "../components/Whoweare";
import pic1 from "../public/ellipse-2615@2x.png";
import pic2 from "../public/ellipse-26151@2x.png";
import pic3 from "../public/ellipse-26152@2x.png";
import pic4 from "../public/ellipse-26153@2x.png";
import pic5 from "../public/ellipse-26154@2x.png";
import pic6 from "../public/ellipse-26155@2x.png";

import hero1 from "../public/frame-232063602@2x.png";
import hero2 from "../public/frame-232063601@2x.png";
import hero3 from "../public/frame-232063600@2x.png";
import hero4 from "../public/frame-232063599@2x.png";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="nav-section">
        <Navbar />
      </section>
      <section className="hero-section bg8 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="get-text2">
                Relaxing and educative trivia for everyone.
              </h1>
              <p className="text-poppins">
                Nimblish is a trivia quiz app for everyone to enjoy, learn, test
                their knowledge and earn rewards on a random variety of topics.
                Join our various sections to accumulate and earn rewards all day
                long. Each section runs for 10mins and contains 10 questions of
                varying topics. Every Nimblish quiz question is expected to run
                for 1 minute after which it automatically switches to the next
                question. Try out our Trivia quizzes and earn some reward.
              </p>
              <p className="text-poppins">Get started in 4 simple steps: </p>
              <ul className="text-poppins">
                <li>create an account</li>
                <li>load Wallet </li>
                <li>answer trivia quizzes </li>
                <li>earn fantastic rewards</li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="position-relative d-none d-md-block bg-warning">
                <Image
                  className="hero-about-image position-absolute"
                  src={hero1}
                  alt=""
                  style={{ left: -80 }}
                />
                <Image
                  className="hero-about-image2 position-absolute"
                  style={{ top: 175, left: -25 }}
                  src={hero2}
                  alt=""
                />
                <Image
                  className="hero-about-image1 position-absolute"
                  src={hero4}
                  style={{ top: 0, right: -55 }}
                  alt=""
                />
                <Image
                  className="hero-about-image3 position-absolute"
                  src={hero3}
                  style={{ top: 265, right: -55 }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whoweare-section py-5">
        <Whoweare />
      </section>
      <section className="why-section py-5 bg5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-5">
              <p>
                Lorem ipsum dolor sit amet consectetur. Turpis quis tristique at
                sem mi odio. Quis urna aliquam senectus mi enim tortor volutpat.
                Tortor proin amet eget risus quis massa. Justo convallis neque
                neque feugiat lectus. Egestas non tempus orci non purus euismod
                sem facilisis. Neque vulputate purus fringilla vestibulum vitae
                id congue. Arcu etiam ipsum integer sed commodo. Ipsum quisque
                lectus sed mollis eget tristique consectetur. Faucibus enim
                vulputate lacus metus elementum. Lacus sed facilisis leo ante
                venenatis. Ipsum risus fermentum vel leo montes sed nec.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex h-100 align-items-center justify-content-start">
                <h3 className="fw-bold text1 py-4 position-relative">
                  <span
                    className="position-absolute bg1"
                    style={{ height: 5, width: 65, top: 0 }}
                  ></span>
                  Why We Began At All
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team py-5">
        <div className="container">
          <div className="top text-center">
            <div className="row">
              <div className="col-md-7 mx-auto">
                <div className="d-flex align-items-center justify-content-center">
                  <h3 className="fw-bold text1 py-4 position-relative">
                    <span
                      className="position-absolute bg1"
                      style={{ height: 5, width: 65, top: 0, left: "30%" }}
                    ></span>
                    The Team
                  </h3>
                </div>
                <p className="">
                  We’re a diverse, close-knit team on an adventure to build
                  something enduring, while learning something new, every day.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="row">
              <div className="col-md-4 p-3">
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Image
                    src={pic1}
                    className="logo-Image"
                    height={224}
                    width={224}
                    alt="team1"
                  />
                  <div className="member-name pt-2">
                    <p>Tolulope Adewale</p>
                    <p className="member-role text-center">Development</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Image
                    src={pic2}
                    height={224}
                    width={224}
                    className="logo-Image"
                    alt="team1"
                  />
                  <div className="member-name pt-2">
                    <p>Tolulope Adewale</p>
                    <p className="member-role text-center">Development</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Image
                    src={pic3}
                    height={224}
                    width={224}
                    className="logo-Image"
                    alt="team1"
                  />
                  <div className="member-name pt-2">
                    <p>Tolulope Adewale</p>
                    <p className="member-role text-center">Development</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Image
                    src={pic4}
                    height={224}
                    width={224}
                    className="logo-Image"
                    alt="team1"
                  />
                  <div className="member-name pt-2">
                    <p>Tolulope Adewale</p>
                    <p className="member-role text-center">Development</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Image
                    src={pic5}
                    height={224}
                    width={224}
                    className="logo-Image"
                    alt="team1"
                  />
                  <div className="member-name pt-2">
                    <p>Tolulope Adewale</p>
                    <p className="member-role text-center">Development</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Image
                    src={pic6}
                    height={224}
                    width={224}
                    className="logo-Image"
                    alt="team1"
                  />
                  <div className="member-name pt-2">
                    <p>Tolulope Adewale</p>
                    <p className="member-role text-center">Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default About;

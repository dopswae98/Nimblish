import Image from "next/image";
import React from "react";

import Sally from "../public/Sally.svg";
import Navbar2 from "../components/Navbar2";

const Waitlist = () => {
  return (
    <div className="overflow-hidden">
      <section className="nav-section2">
        <Navbar2 />
      </section>
      <section className="hero-section bg9">
        <div className="h-75 container py-5">
          <div className="row">
            <div className="col-md-8 join-text">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <p>Join Nimble’s trivia waitlist</p>
                  <p className="pt-3 text-poppins text-white">
                    Lorem ipsum dolor sit amet consectetur. Dictumst interdum
                    mauris at risus faucibus a at. Nullam tortor ultrices
                    blandit eu elementum massa faucibus nisi tortor. Viverra.
                    Lorem ipsum dolor sit amet consectetur. Dictumst interdum
                    mauris at risus faucibus a at. Nullam tortor ultrices
                    blandit eu elementum massa faucibus nisi tortor. Viverra.
                  </p>
                  <div
                    className="bg-white p-2 mt-5 d-flex align-items-center justify-content-between"
                    style={{ borderRadius: 20 }}
                  >
                    <input
                      className="w-100 ms-2 bg-transparent border-0 search-text text-start"
                      style={{ outline: "none" }}
                      type="text"
                      placeholder="Search for a key word"
                    />
                    <button
                      className="connect-wallet btn bg1 rounded-pill text-white fw-bold px-4"
                      style={{ fontSize: 12, borderRadius: 13 }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="sally-container col-md-12 position-relative mx-auto">
                  <Image
                    className="position-absolute sally-img"
                    src={Sally}
                    alt="niblish"
                    style={{
                      top: -25,
                      left: -40,
                      maxWidth: 460,
                      maxHeight: 460,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-area py-4">
        <p className="text-center text-poppins2">
          We are committed to delivering Quality hence our trusted Partners
        </p>
        <div>
          <div className="row">
            <div className="col-md-7 mx-auto">
              <div className="d-flex justify-content-between align-items-center">
                <Image
                  src={Sally}
                  style={{ height: 136, width: 136 }}
                  alt="patner1"
                />
                <Image
                  src={Sally}
                  style={{ height: 136, width: 136 }}
                  alt="patner1"
                />
                <Image
                  src={Sally}
                  style={{ height: 136, width: 136 }}
                  alt="patner1"
                />
                <Image
                  src={Sally}
                  style={{ height: 136, width: 136 }}
                  alt="patner1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;

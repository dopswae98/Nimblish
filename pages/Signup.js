import React from "react";
import Navbar2 from "../components/Navbar2";

const Signup = () => {
  return (
    <div>
      <section className="nav-section2">
        <Navbar2 />
      </section>
      <section
        className="pt-3"
        style={{
          background:
            "linear-gradient(0deg, #FFF 0%, #FFF 100%), lightgray 50% / cover no-repeat;",
        }}
      >
        <div className="container">
          <div className="row g-0">
            <div
              className="col-md-6"
              style={{
                borderRadius: "56px 0px 0px 16px",
                backgroundColor: "rgba(255,255,255,0.60)",
                backdropFilter: "blur(0px)",
              }}
            >
              <div className="steps h-100">sds</div>
            </div>
            <div
              className="col-md-6"
              style={{
                borderRadius: "0px 16px 56px 0px",
                backgroundColor: "#FFEEDF",
              }}
            >
              <div className="contact-info mt-3 py-5 px-5">
                <p className="contact-text">Contact Information</p>
                <p className="contact-text2 text-start">
                  Kindly complete your account information
                </p>
                <div className="row">
                  <div className="col-md-8">
                    <input
                      className="w-100 contact-border bg-transparent contact-text outline-0 p-2"
                      type="text"
                      placeholder="First Name"
                      style={{ outline: "none" }}
                    />
                    <input
                      className="w-100 my-4 contact-border bg-transparent contact-text outline-0 p-2"
                      type="text"
                      placeholder="First Name"
                      style={{ outline: "none" }}
                    />
                    <input
                      className="w-100 contact-border bg-transparent contact-text outline-0 p-2"
                      type="text"
                      placeholder="First Name"
                      style={{ outline: "none" }}
                    />
                    <input
                      className="w-100 mt-4 contact-border bg-transparent contact-text outline-0 p-2"
                      type="text"
                      placeholder="First Name"
                      style={{ outline: "none" }}
                    />
                    <button className="btn contact-button text-white mt-5 py-2">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchicon from "../public/vuesaxoutlinesearchnormal.svg";
import Image from "next/image";

// import "bootstrap/dist/js/bootstrap.js";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Accordionone from "../components/Accordionone";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      {/* <FontAwesomeIcon
        icon={faCheck}
        className="fas fa-check"
        style={{ color: "red", fontSize: 12, width:36, height:36 }}
      /> */}
      <div className="faq-hero bg8 p-5">
        <div className="text-center">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="signup-text2">Frequently Asked Questions</p>
              <p className="text3">
                Having troubles with Nimble? Here are some of the most
                frequently asked questions.
              </p>
              <div
                className="bg-white p-2 d-flex align-items-center justify-content-center"
                style={{ borderRadius: 20 }}
              >
                <Image src={searchicon} alt="search" />
                <input
                  className="w-100 ms-2 bg-transparent border-0 text-start search-text"
                  style={{ outline: "none" }}
                  type="text"
                  placeholder="Search for a key word"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="accordion-section py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">{/* <Accordionone /> */}</div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div>
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What is Nimble?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first{" "}
                        {`item's`} accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How can I play trivia games?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second{" "}
                        {`item's`} accordion body. {`Let's`} imagine this being
                        filled with some actual content.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How can I earn rewards?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third{" "}
                        {`item's`} accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Do I need to pay before I play?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third{" "}
                        {`item's`} accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How do I collect my rewards?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third{" "}
                        {`item's`} accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Can I invite people?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third{" "}
                        {`item's`} accordion body. Nothing more exciting
                        happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a
                        bit more representative of how this would look in a
                        real-world application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-9 mx-auto text-center">
              <p className="answer-text">
                Didn’t find any answers to your question?{" "}
                <span className="sendus">Send us a message</span>{" "}
                <span className="getback">
                  , we will get back to you as soon as possible
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;

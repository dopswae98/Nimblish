// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchicon from "../public/vuesaxoutlinesearchnormal.svg";
import Image from "next/image";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <FontAwesomeIcon className="text-dark" icon="fa-regular fa-eye" />
      <FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" />
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
                  className="w-100 ms-2 bg-transparent border-0 search-text"
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
            <div className="col-md-8 mx-auto">
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;

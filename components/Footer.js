import React from "react";
import Image from "next/image";
import linkedin from "../public/linkedin-link.svg";
import instagram from "../public/instagram--png@2x.png";
import twitter from "../public/twitter-link.svg";

const Footer = () => {
  return (
    <div>
      <div className="py-5 container">
        <div className="row">
          <div className="col-md-3 text-white">
            <div className="text-capitalize footer-header mb-2">company</div>
            <div className="text-capitalize">
              <ul className="list-unstyled">
                <li>home</li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 text-white">
            <div className="text-capitalize footer-header mb-2">Support</div>
            <div>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>{`FAQ'S`}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 text-white">
            <div className="footer-header mb-2">Legal</div>
            <div>
              <ul className="list-unstyled">
                <li>Private Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-capitalize text-white footer-header fw-bolds mb-2">
              Kindly:
            </div>
            <div className="footer-buttons">
              <button className="btn btn1 w-100 bg1 text-white font1 py-2 px-3 text-uppercase">
                <i class="fa fa-clipboard  me-1" aria-hidden="true"></i>
                schedule consultarion
              </button>
              <button className="btn w-100 btn2 outline1 mt-3 text-white font1 py-2 px-3 text-uppercase">
                <i class="fa fa-phone  me-1" aria-hidden="true"></i>
                contact us
              </button>
            </div>
          </div>
        </div>
        <div className="rights mt-4 mt-md-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="left font2 text-white">
              &copy; <span>All rights reserved</span>
            </div>
            <div className="d-flex gap-2 icons align-items-center">
              <Image src={linkedin} width={32} height={32} alt="linkedin" />
              <Image src={instagram} width={32} height={32} alt="linkedin" />
              <Image src={twitter} width={32} height={32} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

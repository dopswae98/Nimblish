import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-md navbar-dark bg-themes bg-dark bg-opacity-25"
        aria-label="Fourth navbar example"
      >
        <div class="container">
          <Link class="navbar-brand d-flex me-5" href="/">
            <Image src={logo} alt="logo" style={{ height: 21, width: 65 }} />
            {/* <span className="text-colors fw-bold">SteelCraft Ent.</span> */}
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul
              class="navbar-nav fw-bold text-dark me-auto mb-2 mb-md-0 me-5"
              style={{ fontSize: 14 }}
            >
              <li class="nav-item">
                <Link class="nav-link text-dark fw-bold" href="/Products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-dark"
                  href="/About"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-dark"
                  href="/FAQ"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center justify-content-center">
              <Link
                className="nav-link text-white fw-bold me-4"
                href="/#"
                tabindex="-1"
                aria-disabled="true"
              >
                Login
              </Link>
              <button
                className="connect-wallet btn bg1 rounded-pill text-white fw-bold px-4"
                style={{ fontSize: 12 }}
              >
                <Link
                  href="/Signup"
                  style={{ textDecoration: "none" }}
                  className="text-white"
                >
                  Sign Up
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../pages/Home.css";
import "./Footer.css";
import { Outlet, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-responsive">
      <section className="footer-left">
        <figure className="brand-title">
          <a href="index.html">
            <p className="brand-title3">
              Fat<span className="brand-title4">Cat</span> Guitars
            </p>
          </a>
        </figure>
        <p className="footer-links">
          <Link to="/">Home</Link>|<Link to="/Products">Products</Link>|
          <Link to="/Contact">Contact</Link>
        </p>
        <p className="footer-company-name">
          Copyright © 2022 All rights Reserved -
        </p>
      </section>
      <section className="footer-center">
        <div>
          <img className="address" src="images/address.png" alt="logo" />
          <p>
            <span>1234 FatCat St. Charlotte, NC 28123</span>
          </p>
        </div>
        <div>
          <img className="phone" src="images/phone.png" alt="logo" />
          <p>(704)123-4567</p>
        </div>
        <div>
          <img className="email" src="images/mail.png" alt="logo" />
          <p>
            <span>fatcat@guitars.com</span>
          </p>
        </div>
      </section>
      <section className="footer-right">
        <p className="footer-about">
          <span>Follow us on our social media!</span>
          <strong>Click the links below to check us out!</strong>
        </p>
        <div className="footer-icons">
          <a href="https://www.instagram.com">
            <img className="ig" src="logos/instagram.png" alt="instagram" />
          </a>

          <a href="https://www.twitter.com">
            <img className="tw" src="logos/twitter.png" alt="twitter" />
          </a>

          <a href="https://www.facebook.com">
            <img className="fb" src="logos/facebook.png" alt="facebook" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

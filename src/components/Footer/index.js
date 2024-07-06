import React from "react";
import Socials from "../partials/Socials";
import { Link } from "react-router-dom";

function Footer({ developLink }) {
  return (
    <div className="footer-container">
      <div className="footer">
        <p className="title">Hispanic Association of Computer Scientists</p>
        <p>
          Email:{" "}
          <a className="fancy" href="mailto:texashacs@gmail.org">
            texashacs@gmail.org
          </a>
        </p>
        <p>
          Corporate:{" "}
          <a className="fancy" href="mailto:texashacs.corporate@gmail.com">
            texashacs.corporate@gmail.com
          </a>
        </p>
        <p style={{ paddingBottom: '20px' }} >
          Join our developer team: {" "}
          <Link to="/develop" className="fancy" target={developLink?.target}>
            Form Link
          </Link>
        </p>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
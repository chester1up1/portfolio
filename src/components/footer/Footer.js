import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import me from "../../img/me.jpg";
import mail from "../../img/mail.svg";
import linkedin from "../../img/linkedin.svg";
import inst from "../../img/inst.svg";
import { Translate } from "react-redux-i18n";
export const Footer = (props) => {
  const { scrollContacts } = props;
  return (
    <div className="Footer" ref={scrollContacts}>
      <div className="photo">
        <div>
          <img src={me} alt="me" />
        </div>
      </div>
      <div className="links">
        <a href="mailto:chester1upxd@gmail.com">
          <div>
            <img src={mail} alt="mail" />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vlad-samoylyk-1707b01b7/"
        >
          <div>
            <img src={linkedin} alt="linkedin" />
          </div>
        </a>
        <a target="_blank" href="https://www.instagram.com/vlad_samoylyk/">
          <div>
            <img src={inst} alt="inst" />
          </div>
        </a>
      </div>
      <div className="contacts">
        <p>
          <Translate value="where" />
        </p>
        <p>chester1upxd@gmail.com</p>
        <p>+380971709390</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

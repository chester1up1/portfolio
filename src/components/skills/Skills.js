import React, { Component } from "react";
import { connect } from "react-redux";
import MainSkills from "./MainSkills";
import SecondarySkills from "./SecondarySkills";
import WOW from "wow.js";
import "./style.scss";
import { Translate } from "react-redux-i18n";
export const Skills = (props) => {
  const { scrollSkills } = props;
  const wow = new WOW();
  wow.init();
  return (
    <div ref={scrollSkills} className="skills_ wow slideInUp">
      <p className="titleMain  wow fadeIn">
        -<Translate value="Skills" />-
      </p>
      <div className="skills">
        <MainSkills />
        <SecondarySkills />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

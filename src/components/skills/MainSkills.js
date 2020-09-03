import React, { Component } from "react";
import { connect } from "react-redux";
import WOW from "wow.js";
import { Translate } from "react-redux-i18n";
export const MainSkills = () => {
  const wow = new WOW();
  wow.init();
  return (
    <div className="main_skills ">
      <p className="title_skills wow fadeIn">
        <Translate value="Main" />
      </p>
      <div className="skills_box">
        <div className="skill wow fadeInLeftBig">
          <div className="pie p1" />
          <p>HTML</p>
        </div>
        <div className="skill wow fadeInLeftBig" data-wow-delay="0.2s">
          <div className="pie p2" />
          <p>CSS</p>
        </div>
        <div className="skill wow fadeInLeftBig" data-wow-delay="0.3s">
          <div className="pie p3" />
          <p>JS</p>
        </div>
        <div className="skill wow fadeInLeftBig" data-wow-delay="0.4s">
          <div className="pie p4" />
          <p>REACT.JS</p>
        </div>
        <div className="skill wow fadeInLeftBig" data-wow-delay="0.5s">
          <div className="pie p5" />
          <p>REDUX</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainSkills);

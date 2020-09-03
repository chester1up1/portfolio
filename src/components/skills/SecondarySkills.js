import React, { Component } from "react";
import { connect } from "react-redux";
import WOW from "wow.js";
import { Translate } from "react-redux-i18n";
export const SecondarySkills = () => {
  const wow = new WOW();
  wow.init();
  return (
    <div className="secondary_skills">
      <p className="title_skills wow fadeIn">
        <Translate value="Secondary" />
      </p>
      <div className="skills_box">
        <div className="skill_small  wow fadeInRightBig">
          <p>TypeScript</p>
          <div className="band">
            <div className="band_1" />
          </div>
        </div>
        <div className="skill_small wow fadeInRightBig" data-wow-delay="0.2s">
          <p>Scss</p>{" "}
          <div className="band">
            <div className="band_2" />
          </div>
        </div>
        <div className="skill_small wow fadeInRightBig" data-wow-delay="0.3s">
          <p>SQL</p>{" "}
          <div className="band">
            <div className="band_3" />
          </div>
        </div>
        <div className="skill_small wow fadeInRightBig" data-wow-delay="0.4s">
          <p>Firebase</p>{" "}
          <div className="band">
            <div className="band_4" />
          </div>
        </div>
        <div className="skill_small wow fadeInRightBig" data-wow-delay="0.5s">
          <p>Git</p>{" "}
          <div className="band">
            <div className="band_5" />
          </div>
        </div>
        <div className="skill_small wow fadeInRightBig" data-wow-delay="0.6s">
          <p>Bootstrap</p>{" "}
          <div className="band">
            <div className="band_6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SecondarySkills);

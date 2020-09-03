import React, { useEffect } from "react";
import { connect } from "react-redux";
import case_ from "../../img/case_.svg";
import calendar from "../../img/calendar.svg";
import marker from "../../img/marker.svg";
import WOW from "wow.js";
import { Translate } from "react-redux-i18n";
import Language from "./Language";
export const Exp = () => {
  const wow = new WOW();
  wow.init();

  return (
    <div className="edu wow fadeInRightBig">
      <div className="edu_header">
        <img src={case_} alt="case_" className="img_edu" />
        <p>
          <Translate value="Experience" />
        </p>
      </div>
      <div className="edu_info">
        <div className="edu_info_header">
          <img src={calendar} alt="calendar" />
          <p>
            <Translate value="Date3" />
          </p>
          <img src={marker} alt="marker" />
          <p>
            <Translate value="Location1" />
          </p>
        </div>
        <div className="university ">
          <p>
            <Translate value="Work" />
          </p>
        </div>
        <div className="specialities">
          <li>
            <span className="orange_span">
              <Translate value="Position: " />
            </span>
            <Translate value="SpecialitiesText3" />
          </li>
        </div>
      </div>
      <Language />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Exp);

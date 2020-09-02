import React, { useEffect } from "react";
import { connect } from "react-redux";
import edu from "../../img/edu.svg";
import calendar from "../../img/calendar.svg";
import marker from "../../img/marker.svg";
import WOW from "wow.js";
import { Translate } from "react-redux-i18n";
export const Edu = () => {
  const wow = new WOW();
  wow.init();

  return (
    <div className="edu wow fadeInLeftBig">
      <div className="edu_header">
        <img src={edu} alt="edu" className="img_edu" />
        <p>
          <Translate value="Education" />
        </p>
      </div>
      <div className="edu_info">
        <div className="edu_info_header">
          <img src={calendar} alt="calendar" />
          <p>
            <Translate value="Date1" />{" "}
          </p>
          <img src={marker} alt="marker" />
          <p>
            <Translate value="Location1" />
          </p>
        </div>
        <div className="university ">
          <p>
            <Translate value="University1" />
          </p>
        </div>
        <div className="specialities">
          <li>
            <span className="orange_span">
              <Translate value="Specialities" />
            </span>
            <Translate value="SpecialitiesText1" />
          </li>
        </div>
      </div>
      <div className="edu_info">
        <div className="edu_info_header">
          <img src={calendar} alt="calendar" />
          <p>
            <Translate value="Date2" />{" "}
          </p>
          <img src={marker} alt="marker" />
          <p>
            <Translate value="Location2" />
          </p>
        </div>
        <div className="university ">
          <p>
            <Translate value="University2" />
          </p>
        </div>
        <div className="specialities">
          <li>
            <span className="orange_span">
              <Translate value="Specialities" />
            </span>
            <Translate value="SpecialitiesText2" />
          </li>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Edu);

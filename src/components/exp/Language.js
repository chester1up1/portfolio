import React from "react";
import language from "../../img/language.svg";
import calendar from "../../img/calendar.svg";
import marker from "../../img/language.svg";
import { Translate } from "react-redux-i18n";
export default function Language() {
  return (
    <div>
      <div className="edu_header">
        <img src={language} alt="language" className="img_edu" />
        <p>
          <Translate value="Experience" />
        </p>
      </div>
      <div className="edu_info_lang">
        <div className="language">
          <p>Ukrainian </p>
          <div className="range">
            <div className="complete_100" />
          </div>
        </div>
        <div className="language">
          <p>Russian </p>
          <div className="range">
            <div className="complete_100" />
          </div>
        </div>
        <div className="language">
          <p>English </p>
          <div className="range">
            <div className="complete_50" />
          </div>
        </div>
      </div>
    </div>
  );
}

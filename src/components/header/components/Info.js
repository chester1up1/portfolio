import React, { Component } from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
export const Info = () => {
  return (
    <div className="info animate__fadeIn animate__animated">
      <p className="title animate__animated animate__fadeInLeftBig">
        <Translate value="InfoTitle1" />
      </p>
      <p className="title animate__animated animate__fadeInLeftBig">
        <Translate value="InfoTitle2" />
      </p>
      <p className="text animate__animated animate__fadeInUpBig">
        <Translate value="InfoText1" />
      </p>
      <p className="title animate__animated animate__fadeInLeftBig">
        <Translate value="InfoTitle3" />
      </p>
      <p className="text animate__animated animate__fadeInUpBig">
        <Translate value="InfoText2" />
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Info);

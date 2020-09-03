import React, { Component } from "react";
import { connect } from "react-redux";
import Edu from "./Edu";
import Exp from "./Exp";
import "./style.scss";

export const ExpEdu = (props) => {
  const { scrollEduExp } = props;
  return (
    <div className="expedu" ref={scrollEduExp}>
      <div className="expeduBox">
        <Edu />
        <Exp />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExpEdu);

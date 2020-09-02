import React, { Component } from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
export const Name = () => {
  return (
    <div className="name_box animate__animated animate__fadeInLeft">
      <p className="name_p">
        <Translate value="Name" />
      </p>
      <p className="sur_p">
        <Translate value="Surname" />
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Name);

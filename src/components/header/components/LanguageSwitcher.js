import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { supportedLocales } from "../../../config/i18n";
import { setLocaleWithFallback } from "../../../redux/actions/i18n";
export const LanguageSwitcher = (props) => {
  const { setLocaleWithFallback, locale } = props;
  const handleLanguageLinkClick = (e, code) => {
    e.preventDefault();
    setLocaleWithFallback(code);
  };

  return (
    <div className="language_switcher animate__animated animate__fadeInRight">
      {Object.keys(supportedLocales).map((code) => (
        <p
          href="#"
          key={code}
          // active={code === this.props.locale}
          onClick={(e) => handleLanguageLinkClick(e, code)}
          className={code === locale ? "active_p" : ""}
        >
          {supportedLocales[code]}
        </p>
      ))}
    </div>
  );
};

LanguageSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleWithFallback: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ locale: state.i18n.locale });

const mapDispatchToProps = { setLocaleWithFallback };

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);

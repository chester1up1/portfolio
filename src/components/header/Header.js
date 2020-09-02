import React from "react";
import { connect } from "react-redux";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import LanguageSwitcher from "./components/LanguageSwitcher";
function Header(props) {
  return (
    <div className="header">
      {/* <div className="left_header_row"> */}
      <div className="left_header">
        <Logo />
        <NavBar />
      </div>
      <LanguageSwitcher />
    </div>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

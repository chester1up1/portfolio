import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import About from "../header/About";
import { PropTypes } from "prop-types";
import { getDir } from "../../redux/selectors/i18n";
import ExpEdu from "../exp/ExpEdu";

export const Main = (props) => {
  const scrollEduExp = useRef(null);
  const { dir } = props;
  useEffect(() => {
    document.dir = dir === "ar" ? "rtl" : "ltr";
  }, [dir]);
  return (
    <div className="App">
      <About scrollEduExp={scrollEduExp} />
      <ExpEdu scrollEduExp={scrollEduExp} />
    </div>
  );
};

Main.propTypes = {
  dir: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ dir: getDir(state) });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

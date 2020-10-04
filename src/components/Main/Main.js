import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import About from "../header/About";
import { PropTypes } from "prop-types";
import { getDir } from "../../redux/selectors/i18n";
import ExpEdu from "../exp/ExpEdu";
import Skills from "../skills/Skills";
import Works from "../works/Works";
import SecretPlace from "../secretPlace/SecretPlace";
import Footer from "../footer/Footer";

export const Main = (props) => {
  const scrollAbout = useRef(null);
  const scrollEduExp = useRef(null);
  const scrollSkills = useRef(null);
  const scrollWorks = useRef(null);
  const scrollContacts = useRef(null);
  const { dir } = props;
  useEffect(() => {
    document.dir = dir === "ar" ? "rtl" : "ltr";
  }, [dir]);
  return (
    <div className="App">
      <About
        scrollEduExp={scrollEduExp}
        scrollSkills={scrollSkills}
        scrollWorks={scrollWorks}
        scrollContacts={scrollContacts}
      />
      <ExpEdu scrollEduExp={scrollEduExp} />
      <Skills scrollSkills={scrollSkills} />
      <Works scrollWorks={scrollWorks} />
      <SecretPlace />
      <Footer scrollContacts={scrollContacts} />
    </div>
  );
};

Main.propTypes = {
  dir: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ dir: getDir(state) });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
import { SetActive } from "../../../redux/actions/actions";

function NavBar(props) {
  const { SetActive, active, scrollEduExp } = props;
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(scrollEduExp);
  return (
    <div className="navBar animate__animated animate__fadeInDown">
      <ul>
        <li
          className={active == "about" ? "li_active" : ""}
          onClick={() => SetActive("about")}
        >
          <Translate value="About" />
        </li>
        <li
          className={active == "exp" ? "li_active" : ""}
          onClick={() => SetActive("exp")}
          onClick={executeScroll}
        >
          <Translate value="ExpEdu" />
        </li>
        <li
          className={active == "skills" ? "li_active" : ""}
          onClick={() => SetActive("skills")}
        >
          <Translate value="Skills" />
        </li>
        <li
          className={active == "works" ? "li_active" : ""}
          onClick={() => SetActive("works")}
        >
          <Translate value="Works" />
        </li>
        <li
          className={active == "contacts" ? "li_active" : ""}
          onClick={() => SetActive("contacts")}
        >
          <Translate value="Contacts" />
        </li>
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  active: state.nav.active,
});

const mapDispatchToProps = {
  SetActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

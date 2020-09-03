import React from "react";
import Header from "./Header";
import "./style.scss";
import Name from "./components/Name";
import Info from "./components/Info";

export default function About(props) {
  const { scrollEduExp, scrollSkills } = props;
  return (
    <div className="about">
      <Header scrollEduExp={scrollEduExp} scrollSkills={scrollSkills} />
      <div className="me">
        <Name />
        <Info />
      </div>
    </div>
  );
}

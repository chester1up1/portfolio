import React from "react";
import Header from "./Header";
import "./style.scss";
import Name from "./components/Name";
import Info from "./components/Info";

export default function About(props) {
  const { scrollEduExp } = props;
  return (
    <div className="about">
      <Header scrollEduExp={scrollEduExp} />
      <div className="me">
        <Name />
        <Info />
      </div>
    </div>
  );
}

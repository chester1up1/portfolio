import React from "react";
import Header from "./Header";
import "./style.scss";
import Name from "./components/Name";
import Info from "./components/Info";

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="me">
        <Name />
        <Info />
      </div>
    </div>
  );
}

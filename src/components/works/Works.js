import React, { Component } from "react";
import { connect } from "react-redux";
import Work from "./components/Work";
import { data } from "./data";
import "./style.scss";
export const Works = (props) => {
  const { scrollWorks } = props;
  return (
    <div className="works" ref={scrollWorks}>
      {data.map((item) => (
        <Work
          name={`NameWork${item.id}`}
          info={`WorkInfo${item.id}`}
          img={item.img}
          git={item.github}
          url={item.preview}
          img_type={item.img_type}
          img_porc={item.img_porc}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Works);

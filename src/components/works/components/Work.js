import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import github from "../../../img/github.svg";
import view from "../../../img/view.svg";
import eye from "../../../img/eye.svg";
import { Translate } from "react-redux-i18n";
import WOW from "wow.js";
export const Work = (props) => {
  const { name, img, git, url, info, img_type, img_porc } = props;
  const [ScrollSlider, setScrollSlider] = useState(false);
  const handleChange = () => {
    setScrollSlider(!ScrollSlider);
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="work wow fadeInLeftBig">
      <div className="work_text ">
        <div className="work_text_name">
          <p className="work_text_title">
            <Translate value="Work_Name" />{" "}
          </p>
          <p className="Name">
            <Translate value={`${name}`} />
          </p>
        </div>
        <div className="work_text_info">
          <p className="work_text_title">
            <Translate value="Info" />{" "}
          </p>
          <p className="work_text_text">
            <Translate value={`${info}`} />
          </p>
        </div>
        <div className="work_text_links">
          {/* <p>Link1</p>
          <p>Link2</p> */}
          {git !== "" ? (
            <a href={git} target="_blank">
              <div className="link">
                <img src={github} alt="github" />
                <p>github</p>
              </div>
            </a>
          ) : (
            <a>
              <div className="link">
                <img src={github} alt="github" />
              </div>
            </a>
          )}
          {url !== "" ? (
            <a href={url} target="_blank">
              <div className="link">
                <img src={eye} alt="eye" />

                <p>preview</p>
              </div>
            </a>
          ) : (
            <a>
              <div className="link">
                <img src={eye} alt="eye" />
              </div>
            </a>
          )}
          {url == "" && git == "" ? <p className="com">coming soon...</p> : ""}
        </div>
      </div>
      <div className="work_img">
        {img_type == "row" ? (
          <img
            className="arrow"
            src={view}
            alt="view"
            onClick={handleChange}
            style={{
              transform: ScrollSlider ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        ) : (
          <img src={view} alt="view" style={{ opacity: 0 }} />
        )}
        <div className="slider_box">
          <div
            className="slider"
            style={{
              transform: ScrollSlider ? "translateX(-102%)" : "translateX(0%)",
            }}
          >
            {img_type == "row" ? (
              img.map((item) => (
                <img src={item} alt="img" style={{ width: `${img_porc}%` }} />
              ))
            ) : (
              <div className="img_box">
                {img.map((item) => (
                  <img src={item} alt="img" style={{ width: `${img_porc}%` }} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Work);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { TimeTik, GetGold, BuyTheSecret } from "./actions";
import { Translate } from "react-redux-i18n";
import WOW from "wow.js";
import { Spinner } from "reactstrap";
export const SecretPlace = (props) => {
  const { TimeTik, GetGold, time, gold, BuyTheSecret } = props;
  const [Click, setClick] = useState(true);
  const [Facts, setFacts] = useState([1, 2]);
  const [Fact, setFact] = useState("");
  const [error, setError] = useState(false);
  const [load, setload] = useState(false);
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  useEffect(() => {
    if (time == 5) {
      setClick(true);
    }
  }, [time]);
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 1000);
  }, [error]);
  const handleClick = () => {
    if (time == 5 && gold !== 100) {
      GetGold();
      setClick(false);
      let time_ = 0;
      const Interval = setInterval(() => {
        if (time_ < 5) {
          time_ = time_ + 1;
          TimeTik(time_);
        } else {
          clearInterval(Interval);
        }
      }, 1000);
    }
  };

  const BuyFact = () => {
    if (gold == 100) {
      if (Facts.length !== 0) {
        setload(false);
        let i = Math.floor(Math.random() * Facts.length);
        let item = Facts[i];
        setFacts(Facts.filter((item) => item !== Facts[i]));
        setFact(item);
        BuyTheSecret();
        setTimeout(() => {
          setload(true);
        }, 1500);
      } else {
        setFact("None");
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className="SecretPlace wow fadeInRightBig">
      <div className="title">
        <p>
          <i>
            <Translate value="Secret_Place" />
          </i>
        </p>
      </div>
      <div className="secret_place_box">
        <div className="info">
          {Fact == "" ? (
            <p>
              <p className="span_">
                <Translate value="Buy" />
              </p>
              <Translate value="usl" />,{" "}
              <p className="sale">
                <Translate value="sale" /> <span>{`-99% ` + " "}</span>{" "}
              </p>
              <p className="price">
                <Translate value="Just" /> <i className="sapn">100 {`(c)`} !</i>
              </p>
            </p>
          ) : !load ? (
            <div className="sp">
              <Spinner color="danger" />
            </div>
          ) : (
            <p className="fact">
              <Translate value={`Fact${Fact}`} />
            </p>
          )}

          <div className="btn" onClick={BuyFact}>
            <Translate value="buy_btn" className="span" />
          </div>
        </div>
        <div className="btn_box">
          <div className="logo_">
            <div
              className={!Click ? "logo_no_hover" : "logo"}
              onClick={handleClick}
              style={{
                borderRadius: !Click ? "90px" : "",
                opacity: time / 5,
                backgroundColor: error ? "red" : "#6a12ce",
              }}
            >
              <div className="logo_c">
                <div className="logo_box">
                  <p>C</p>
                </div>
              </div>
            </div>
            <div
              className="logo_fake"
              style={{
                borderRadius: !Click ? "90px" : "",
                opacity: !Click ? 1 : 0,
              }}
            >
              <div className="logo_c">
                <div className="logo_box">
                  <p>C</p>
                </div>
              </div>
            </div>
          </div>
          <p className="time">
            {time == 5 ? (
              <Translate value="here" />
            ) : (
              <span>
                {`${5 - time} `}
                <Translate value="sec" />
              </span>
            )}
          </p>
          <div className="bot">
            <p>
              <span>{gold}</span> / 100
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  time: state.secret.time,
  gold: state.secret.gold,
});

const mapDispatchToProps = { TimeTik, GetGold, BuyTheSecret };

export default connect(mapStateToProps, mapDispatchToProps)(SecretPlace);

import classes from "./hero.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [openZoneSelecting, setOpenZoneSelecting] = useState(false);
  const [openPriceSelecting, setOpenPriceSelecting] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.greetingBox}>
          <h1>Q-House, quality houses delivered at reasonable prices.</h1>
          <span>
            All of our products developed by high experiences team. We hope you
            enjoy seeing our products and contact us whenever you want more
            information.
          </span>
        </div>
        <div className={classes.searchComponent}>
          <div className={classes.newOrAll}>
            <div
              className={selectedButton == 1 ? classes.active : ""}
              onClick={() => {
                setSelectedButton(1);
              }}
            >
              <FontAwesomeIcon
                className={classes.FontAwesomeIcon}
                icon={faCircleDot}
              />{" "}
              All houses
            </div>
            <div
              className={selectedButton == 2 ? classes.active : ""}
              onClick={() => {
                setSelectedButton(2);
              }}
            >
              <FontAwesomeIcon
                className={classes.FontAwesomeIcon}
                icon={faCircleDot}
              />{" "}
              New only
            </div>
          </div>
          <div className={classes.productProperty}>
            <div className={classes.zoneDropdown}>
              <div className={classes.king}>
                <span>Location</span>
                <div className={classes.dropdown}>
                  <div className={classes.inDropdown}>
                    <div className={classes.box}>
                      <span>Nonthaburi</span>
                      <div className={classes.icon}>
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                    </div>
                    <div className={classes.box}>
                      <span>Nakorn Pathom</span>
                      <div className={classes.icon}>
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                    </div>
                    <div className={classes.box}>
                      <span>Pathum Tani</span>
                      <div className={classes.icon}>
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.priceDropdown}></div>
            <div className={classes.search}></div>
          </div>
        </div>
      </div>
      <div className={classes.right}></div>
    </div>
  );
};

export default Hero;

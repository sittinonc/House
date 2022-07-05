import { useState } from "react";

import classes from "./Options.module.scss";
import SideWidget from "../SideWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//Max option is 5
const Utility = (props) => {
  const [dropdownCommand, setDropdownCommand] = useState(null);
  const [one, setOne] = useState(props.config.each[0]);
  const [two, setTwo] = useState(props.config.each[1]);
  const [three, setThree] = useState(props.config.each[2]);
  const [four, setFour] = useState(props.config.each[3]);
  const [five, setFive] = useState(props.config.each[4]);
  const [optionx, setOptionx] = useState([]);
  const options = [];

  return (
    <SideWidget>
      <div className={classes.utility}>
        <div className={classes.head}>
          <span>{props.config.head}</span>
        </div>
        <div className={classes.box}>
          {props.config.each.map((e, i) => {
            console.log("e.toString + i.toString");
            console.log(e.label);
            return (
              <>
                <div
                  className={classes.each}
                  key={i}
                  onClick={() => {
                    if (dropdownCommand === e.label) {
                      setDropdownCommand(null);
                    } else {
                      setDropdownCommand(e.label);
                    }
                  }}
                >
                  <div className={classes.label}>
                    <span id={e.label}>{e.label}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={classes.icon}
                  />
                  <div
                    className={
                      dropdownCommand === e.label
                        ? classes.dropdownActive
                        : classes.dropdownOff
                    }
                  >
                    {e.val.map((event, index) => {
                      return (
                        <div
                          className={classes.dropdownItem}
                          key={index}
                          onClick={() => {
                            document.getElementById(e.label).innerText = event;
                          }}
                        >
                          <span id={e.toString + event.toString}>{event}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </SideWidget>
  );
};
export default Utility;

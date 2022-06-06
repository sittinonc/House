import classes from "./selectOption.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faCircleDot as faCircleDotReg,
} from "@fortawesome/free-regular-svg-icons";

import { useState, useEffect } from "react";

const SelectLocation = (props) => {
  const [dropDownActive, setDropDownActive] = useState(0);
  const [active, setActive] = useState(false);

  const excludeSelectedLocation = (arr, target) => {
    let x = arr.filter((e, i) => {
      return e != target;
    });

    console.log("Existing arr:", x);
    return x;
  };

  const includeCheck = (arr, target) => {
    let check = 0;
    arr.map((e, i) => {
      if (e == target) {
        check = 1;
      }
    });
    return check;
  };

  const dropdownHandler = () => {
    if (active) {
      setActive(false);
      setActive((prev) => {
        return prev - 1;
      });
    } else {
      setActive((prev) => {
        return prev + 1;
      });
      setActive(true);
    }
  };
  useEffect(() => {}, [props.selectedPrice]);
  return (
    <div className={classes.zoneDropdown}>
      <div
        className={classes.king}
        onClick={() => {
          if (active) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        <span
          className={
            active == true
              ? classes.spanActive + " " + classes.topic
              : classes.topic
          }
        >
          <FontAwesomeIcon icon={faHouseChimney} />{" "}
          {`${props.selectedLocation.length} พื้นที่`}
        </span>
      </div>
      <div className={active ? classes.active : classes.unActive}>
        <div className={classes.dropdown}>
          <div className={classes.inDropdown}>
            {props.data.map((e, i) => {
              return (
                <div
                  key={i}
                  className={classes.box}
                  onClick={() => {
                    if (includeCheck(props.selectedLocation, e) == 0) {
                      props.setSelectedLocation((prev) => [...prev, e]);
                    } else {
                      props.setSelectedLocation((prev) =>
                        excludeSelectedLocation(prev, e)
                      );
                    }
                  }}
                >
                  <div className={classes.icon}>
                    <FontAwesomeIcon
                      icon={
                        includeCheck(props.selectedLocation, e)
                          ? faCircleDot
                          : faCircle
                      }
                    />
                  </div>
                  <span>{e}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.configBox}>
            <div
              className={classes.clear}
              onClick={() => {
                setTimeout(() => {}, 100);
                props.setSelectedLocation([]);
              }}
            >
              <span>ล้าง</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLocation;

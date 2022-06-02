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
  const [dropdown, setDropdown] = useState(false);

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
    if (dropdown) {
      setDropdown(false);
      setDropDownActive((prev) => {
        return prev - 1;
      });
    } else {
      setDropDownActive((prev) => {
        return prev + 1;
      });
      setDropdown(true);
    }
  };
  const excludeSelectedPrice = (arr, target) => {
    let x = arr.filter((e, i) => {
      return e != target;
    });

    console.log("Existing arr:", x);
    return x;
  };
  const priceIconCheck = (arr, target) => {
    let check = 0;
    arr.map((e, i) => {
      if (target <= e) {
        check = 1;
      }
    });
    return check;
  };

  const showMax = (arr) => {
    let max = 0;
    arr.map((e, i) => {
      if (max < e) {
        max = e;
      }
    });
    return max;
  };
  useEffect(() => {}, [props.selectedPrice]);
  return (
    <div className={classes.zoneDropdown}>
      <div className={classes.king} onClick={dropdownHandler}>
        <span
          className={
            dropdown == true
              ? classes.spanActive + " " + classes.topic
              : classes.topic
          }
        >
          <FontAwesomeIcon icon={faHouseChimney} />{" "}
          {props.selectedLocation.length == 0
            ? "Location"
            : `${props.selectedLocation.length} location${
                props.selectedLocation.length == 1 ? "" : "s"
              } selected`}
        </span>
      </div>
      <div className={dropdown ? classes.active : classes.unActive}>
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
                  <span>{e}</span>
                  <div className={classes.icon}>
                    <FontAwesomeIcon
                      icon={
                        includeCheck(props.selectedLocation, e)
                          ? faCircleDot
                          : faCircle
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLocation;

import Box from "@mui/material/Box";
import SliderUnstyled from "@mui/material/Slider";
import { useState } from "react";
import classes from "./priceSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import NumberRange from "./NumberRange/NumberRange";

function valuetext(value) {
  return `${value}°C`;
}

const PriceSlider = (props) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState([0, 10]);
  const [userSetPrice, setUserSteprice] = useState(false);
  const handleChange = (event, newValue) => {
    if (!userSetPrice) {
      setUserSteprice(true);
    }
    setValue(newValue);
  };
  return (
    <div className={classes.container}>
      <div className={classes.king}>
        <span
          className={
            active == true
              ? classes.spanActive + " " + classes.topic
              : classes.topic
          }
          onClick={() => {
            if (active) {
              setActive(false);
            } else {
              setActive(true);
            }
          }}
        >
          <FontAwesomeIcon className={classes.icon} icon={faTag} />{" "}
          {"Price" + ": " + value[0] + " - " + value[1] + " ล้าน"}
        </span>
      </div>

      <div className={active == true ? classes.active : classes.unActive}>
        <NumberRange />
      </div>
    </div>
  );
};

export default PriceSlider;

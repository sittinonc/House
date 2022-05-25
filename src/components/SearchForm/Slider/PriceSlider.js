import Box from "@mui/material/Box";
import SliderUnstyled from "@mui/material/Slider";
import { useState } from "react";
import classes from "./priceSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faSackDollar} />{" "}
          {"Price" + ": " + value[0] + " - " + value[1] + " ล้าน"}
        </span>
      </div>

      <div className={active == true ? classes.active : classes.unActive}>
        <Box className={classes.dropdown} sx={{ width: 233 }}>
          <SliderUnstyled
            style={{ color: "grey" }}
            value={value}
            step={1}
            min={0}
            max={10}
            marks={props.data}
            defaultValue={[5, 8]}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </Box>
      </div>
    </div>
  );
};

export default PriceSlider;

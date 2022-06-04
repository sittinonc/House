import { useState } from "react";
import classes from "./priceSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    myAwesomeColor: palette.augmentColor({
      color: {
        main: "rgb(224, 173, 61)",
      },
    }),
  },
});

const accent = purple[500]; // #e040fb
function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 5,
  },
  {
    value: 8,
  },
  {
    value: 10,
  },
  {
    value: 12,
  },
];

const PriceSlider = (props) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState([0, 10]);
  const [fromV, setFromV] = useState(0);
  const [toV, setToV] = useState(10);
  const [showV, setShowV] = useState([]);

  const [userSetPrice, setUserSteprice] = useState(false);

  const handleSliderChange = (event, newValue) => {
    console.log(document.getElementById("from").value);
    document.getElementById("from").value = newValue[0];
    document.getElementById("to").value = newValue[1];
    //console.log(newValue);
    if (!userSetPrice) {
      setUserSteprice(true);
    }
    setFromV(newValue[0]);
    setToV(newValue[1]);
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
          {showV.length === 0
            ? "ช่วงราคา"
            : "ช่วงราคา" + ": " + fromV + " - " + toV + " ล้าน"}
        </span>
      </div>
      <div className={active == true ? classes.active : classes.unActive}>
        <div className={classes.dropdown}>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "75%" }}>
              <Slider
                id="slider"
                size="small"
                getAriaLabel={() => "Temperature range"}
                value={[Number(fromV), Number(toV)]}
                color="myAwesomeColor"
                onChange={handleSliderChange}
                marks={marks}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                step={1}
                max={12}
              />
            </Box>
          </ThemeProvider>
          <div className={classes.dropdownConfig}>
            <div className={classes.from}>
              <Grid item xs={10} sm={1}>
                <TextField
                  required
                  fullWidth
                  id="from"
                  defaultValue={Number(value[0])}
                  onChange={(event) => {
                    console.log(event.target.value);
                    if (!userSetPrice) {
                      setUserSteprice(true);
                    }
                    setFromV(event.target.value);
                  }}
                />
              </Grid>
            </div>
            <div className={classes.to}>
              <Grid item xs={10} sm={1}>
                <TextField
                  required
                  fullWidth
                  id="to"
                  defaultValue={Number(value[1])}
                  onChange={(event) => {
                    console.log(event.target.value);
                    if (!userSetPrice) {
                      setUserSteprice(true);
                    }
                    if (!(event.target.value > 12)) {
                      setToV(12);
                    }
                    setToV(event.target.value);
                  }}
                />
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;

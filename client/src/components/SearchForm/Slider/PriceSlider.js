import { useState } from "react";
import classes from "./priceSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const marks = [
  {
    value: 0,
  },
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
  const [value, setValue] = useState([0, 12]);
  const [fromV, setFromV] = useState(0);
  const [toV, setToV] = useState(12);
  const [showV, setShowV] = useState([]);
  const [userSetPrice, setUserSteprice] = useState(false);

  const handleSliderChange = (event, newValue) => {
    if (!userSetPrice) {
      setUserSteprice(true);
    }
    let buff = 0;
    if (newValue[1] < document.getElementById("to").value) {
      console.log("One");
      if (newValue[1] == newValue[0]) {
        buff = newValue[0];
        setToV(Number(buff) + 1);
        document.getElementById("to").value = Number(buff) + 1;
      } else {
        setFromV(Number(newValue[0]));
        document.getElementById("from").value = Number(newValue[0]);

        setToV(Number(newValue[1]));
        document.getElementById("to").value = Number(newValue[1]);
      }
    } else if (newValue[0] > document.getElementById("from").value) {
      console.log("Two");
      if (newValue[0] == newValue[1]) {
        buff = newValue[0];
        setFromV(Number(newValue[0]) - 1);
        document.getElementById("from").value = Number(newValue[0]) - 1;

        setToV(Number(buff));
        document.getElementById("to").value = Number(buff);
      } else {
        setFromV(Number(newValue[0]));
        document.getElementById("from").value = Number(newValue[0]);

        setToV(Number(newValue[1]));
        document.getElementById("to").value = Number(newValue[1]);
      }
    } else {
      setFromV(Number(newValue[0]));
      document.getElementById("from").value = Number(newValue[0]);

      setToV(Number(newValue[1]));
      document.getElementById("to").value = Number(newValue[1]);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.king}>
        <span
          className={
            active == true && props.dropdownCommand === "price"
              ? classes.spanActive + " " + classes.topic
              : classes.topic
          }
          onClick={() => {
            if (active && props.dropdownCommand === "price") {
              props.setDropdownCommand((prev) => {});
              setActive(false);
            } else {
              console.log(props.dropdownCommand);
              props.setDropdownCommand("price");
              setActive(true);
            }
          }}
        >
          <FontAwesomeIcon className={classes.icon} icon={faTag} />{" "}
          {showV.length === 0
            ? "ช่วงราคา"
            : `ช่วงราคา: ${showV[0]} - ${showV[1]} ล้าน`}
        </span>
      </div>
      <div
        className={
          active == true && props.dropdownCommand == "price"
            ? classes.active
            : classes.unActive
        }
      >
        <div className={classes.dropdown}>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "75%" }}>
              <Slider
                disableSwap
                id="slider"
                size="small"
                value={[Number(fromV), Number(toV)]}
                color="myAwesomeColor"
                onChange={handleSliderChange}
                marks={marks}
                valueLabelDisplay="auto"
                min={0}
                step={1}
                max={12}
              />
            </Box>
          </ThemeProvider>
          <div className={classes.dropdownConfig}>
            <div className={classes.inputShow}>
              <div className={classes.from}>
                <Grid item xs={10} sm={1}>
                  <TextField
                    required
                    autoComplete={false}
                    error={false}
                    size="small"
                    fullWidth
                    id="from"
                    defaultValue={Number(value[0]) + " ล้าน"}
                    onFocus={() => {
                      document.getElementById("from").value = "";
                    }}
                    onChange={(event) => {
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
                    size="small"
                    required
                    fullWidth
                    autoComplete={false}
                    error={false}
                    id="to"
                    defaultValue={Number(value[1]) + " ล้าน"}
                    onFocus={() => {
                      document.getElementById("to").value = "";
                    }}
                    onChange={(event) => {
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

            <div className={classes.confirmButton}>
              <div
                className={classes.applyBox}
                onClick={() => {
                  if (document.getElementById("to").value == "") {
                    if (showV.length !== 0) {
                      document.getElementById("to").value = showV[1];
                    } else {
                      document.getElementById("to").value = toV;
                    }
                  }
                  if (document.getElementById("from").value == "") {
                    if (showV.length !== 0) {
                      document.getElementById("from").value = showV[0];
                    } else {
                      document.getElementById("from").value = fromV;
                    }
                  }
                  props.setSelectedPrice([fromV, toV]);
                  props.setDropdownCommand((prev) => {});
                  setShowV([fromV, toV]);
                  setActive(false);
                }}
              >
                <span>ยืนยัน</span>
              </div>
              <div
                className={classes.cancleBox}
                onClick={() => {
                  if (document.getElementById("to").value == "") {
                    if (showV.length !== 0) {
                      document.getElementById("to").value = showV[1];
                    } else {
                      document.getElementById("to").value = toV;
                    }
                  }
                  if (document.getElementById("from").value == "") {
                    if (showV.length !== 0) {
                      document.getElementById("from").value = showV[0];
                    } else {
                      document.getElementById("from").value = fromV;
                    }
                  }
                  props.setDropdownCommand((prev) => {});
                  setActive(false);
                }}
              >
                <span>ยกเลิก</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;

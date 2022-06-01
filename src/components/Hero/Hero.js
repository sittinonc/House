import classes from "./hero.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import {
  faCircle,
  faCircleDot as faCircleDotReg,
} from "@fortawesome/free-regular-svg-icons";
import PriceSlider from "../SearchForm/Slider/PriceSlider";
import SelectOption from "../SearchForm/SelectOption/SelectOption";
const price = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5 ล้าน",
  },
  {
    value: 10,
    label: "10 ล้าน",
  },
];
const Hero = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [locationData, setLocationData] = useState(["นนทบุรี", "นครปฐม"]);

  const [priceData, setPriceData] = useState([4.99, 8.99, 10.99]);

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.greetingBox}>
          <span className={classes.brandText}>
            Q-House, quality houses delivered at reasonable prices.
          </span>
          <span className={classes.subText}>
            All of our products developed by high experiences team.
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
              <span className={classes.topic}>โครงการทั้งหมด</span>
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
              <span className={classes.topic}>โครงการใหม่</span>
            </div>
          </div>
          <div className={classes.productProperty}>
            <SelectOption
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              type="Location"
              data={locationData}
            />
            <PriceSlider
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              type="Price"
              data={price}
            />
            <div className={classes.search}>
              <Button
                className={classes.button}
                style={{ borderRadius: "30px", backgroundColor: "darkblue" }}
                variant="contained"
                size="large"
              >
                ค้นหา
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.img}></div>
      </div>
    </div>
  );
};

export default Hero;

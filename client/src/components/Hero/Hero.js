import classes from './hero.module.scss';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleDot,
  faCircleArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import PriceSlider from '../SearchForm/Slider/PriceSlider';
import SelectLocation from '../SearchForm/SelectOption/SelectLocation';
const price = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 5,
    label: '5 ล้าน',
  },
  {
    value: 10,
    label: '10 ล้าน',
  },
];

const Hero = (props) => {
  const [dropdownCommand, setDropdownCommand] = useState(null);
  const [locationData, setLocationData] = useState([
    'กรุงเทพ',
    'นนทบุรี',
    'นครปฐม',
    'ยะลา',
  ]);
  //api parameter
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(locationData);
  const [selectedPrice, setSelectedPrice] = useState([]);

  let navigate = useNavigate();
  const target = () => {
    let path = '/allprojects';
    navigate(path);
  };
  return (
    <div className={classes.hero}>
      <Navbar username={props.username} setUsername={props.setUsername} />
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.greetingBox}>
            <span className={classes.brandText}>
              Quality houses delivered at reasonable prices.
            </span>
            <span className={classes.subText}>
              All of our products developed by high experiences team.
            </span>
          </div>
          <div className={classes.searchComponent}>
            <div className={classes.newOrAll}>
              <div
                className={selectedButton == 1 ? classes.active : ''}
                onClick={() => {
                  setSelectedButton(1);
                }}
              >
                <FontAwesomeIcon
                  className={classes.FontAwesomeIcon}
                  icon={faCircleDot}
                />{' '}
                <span className={classes.topic}>โครงการทั้งหมด</span>
              </div>
              <div
                className={selectedButton == 2 ? classes.active : ''}
                onClick={() => {
                  setSelectedButton(2);
                }}
              >
                <FontAwesomeIcon
                  className={classes.FontAwesomeIcon}
                  icon={faCircleDot}
                />{' '}
                <span className={classes.topic}>โครงการใหม่</span>
              </div>
            </div>
            <div className={classes.productProperty}>
              <SelectLocation
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                type="Location"
                data={locationData}
                dropdownCommand={dropdownCommand}
                setDropdownCommand={setDropdownCommand}
              />
              <PriceSlider
                dropdownCommand={dropdownCommand}
                setDropdownCommand={setDropdownCommand}
                setSelectedPrice={setSelectedPrice}
              />
              <div className={classes.search}>
                <Button
                  onClick={() => {
                    if (selectedPrice.length === 0) {
                    } else {
                      console.log(
                        `Price: ${selectedPrice[0]} - ${selectedPrice[1]}`
                      );
                    }
                    if (selectedLocation.length === 0) {
                      console.log('Location: ALL');
                    } else {
                      console.log(`Location: ${selectedLocation.length}`);
                    }
                    console.log(`Category: ${selectedButton}`);
                    target();
                  }}
                  className={classes.button}
                  style={{ borderRadius: '30px', backgroundColor: 'darkblue' }}
                  variant="contained"
                  size="large"
                >
                  ค้นหา
                </Button>
              </div>
            </div>
            <div
              className={
                dropdownCommand == null
                  ? classes.scrollDown
                  : classes.scrollDown + ' ' + classes.fade
              }
            >
              {' '}
              <FontAwesomeIcon
                className={classes.FontAwesomeIcon}
                icon={faCircleArrowDown}
              />
              <span
                onClick={() => {
                  window.scroll({
                    top: 780,
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                เลื่อนลงเพื่อชมโครงการแนะนำของ EngEach
              </span>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <img
            className={classes.heroImg}
            src="https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import Axios from 'axios';
import SpinLoad from '../SpinLoad/SpinLoad';
import classes from './SuggestedHouse.module.scss';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import uri from '../config';
import ShowHouse from '../../UI/ShowHouse/ShowHouse';
const SuggestedHouse = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    Axios.get(`${uri}/api/suggest`).then((response) => {
      setHouses(response.data);
    });
  }, []);
  if (houses.length !== 0) {
    return (
      <div className={classes.SuggestedHouse}>
        <div className={classes.text}>
          <div className={classes.topic}>
            <div className={classes.bigCircle}>
              <div className={classes.smallCircle}>
                <FcHome className={classes.icon} />
              </div>
            </div>
            <span>โครงการแนะนำ</span>
          </div>
          <div className={classes.detail}>
            <div className={classes.textBox}>
              <div className={classes.spacer}></div>
              <p>
                See our reccommended houses for you. We have a lot of houses for
                you to choose from.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.house}>
          <div className={classes.box}>
            {houses.map((e, i) => {
              return <ShowHouse data={e} />;
            })}
          </div>
        </div>
        <div className={classes.buttonBox}>
          <div className={classes.button}>
            <Link
              to="allprojects"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              ดูโครงการทั้งหมด
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <SpinLoad />;
  }
};
export default SuggestedHouse;

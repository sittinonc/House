import { useState, useEffect } from 'react';

import classes from './Reccommend.module.scss';
import SideWidget from '../../../UI/SideWidget/SideWidget';
import EachReccommend from './EachReccommend/EachReccommend';
import Axios from 'axios';
import uri from '../../config';
const Reccommend = () => {
  //API
  const [recHouses, setRecHouses] = useState([]);

  useEffect(() => {
    Axios.get(`${uri}/api/suggest`).then((response) => {
      setRecHouses(response.data);
    });
  }, []);
  if (recHouses.length > 0) {
    return (
      <SideWidget>
        <div className={classes.reccommend}>
          <div className={classes.head}>
            <span>โครงการแนะนำ</span>
          </div>
          <div className={classes.box}>
            {recHouses.map((e, i) => {
              return <EachReccommend key={i} data={e} />;
            })}
          </div>
        </div>
      </SideWidget>
    );
  }
};

export default Reccommend;

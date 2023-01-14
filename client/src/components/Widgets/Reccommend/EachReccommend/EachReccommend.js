import classes from './EachReccommend.module.scss';

import { useNavigate } from 'react-router-dom';
import functions from '../../../../function';

const EachReccommend = (props) => {
  let navigate = useNavigate();
  const target = () => {
    let path = `/house/${props.data.name}`;
    navigate(path);
  };
  return (
    <div className={classes.each} onClick={target}>
      <div className={classes.imgBox}>
        <img
          className={classes.img}
          src={`${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/image/view/${props.data.photos.filenames[0]}`}
        />
      </div>
      <div className={classes.details}>
        <span className={classes.head}>{props.data.name}</span>
        <span className={classes.sub}>
          {functions.priceFormat(props.data.houseDetails.price)} บาท
        </span>
      </div>
    </div>
  );
};

export default EachReccommend;

import classes from "./EachReccommend.module.scss";

import functions from "../../../../function";

const EachReccommend = (props) => {
  return (
    <div className={classes.each}>
      <div className={classes.imgBox}>
        <img className={classes.img} src={props.data.photo} />
      </div>
      <div className={classes.details}>
        <span className={classes.head}>{props.data.label}</span>
        <span className={classes.sub}>
          {functions.priceFormat(props.data.price)} บาท
        </span>
      </div>
    </div>
  );
};

export default EachReccommend;

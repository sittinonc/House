import { useState } from "react";
import classes from "./Collection.module.scss";
import MainWidget from "../MainWidget";
import { BsCircleFill } from "react-icons/bs";
const Collection = (props) => {
  const [selected, setSeleected] = useState(props.config.collection[0]);
  return (
    <MainWidget>
      <div className={classes.container}>
        <div className={classes.head}>
          <span>{props.config.head}</span>
        </div>
        <div className={classes.imgBox}>
          <img src={selected} />;
        </div>
        <div className={classes.button}>
          {props.config.collection.map((e, i) => {
            return (
              <div className={classes.button}>
                <BsCircleFill className={classes.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </MainWidget>
  );
};

export default Collection;

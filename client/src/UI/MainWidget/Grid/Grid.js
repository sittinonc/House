import classes from "./Grid.module.scss";
import MainWidget from "../MainWidget";

const Grid = (props) => {
  return (
    <MainWidget>
      <div className={classes.container}>
        <div className={classes.head}>{props.config.head}</div>
        <div className={classes.content}>
          {props.config.data.map((e, i) => {
            return (
              <div className={classes.each}>
                <div className={classes.label}>{e.label}:</div>
                <div className={classes.val}>{e.val}</div>
              </div>
            );
          })}
        </div>
      </div>
    </MainWidget>
  );
};

export default Grid;

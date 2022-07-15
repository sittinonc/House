import classes from "./MainWidget.module.scss";

const MainWidget = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>{props.children}</div>
    </div>
  );
};

export default MainWidget;

import classes from "./SideWidget.module.scss";

const SideWidget = (props) => {
  return (
    <div className={classes.widget}>
      <div className={classes.container}>{props.children}</div>
    </div>
  );
};

export default SideWidget;

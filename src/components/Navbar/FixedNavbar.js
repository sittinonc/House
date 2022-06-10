import classes from "./FixedNavbar.module.scss";

const FixedNavbar = (props) => {
  return (
    <div className={props.navStatus === 1 ? classes.FixedNavbar : classes.hide}>
      <div className={classes.container}></div>
    </div>
  );
};
export default FixedNavbar;

import classes from "./Section.module.scss";

const Section = (props) => {
  return <div className={classes.Section}>{props.children}</div>;
};
export default Section;

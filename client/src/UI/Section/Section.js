import classes from "./Section.module.scss";

const Section = (props) => {
  return <div className={classes.section}>{props.children}</div>;
};
export default Section;

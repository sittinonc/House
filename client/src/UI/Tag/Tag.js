import classes from "./Tag.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Tag = (props) => {
  const pathTransalte = (thai) => {
    if (thai === "หน้าแรก") {
      return "home";
    }
    if (thai === "โครงการทั้งหมด") {
      return "allProjects";
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {props.pagesTags.map((e, i) => {
          return (
            <Link
              key={i}
              className={
                classes.tag +
                " " +
                (i === props.pagesTags.length - 1
                  ? classes.current
                  : classes.normal)
              }
              to={`/${pathTransalte(e)}`}
            >
              {e}
              {i < props.pagesTags.length - 1 ? (
                <FontAwesomeIcon
                  style={{ fontSize: "11px" }}
                  icon={faAngleRight}
                />
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tag;

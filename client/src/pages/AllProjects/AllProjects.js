import classes from "./AllProjects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import ShowHouse from "../../UI/ShowHouse/ShowHouse";

const Houses = ["h1", "h2", "h3"];
const AllProjects = () => {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1 className={classes.head}>โครงการทั้งหมด</h1>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.attributesSet}>
            <div style={{ marginLeft: "5%" }} className={classes.eachAttribute}>
              <span>โครงการ</span>
              <FontAwesomeIcon className={classes.icon} icon={faChevronDown} />
            </div>
            <div className={classes.eachAttribute}>
              <span>พื้นที่</span>
              <FontAwesomeIcon className={classes.icon} icon={faChevronDown} />
            </div>
            <div className={classes.eachAttribute}>
              <span>ราคาสูงไปต่ำ</span>
              <FontAwesomeIcon className={classes.icon} icon={faChevronDown} />
            </div>
          </div>
        </div>
        <div className={classes.house}>
          <div className={classes.box}>
            {Houses.map((e, i) => {
              return <ShowHouse data={e} />;
            })}
          </div>
        </div>
      </div>

      <div className={classes.sideWidgetBox}></div>
    </div>
  );
};

export default AllProjects;

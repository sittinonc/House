import classes from "./PropertySet.module.scss";
import { MdBed, MdOutlineBathtub } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiArea } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";

const PropertySet = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.each}>
        <div className={classes.icon}>
          <MdBed />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>{props.data.bedroom}</div>
          <div className={classes.label}>ห้องนอน</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <MdOutlineBathtub />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>{props.data.bathRoom}</div>
          <div className={classes.label}>ห้องน้ำ</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <AiFillCar />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>{props.data.parkingLot}</div>
          <div className={classes.label}>คัน</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <BiArea />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>{props.data.area}</div>
          <div className={classes.label}>{"ตารางเมตร"}</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <FiCalendar />
        </div>
        <div className={classes.text}>
          <div className={classes.label}>ปีสร้าง:</div>
          <div className={classes.num}>{props.data.yearBuilt}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertySet;

import classes from "./PropertySet.module.scss";
import { MdBed, MdOutlineBathtub } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiArea } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";

const PropertySet = (props) => {
  console.log(props.data);
  return (
    <div className={classes.container}>
      <div className={classes.each}>
        <div className={classes.icon}>
          <MdBed />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>
            {props.data.houseDetails.utility.bedRoom}
          </div>
          <div className={classes.label}>ห้องนอน</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <MdOutlineBathtub />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>
            {props.data.houseDetails.utility.bathRoom}
          </div>
          <div className={classes.label}>ห้องน้ำ</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <AiFillCar />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>
            {props.data.houseDetails.utility.parkingLot}
          </div>
          <div className={classes.label}>คัน</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <BiArea />
        </div>
        <div className={classes.text}>
          <div className={classes.num}>
            {props.data.houseDetails.utility.area}
          </div>
          <div className={classes.label}>{"ตารางเมตร"}</div>
        </div>
      </div>
      <div className={classes.each}>
        <div className={classes.icon}>
          <FiCalendar />
        </div>
        <div className={classes.text}>
          <div className={classes.label}>สร้าง:</div>
          <div className={classes.num}>
            {props.data.buildingInformation.start}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySet;

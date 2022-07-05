import classes from "./ListedHouse.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineBed } from "react-icons/md";
import { BiBath, BiArea } from "react-icons/bi";

const ListedHouse = (props) => {
  const priceFormat = (num) => {
    let string = num.toString();
    if (string.length == 6) {
      const a = string.slice(0, 3);
      const b = string.slice(3, 6);
      return `${a},${b}`;
    } else if (string.length == 7) {
      const a = string.slice(0, 1);
      const b = string.slice(1, 4);
      const c = string.slice(4, 10);
      return `${a},${b},${c}`;
    } else if (string.length == 8) {
      const a = string.slice(0, 2);
      const b = string.slice(2, 5);
      const c = string.slice(5, 11);
      return `${a},${b},${c}`;
    } else if (string.length == 9) {
      const a = string.slice(0, 3);
      const b = string.slice(3, 6);
      const c = string.slice(6, 12);
      return `${a},${b},${c}`;
    } else {
      return num;
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.ListedHouse}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="https://i.pinimg.com/originals/45/3d/a9/453da9f7af0a8be2d6bec12fac5765a1.jpg"
          />
        </div>
        <div className={classes.details}>
          <div className={classes.top}>
            <span className={classes.major}>{priceFormat(5000000)} บาท</span>
            <span className={classes.minor}>
              11/25 ซอยxx ถนนxx นครปฐม ตำบล อำเภอ 102931
            </span>
          </div>
          <div className={classes.bottom}>
            <div className={classes.property}>
              <div className={classes.symbol}>
                <MdOutlineBed className={classes.icon} />
                <span>3</span>
              </div>
              <div className={classes.text}>ห้องนอน</div>
            </div>
            <div className={classes.property}>
              <div className={classes.symbol}>
                <BiBath className={classes.icon} />
                <span>3</span>
              </div>
              <div className={classes.text}>ห้องน้ำ</div>
            </div>
            <div className={classes.property}>
              <div className={classes.symbol}>
                <BiArea className={classes.icon} />
                <span>52</span>
              </div>
              <div className={classes.text}>ตารางเมตร</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListedHouse;

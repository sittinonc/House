import classes from "./ShowHouse.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineBed } from "react-icons/md";
import { BiBath, BiArea } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ShowHouse = (props) => {
  const house = {
    id: "ab123",
    name: "บ้านเดี่ยว นครปฐม...",
    status: "กำลังก่อสร้าง",
    houseDetails: {
      price: 5000000,
      project: "โครงการ A นครปฐม",
      category: "บ้านเดี่ยว",
      utility: {
        area: 80,
        usableArea: 55,
        bedroom: 3,
        bathRoom: 3,
        parkingLot: 2,
        others: "ติดแอร์ทุกห้องนอน มีเฟอร์นิเจอร์พร้อมอยู่",
      },
    },
    location: {
      province: "นครปฐม",
      subDistrict: "ตำบล",
      district: "อำเภอ",
      zipCode: "102991",
      road: "ถนน",
      alley: "ซอย...",
      moreDetails: "ห่างกับโลตัสนครปฐม 2km, ติดกับบ้านเดี่ยว...",
      latitude: "123123123",
      longitude: "88312300",
    },
    photos: {
      house: ["filename1", "filename2", "filename3"],
      plan: ["filename1", "filename2"],
    },
    buildingInformation: {
      start: "12/05/2021",
      finish: "05/03/2022",
    },
    websiteInfo: {
      suggested: 0,
      firstTimeListed: "10/03/2022",
      lastedEdited: "21/06/2022",
    },
  };
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
  let navigate = useNavigate();
  const target = () => {
    let path = `/house/${house.id}`;
    navigate(path);
  };
  return (
    <div className={classes.container} onClick={target}>
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
export default ShowHouse;

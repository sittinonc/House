import classes from "./ShowHouse.module.scss";
import { MdOutlineBed } from "react-icons/md";
import { BiBath, BiArea } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import functions from "../../function";

const ShowHouse = (props) => {
  console.log(props.data);
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

  let navigate = useNavigate();
  const target = () => {
    let path = `/house/${props.data.name}`;
    navigate(path);
  };
  return (
    <div className={classes.container} onClick={target}>
      <div className={classes.ListedHouse}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src={`${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/image/view/${props.data.photos.filenames[0]}`}
          />
        </div>
        <div className={classes.details}>
          <div className={classes.top}>
            <span className={classes.major}>
              {functions.priceFormat(props.data.houseDetails.price)} บาท
            </span>
            <span className={classes.minor}>
              {props.data.location.road +
                " " +
                props.data.location.subDistrict.name +
                " " +
                props.data.location.district.name +
                " " +
                props.data.location.province.name +
                " " +
                props.data.location.moreDetails}
            </span>
          </div>
          <div className={classes.bottom}>
            <div className={classes.property}>
              <div className={classes.symbol}>
                <MdOutlineBed className={classes.icon} />
                <span>{props.data.houseDetails.utility.bedRoom}</span>
              </div>
              <div className={classes.text}>ห้องนอน</div>
            </div>
            <div className={classes.property}>
              <div className={classes.symbol}>
                <BiBath className={classes.icon} />
                <span>{props.data.houseDetails.utility.bathRoom}</span>
              </div>
              <div className={classes.text}>ห้องน้ำ</div>
            </div>
            <div className={classes.property}>
              <div className={classes.symbol}>
                <BiArea className={classes.icon} />
                <span>{props.data.houseDetails.utility.area}</span>
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

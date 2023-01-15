import classes from './ShowHouse.module.scss';
import { MdOutlineBed } from 'react-icons/md';
import { BiBath, BiArea } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import functions from '../../function';
import uri from '../../components/config';
const ShowHouse = (props) => {
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
            src={
              props.data.photos.filenames[0] !== ''
                ? `${uri}/image/view/${props.data.photos.filenames[0]}`
                : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg'
            }
          />
        </div>
        <div className={classes.details}>
          <div className={classes.top}>
            <span className={classes.major}>
              {functions.priceFormat(props.data.houseDetails.price)} บาท
            </span>
            <span className={classes.minor}>
              {props.data.location.road +
                ' ' +
                props.data.location.subDistrict.name +
                ' ' +
                props.data.location.district.name +
                ' ' +
                props.data.location.province.name +
                ' ' +
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

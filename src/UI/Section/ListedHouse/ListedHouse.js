import classes from "./ListedHouse.module.scss";

const ListedHouse = (props) => {
  return (
    <div className={classes.ListedHouse}>
      <div className={classes.imgBox}>
        <img
          className={classes.img}
          src="https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
        />
      </div>
      <div className={classes.details}>
        <div className={classes.top}>
          <span className={classes.major}>{props.data} บาท</span>
          <span className={classes.minor}>ที่อยู่</span>
        </div>
        <div className={classes.bottom}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ListedHouse;

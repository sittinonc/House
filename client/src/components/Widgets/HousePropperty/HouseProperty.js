import classes from "./HouseProperty.module.scss";
import MainWidget from "../../../UI/MainWidget/MainWidget";
import PropertySet from "./PropertySet/PropertySet";

const HouseProperty = (props) => {
  return (
    <MainWidget>
      <div className={classes.container}>
        <div className={classes.top}>
          <span>ภาพรวม</span>
        </div>
        <div className={classes.down}>
          <div className={classes.latestUpdate}>
            <span className={classes.head}>อัพเดทล่าสุด:</span>
            <span className={classes.detail}>21 พฤศจิกายน 2022</span>
          </div>
          <PropertySet data={props.data.houseDetails.utility} />
        </div>
        <div className={classes.x}></div>
      </div>
    </MainWidget>
  );
};

export default HouseProperty;

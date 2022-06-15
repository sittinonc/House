import classes from "./SubscribeBanner.module.scss";
import EmailSubscription from "../../UI/Section/EmailSubscription/EmailSubscription";

const SubscribeBanner = () => {
  return (
    <div className={classes.OfferLand}>
      <div className={classes.container}>
        <span className={classes.head}>
          <span>*กรอก Email เพื่อรับข้อเสนอ ข้อมูลข่าวสาร</span>
          <span>และโปรโมชั่นใหม่จากเรา</span>
        </span>
        <div className={classes.buttonBox}>
          <EmailSubscription />
        </div>
      </div>
    </div>
  );
};
export default SubscribeBanner;

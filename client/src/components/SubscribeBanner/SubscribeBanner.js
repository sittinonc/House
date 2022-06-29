import classes from "./SubscribeBanner.module.scss";
import EmailSubscription from "../../UI/EmailSubscription/EmailSubscription";

const SubscribeBanner = () => {
  return (
    <div className={classes.OfferLand}>
      <div className={classes.container}>
        <span className={classes.head}>
          <span className={classes.head}>ติดตามข่าวาสาร</span>
          <span>กรอก Email เพื่อรับข้อเสนอ ข้อมูลข่าวสาร และโปรโมชั่นใหม่จากเรา</span>
        </span>
        <div className={classes.buttonBox}>
          <EmailSubscription />
        </div>
      </div>
    </div>
  );
};
export default SubscribeBanner;

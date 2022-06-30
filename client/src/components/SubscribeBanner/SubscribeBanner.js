import classes from "./SubscribeBanner.module.scss";
import EmailSubscription from "../../UI/EmailSubscription/EmailSubscription";

const SubscribeBanner = () => {
  return (
    <div className={classes.OfferLand}>
      <div className={classes.container}>
        <div className={classes.head}>
          <span className={classes.head}>ติดตามข่าวาสาร</span>
          <span className={classes.sub}>กรอก Email เพื่อรับข้อเสนอ ข้อมูลข่าวสาร และโปรโมชั่นใหม่จากเรา</span>
        </div>
        <div className={classes.buttonBox}>
          <EmailSubscription />
        </div>
      </div>
    </div>
  );
};
export default SubscribeBanner;

import classes from "./MobileHero.module.scss";
import { Link } from "react-router-dom";

const MobileHero = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.heroImg}
        src="https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
      />
      <div className={classes.content}>
        <div className={classes.details}>
          <div className={classes.text}>
            <span>Quality houses, dilivered at resonable prices</span>
          </div>
          <div className={classes.button}>
            <div className={classes.blank}></div>
            <div className={classes.use}>
              <Link to="allprojects">
                <span className={classes.text}>ดูโครงการทั้งหมด</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;

import classes from "./MobileHero.module.scss";

const MobileHero = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.heroImg}
        src="https://i.pinimg.com/736x/ce/87/8d/ce878dd1e278970f1658abf42fc39130--story-house-modern-houses.jpg"
      />
      <div className={classes.content}>
        <div className={classes.details}>
          <div className={classes.text}>
            Quality houses, dilivered at resonable prices
          </div>
          <div className={classes.button}>
            <div className={classes.blank}></div>
            <div className={classes.use}>ดูโครงการทั้งหมด</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;

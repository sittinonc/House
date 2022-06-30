import classes from "./MobileHero.module.scss";

const MobileHero = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.heroImg}
        src="https://i.pinimg.com/564x/0f/8b/a5/0f8ba5b8d78ed7c43ababd190aafb282.jpg"
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

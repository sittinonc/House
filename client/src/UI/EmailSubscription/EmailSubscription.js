import classes from "./EmailSubscription.module.scss";
import Button from "@mui/material/Button";

const EmailSubscription = () => {
  return (
    <div className={classes.EmailSubscription}>
      <div className={classes.container}>
        <div className={classes.input}>
          <input type="text" placeholder="Email@gmail.com" />
        </div>
        <div className={classes.button}>
          <Button
            onClick={() => {
              console.log("Click");
            }}
            className={classes.button}
            variant="contained"
          >
            ตกลง
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EmailSubscription;

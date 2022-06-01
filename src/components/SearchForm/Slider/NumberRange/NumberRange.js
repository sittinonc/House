import classes from "./NumberRange.module.scss";
import Button from "@mui/material/Button";

const NumberRange = () => {
  return (
    <div className={classes.container}>
      <div className={classes.numberInput}>
        <div className={classes.from}>
          <label htmlFor="from">จาก</label>
          <input name="from" type="number" />
        </div>
        <div className={classes.to}>
          <label htmlFor="to">ถึง</label>
          <input name="to" type="number" />
        </div>
      </div>
      <div className={classes.confirmation}>
        <Button
          className={classes.button}
          style={{ borderRadius: "30px", backgroundColor: "darkblue" }}
          variant="contained"
          size="large"
        >
          ยืนยัน
        </Button>
        <Button
          className={classes.button}
          style={{ borderRadius: "30px", backgroundColor: "darkblue" }}
          variant="contained"
          size="large"
        >
          ยกเลิก
        </Button>
      </div>
    </div>
  );
};
export default NumberRange;

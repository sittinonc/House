import classes from "./ListedHouse.module.scss";

const ListedHouse = (props) => {
  return (
    <div className={classes.ListedHouse}>
      <span>{props.data}</span>
    </div>
  );
};
export default ListedHouse;

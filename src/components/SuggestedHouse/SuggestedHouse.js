import classes from "./SuggestedHouse.module.scss";
import ListedHouse from "../../UI/Section/ListedHouse/ListedHouse";
const Houses = ["h1", "h2", "h3", "h4", "h5", "h6"];
const SuggestedHouse = () => {
  return (
    <div className={classes.SuggestedHouse}>
      <div className={classes.box}>
        {Houses.map((e, i) => {
          return <ListedHouse data={e} />;
        })}
      </div>
    </div>
  );
};
export default SuggestedHouse;

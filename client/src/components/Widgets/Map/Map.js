import classes from "./Map.module.scss";
import Collection from "../../../UI/MainWidget/Collection/Collection";

const Map = (props) => {
  const config = {
    head: "แผนที่",
    collection: [
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/bcib7jcmkralsqkbhsu9/Real%20Madrid%20Santiago%20Bernabeu%20Stadium%20&%20Museum%20Entrance%20Ticket%20in%20Madrid.jpg",
      "https://www.si.com/.image/t_share/MTg4ODgxMTI1MTI3NDk3MjQ4/imago1011329909h.jpg",
      "https://cdn.vox-cdn.com/thumbor/4n_19J5qTdERIFGrGWmmMtQCjGo=/0x0:2940x4000/1200x800/filters:focal(1332x1189:1802x1659)/cdn.vox-cdn.com/uploads/chorus_image/image/70977702/1402863504.0.jpg",
    ],
  };

  return (
    <Collection
      config={config}
      setSelectedPhoto={props.setSelectedPhoto}
      setSelected={props.setSelected}
    />
  );
};

export default Map;

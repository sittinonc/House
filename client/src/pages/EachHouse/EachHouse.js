import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./EachHouse.module.scss";

import NavMobileOverlay from "../../components/Navbar/MobilePagesNavbar/NavMobileOverlay/NavMobileOverlay";
import MobilePagesNavbar from "../../components/Navbar/MobilePagesNavbar/MobilePagesNavbar";
import PagesNavbar from "../../components/Navbar/PagesNavbar/PagesNavbar";
import PhotoShowcase from "../../components/PhotoShowcase/PhotoShowcase";
import BottomSection from "../../components/BottomSection/BottomSection";

const EachHouse = (props) => {
  const { id } = useParams();

  const [navMobileOverlay, setNavMobileOverlay] = useState(null);
  const [screenStatus, setScreenStatus] = useState(
    window.innerWidth < 1024 ? "mobile" : "desktop"
  );
  const reportWindowSize = (e) => {
    if (e.target.innerWidth < 1024) {
      setScreenStatus("mobile");
    } else {
      setScreenStatus("desktop");
    }
  };
  useEffect(() => {
    props.setPagesTags(["หน้าแรก", "โครงการทั้งหมด", "โครงการ"]);
    props.setCurrentPage("house");
    window.addEventListener("resize", reportWindowSize);
  }, []);
  return (
    <div className={classes.container}>
      {navMobileOverlay ? (
        <NavMobileOverlay
          setCurrentPage={props.setCurrentPage}
          currentPage={props.currentPage}
          setNavMobileOverlay={setNavMobileOverlay}
        />
      ) : null}
      <div className={classes.page}>
        {screenStatus === "desktop" ? (
          <PagesNavbar />
        ) : (
          <MobilePagesNavbar
            navMobileOverlay={navMobileOverlay}
            setNavMobileOverlay={setNavMobileOverlay}
          />
        )}
        <div className={classes.inPage}>
          <PhotoShowcase screenStatus={screenStatus} />
          House id: {id}
        </div>
      </div>
    </div>
  );
};

export default EachHouse;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./EachHouse.module.scss";

import NavMobileOverlay from "../../components/Navbar/MobilePagesNavbar/NavMobileOverlay/NavMobileOverlay";
import MobilePagesNavbar from "../../components/Navbar/MobilePagesNavbar/MobilePagesNavbar";
import PagesNavbar from "../../components/Navbar/PagesNavbar/PagesNavbar";
import PhotoShowcase from "../../components/PhotoShowcase/PhotoShowcase";
import BottomSection from "../../components/BottomSection/BottomSection";

import SelectedPhoto from "../../UI/EachPhoto/SelectedPhoto";
const img0 =
  "https://www.maisonvalentina.net/blog/wp-content/uploads/2020/12/Top-20-Interior-DesignersArchitects-from-Houston-TX-Benjamin-MV.jpg";
const img1 =
  "https://cdn.vox-cdn.com/thumbor/teCEQIxlj9RbCj6P_vlwMopAptQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg";
const img2 =
  "https://aureumterram.com/wp-content/uploads/2020/05/p3-gallery1.jpg";
const img3 =
  "https://www.168tobedesign.co.th/wp-content/uploads/2022/02/modern19.webp";
const img4 =
  "https://cdn-images.prod.thinkofliving.com/wp-content/uploads/1/2022/03/18172737/6-1.jpg";
const EachHouse = (props) => {
  const [photo, setPhoto] = useState([img0, img1, img2, img3, img4]);
  const { id } = useParams();

  const [selected, setSelected] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");
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
      {!selected ? null : (
        <SelectedPhoto
          selectedPhoto={selectedPhoto}
          selected={selected}
          setSelected={setSelected}
        />
      )}
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
          <PhotoShowcase
            selected={selected}
            setSelected={setSelected}
            screenStatus={screenStatus}
            photo={photo}
            setPhoto={setPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
          House id: {id}
        </div>
      </div>
      <BottomSection />
    </div>
  );
};

export default EachHouse;

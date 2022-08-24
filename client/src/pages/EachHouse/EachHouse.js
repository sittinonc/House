import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./EachHouse.module.scss";
import Axios from "axios";
import SpinLoad from "../../components/SpinLoad/SpinLoad";

import NavMobileOverlay from "../../components/Navbar/MobilePagesNavbar/NavMobileOverlay/NavMobileOverlay";
import MobilePagesNavbar from "../../components/Navbar/MobilePagesNavbar/MobilePagesNavbar";
import PagesNavbar from "../../components/Navbar/PagesNavbar/PagesNavbar";
import PhotoShowcase from "../../components/PhotoShowcase/PhotoShowcase";
import Tag from "../../UI/Tag/Tag";
import BottomSection from "../../components/BottomSection/BottomSection";
import Interest from "../../components/Widgets/Interest/Interest";
import Measurement from "../../components/Widgets/Measurement/Measurement";
import Reccommend from "../../components/Widgets/Reccommend/Reccommend";

import HouseHead from "../../components/Widgets/HouseHead/HouseHead";
import HouseProperty from "../../components/Widgets/HousePropperty/HouseProperty";
import Address from "../../components/Widgets/Address/Address";
import AllDetails from "../../components/Widgets/AllDetails/AllDetails";
import Map from "../../components/Widgets/Map/Map";
import SelectedPhoto from "../../UI/SelectedPhoto/SelectedPhoto";

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
  const [thisHouse, setThisHouse] = useState(null);
  const [photo, setPhoto] = useState([]);
  const [map, setMap] = useState([]);
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
    console.log(id);
    Axios.get(
      `${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/api/findbyname/${id}`
    ).then((response) => {
      console.log(response.data);
      setPhoto(response.data.photos.filenames);
      setMap(response.data.photos.blueprints);
      setThisHouse(response.data);
    });
    props.setPagesTags(["หน้าแรก", "โครงการทั้งหมด", `โครงการ: ${id}`]);
    props.setCurrentPage("eachhouse");
    props.setCurrentPage("house");
    window.addEventListener("resize", reportWindowSize);
  }, []);
  if (thisHouse === null || photo.length === 0) {
    return <SpinLoad />;
  } else {
    return (
      <>
        <div className={classes.x}>
          {screenStatus === "desktop" ? (
            <PagesNavbar />
          ) : (
            <MobilePagesNavbar
              navMobileOverlay={navMobileOverlay}
              setNavMobileOverlay={setNavMobileOverlay}
            />
          )}
          {navMobileOverlay ? (
            <NavMobileOverlay
              setCurrentPage={props.setCurrentPage}
              currentPage={props.currentPage}
              setNavMobileOverlay={setNavMobileOverlay}
            />
          ) : null}
          {!selected ? null : (
            <SelectedPhoto
              selectedPhoto={selectedPhoto}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          <PhotoShowcase
            selected={selected}
            setSelected={setSelected}
            screenStatus={screenStatus}
            photo={photo}
            setPhoto={setPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
          <div className={classes.page}>
            <div className={classes.head}>
              <div className={classes.content}>
                <Tag
                  pagesTags={props.pagesTags}
                  setPagesTags={props.setPagesTags}
                />
                <HouseHead data={thisHouse} />
              </div>
            </div>

            <div className={classes.inPage}>
              <div className={classes.main}>
                <div className={classes.content}>
                  <HouseProperty data={thisHouse} />
                  <Address data={thisHouse} />
                  <AllDetails data={thisHouse} />
                  <Map
                    data={map}
                    setSelectedPhoto={setSelectedPhoto}
                    setSelected={setSelected}
                  />
                </div>
              </div>
              <div className={classes.sideWidgetBox}>
                <Interest />
                <Measurement />
                <Reccommend />
              </div>
            </div>
          </div>
        </div>
        <BottomSection />
      </>
    );
  }
};

export default EachHouse;

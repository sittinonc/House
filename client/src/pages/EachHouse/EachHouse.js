import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./EachHouse.module.scss";

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
  //API
  const [houseData, setHouseData] = useState({
    id: "ab123",
    name: "บ้านเดี่ยว นครปฐม...",
    status: "กำลังก่อสร้าง",
    houseDetails: {
      price: 5000000,
      project: "โครงการ A นครปฐม",
      category: "บ้านเดี่ยว",
      utility: {
        area: 80,
        usableArea: 55,
        bedroom: 3,
        bathRoom: 3,
        parkingLot: 2,
        others: "ติดแอร์ทุกห้องนอน มีเฟอร์นิเจอร์พร้อมอยู่",
      },
    },
    location: {
      province: "นครปฐม",
      main: "11/25 ซอยxx ถนนxx นครปฐม ตำบล อำเภอ 102931",
      moreDetails: "ห่างกับโลตัสนครปฐม 2km, ติดกับบ้านเดี่ยว...",
      latitude: "123123123",
      longitude: "88312300",
    },
    photos: {
      house: ["filename1", "filename2", "filename3"],
      plan: ["filename1", "filename2"],
    },
    buildingInformation: {
      start: "12/05/2021",
      finish: "05/03/2022",
    },
    websiteInfo: {
      suggested: 0,
      firstTimeListed: "10/03/2022",
      lastedEdited: "21/06/2022",
    },
  });
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
    props.setPagesTags(["หน้าแรก", "โครงการทั้งหมด", `โครงการ: ${id}`]);
    props.setCurrentPage("eachhouse");
    props.setCurrentPage("house");
    window.addEventListener("resize", reportWindowSize);
  }, []);
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
            <Tag
              pagesTags={props.pagesTags}
              setPagesTags={props.setPagesTags}
            />
            <HouseHead data={houseData} />
          </div>

          <div className={classes.inPage}>
            <div className={classes.main}>
              <div className={classes.content}>
                <HouseProperty data={houseData} />
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
};

export default EachHouse;

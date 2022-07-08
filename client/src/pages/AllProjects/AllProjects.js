import classes from "./AllProjects.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import PagesNavbar from "../../components/Navbar/PagesNavbar/PagesNavbar";
import MobilePagesNavbar from "../../components/Navbar/MobilePagesNavbar/MobilePagesNavbar";
import NavMobileOverlay from "../../components/Navbar/MobilePagesNavbar/NavMobileOverlay/NavMobileOverlay";
import Tag from "../../UI/Tag/Tag";
import ShowHouse from "../../UI/ShowHouse/ShowHouse";

//widgets
import SideWidget from "../../UI/SideWidget/SideWidget";
import Measurement from "../../components/Widgets/Measurement";
import Utility from "../../components/Widgets/Utility";
import Reccommend from "../../components/Widgets/Reccommend/Reccommend";
import { getThemeProps } from "@mui/system";

const AllProjects = (props) => {
  const [trigger550, setTrigger550] = useState(
    window.innerWidth > 550 ? "3%" : "0%"
  );
  const [screenStatus, setScreenStatus] = useState(
    window.innerWidth < 1024 ? "mobile" : "desktop"
  );
  const reportWindowSize = (e) => {
    //console.log(e.target.innerWidth);
    if (e.target.innerWidth < 1024) {
      setScreenStatus("mobile");
    } else {
      setScreenStatus("desktop");
    }
  };
  useEffect(() => {
    props.setPagesTags(["หน้าแรก", "โครงการทั้งหมด"]);
    props.setCurrentPage("allProjects");
    window.addEventListener("resize", reportWindowSize);
  }, []);
  let count = { gridCount: 0, landscapeCount: 0 };
  //dummy data
  const Houses = ["h1", "h2", "h3", "h4"];
  const dummy = {
    location: ["นนทบุรี", "กรุงเทพ", "ชลบุรี", "นครปฐม", "นครนายก"],
    project: [
      "โครงการทั้งหมด",
      "โครงการใหม่",
      "กำลังสร้าง",
      "โครงการปกติ",
      "ขายแล้ว",
    ],
    sort: ["ราคาต่ำไปสูง", "ราคาสูงไปต่ำ", "ใหม่ที่สุด", "เก่าที่สุด"],
  };
  //Data recieve from api, use dummy currently
  const [locationArray, setLocationArray] = useState(dummy.location);
  const [projectArray, setProjectArray] = useState(dummy.project);
  const [sortArray, setSortArray] = useState(dummy.sort);

  const [location, setLocation] = useState("พื้นที่");
  const [project, setProject] = useState("โครงการทั้งหมด");
  const [sort, setSort] = useState("ราคาต่ำไปสูง");

  const [dropdownCommand, setDropdownCommand] = useState(null);
  const [navMobileOverlay, setNavMobileOverlay] = useState(null);

  return (
    <div className={classes.x}>
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
          <div className={classes.container}>
            <div className={classes.wrapper}>
              <Tag
                pagesTags={props.pagesTags}
                setPagesTags={props.setPagesTags}
              />
              <h1 className={classes.head}>โครงการทั้งหมด</h1>
              <div className={classes.attributesSet}>
                <div
                  className={classes.eachAttribute}
                  style={{ marginLeft: trigger550 }}
                >
                  <div
                    className={classes.label}
                    onClick={() => {
                      if (dropdownCommand === "location") {
                        setDropdownCommand(null);
                      } else {
                        setDropdownCommand("location");
                      }
                    }}
                  >
                    <span>{location}</span>
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={faAngleDown}
                    />
                  </div>
                  <div
                    className={
                      dropdownCommand === "location"
                        ? classes.dropdownActive
                        : classes.dropdownNone
                    }
                  >
                    {locationArray.map((e, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setLocation(e);
                            setDropdownCommand(null);
                          }}
                          className={classes.dropdownItem}
                        >
                          <span>{e}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={classes.eachAttribute}>
                  <div
                    className={classes.label}
                    onClick={() => {
                      if (dropdownCommand === "project") {
                        setDropdownCommand(null);
                      } else {
                        setDropdownCommand("project");
                      }
                    }}
                  >
                    <span>{project}</span>
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={faAngleDown}
                    />
                  </div>
                  <div
                    className={
                      dropdownCommand === "project"
                        ? classes.dropdownActive
                        : classes.dropdownNone
                    }
                  >
                    {projectArray.map((e, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setProject(e);
                            setDropdownCommand(null);
                          }}
                          className={classes.dropdownItem}
                        >
                          <span>{e}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={classes.eachAttribute}>
                  <div
                    className={classes.label}
                    onClick={() => {
                      if (dropdownCommand === "sort") {
                        setDropdownCommand(null);
                      } else {
                        setDropdownCommand("sort");
                      }
                    }}
                  >
                    <span>{sort}</span>
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={faAngleDown}
                    />
                  </div>
                  <div
                    className={
                      dropdownCommand === "sort"
                        ? classes.dropdownActive
                        : classes.dropdownNone
                    }
                  >
                    {sortArray.map((e, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setSort(e);
                            setDropdownCommand(null);
                          }}
                          className={classes.dropdownItem}
                        >
                          <span>{e}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={classes.display}>
                  <div
                    className={classes.each}
                    onClick={() => {
                      count.landscapeCount = count.landscapeCount + 1;
                    }}
                  >
                    <FaBars />
                  </div>
                  <div
                    className={classes.each}
                    onClick={() => {
                      count.gridCount = count.gridCount + 1;
                    }}
                  >
                    <BsFillGrid3X3GapFill />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.house}>
              <div className={classes.box}>
                {Houses.map((e, i) => {
                  return <ShowHouse data={e} />;
                })}
              </div>
            </div>
          </div>

          <div className={classes.sideWidgetBox}>
            {/*Utility*/}
            <Utility />
            {/*หน่วยวัดพื้นที่*/}
            <Measurement />
            {/*Reccommend*/}
            <Reccommend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

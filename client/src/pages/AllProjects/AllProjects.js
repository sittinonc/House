import classes from './AllProjects.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Axios from 'axios';
import SpinLoad from '../../components/SpinLoad/SpinLoad';

import PagesNavbar from '../../components/Navbar/PagesNavbar/PagesNavbar';
import MobilePagesNavbar from '../../components/Navbar/MobilePagesNavbar/MobilePagesNavbar';
import NavMobileOverlay from '../../components/Navbar/MobilePagesNavbar/NavMobileOverlay/NavMobileOverlay';
import Tag from '../../UI/Tag/Tag';
import ShowHouse from '../../UI/ShowHouse/ShowHouse';
import BottomSection from '../../components/BottomSection/BottomSection';

//widgets
import Measurement from '../../components/Widgets/Measurement/Measurement';
import Utility from '../../components/Widgets/Utility/Utility';
import Reccommend from '../../components/Widgets/Reccommend/Reccommend';

const AllProjects = (props) => {
  const [allHouses, setAllHouses] = useState([]);
  const trigger550 = window.innerWidth > 550 ? '3%' : '0%';
  const [screenStatus, setScreenStatus] = useState(
    window.innerWidth < 1024 ? 'mobile' : 'desktop'
  );
  const reportWindowSize = (e) => {
    if (e.target.innerWidth < 1024) {
      setScreenStatus('mobile');
    } else {
      setScreenStatus('desktop');
    }
  };

  let count = { gridCount: 0, landscapeCount: 0 };
  const projectArray = [
    'โครงการทั้งหมด',
    'โครงการใหม่',
    'กำลังสร้าง',
    'โครงการปกติ',
    'ขายแล้ว',
  ];
  const sortArray = [
    'ราคาต่ำไปสูง',
    'ราคาสูงไปต่ำ',
    'ใหม่ที่สุด',
    'เก่าที่สุด',
  ];
  const [filteredHouse, setFilteredHouse] = useState([]);
  const [locationChoice, setLocationChoice] = useState([]);
  const [location, setLocation] = useState('พื้นที่ทั้งหมด');
  const [project, setProject] = useState('โครงการทั้งหมด');
  const [sort, setSort] = useState('ราคาต่ำไปสูง');

  const [dropdownCommand, setDropdownCommand] = useState(null);
  const [navMobileOverlay, setNavMobileOverlay] = useState(null);
  const allLocation = (houses) => {
    const allLocation = new Map();

    houses.forEach((house) => {
      if (allLocation.has(house.location.province.name)) {
        allLocation.set(
          house.location.province.name,
          allLocation.get(house.location.province.name) + 1
        );
      } else {
        allLocation.set(house.location.province.name, 1);
      }
    });
    return ['พื้นที่ทั้งหมด', ...Array.from(allLocation.keys())];
  };

  const filter = (houses) => {
    if (houses !== undefined && houses !== null && houses.length > 0) {
      let filteredHouses = houses;

      // filter by location
      if (location !== 'พื้นที่ทั้งหมด') {
        filteredHouses = filteredHouses.filter(
          (house) => house.location.province.name === location
        );
      }

      // filter by project
      if (project !== 'โครงการทั้งหมด') {
        console.log(filteredHouses[0].status === project);
        filteredHouses = filteredHouses.filter(
          (house) => house.status === project
        );
      }
      // sorting
      if (sort === 'ราคาต่ำไปสูง') {
        filteredHouses.sort(
          (a, b) =>
            parseInt(a.houseDetails.price) - parseInt(b.houseDetails.price)
        );
      } else if (sort === 'ราคาสูงไปต่ำ') {
        filteredHouses.sort(
          (a, b) =>
            parseInt(b.houseDetails.price) - parseInt(a.houseDetails.price)
        );
      } else if (sort === 'ใหม่ที่สุด') {
        filteredHouses.sort(
          (a, b) =>
            new Date(b.buildingInformation.start) -
            new Date(a.buildingInformation.start)
        );
      } else if (sort === 'เก่าที่สุด') {
        filteredHouses.sort(
          (a, b) =>
            new Date(a.buildingInformation.start) -
            new Date(b.buildingInformation.start)
        );
      }
      setFilteredHouse([...filteredHouses]);
    }
  };

  useEffect(() => {
    props.setPagesTags(['หน้าแรก', 'โครงการทั้งหมด']);
    props.setCurrentPage('allProjects');
    window.addEventListener('resize', reportWindowSize);
    Axios.get('http://localhost:8080/api/list').then((response) => {
      setAllHouses(response.data);
      setLocationChoice(allLocation(response.data));
      filter(response.data);
    });
  }, []);

  useEffect(() => {
    console.log('location', location);
    console.log('project', project);
    console.log('sort', sort);
    filter(allHouses);
  }, [location, project, sort]);

  if (allHouses.legnth === 0) {
    return <SpinLoad />;
  } else {
    return (
      <>
        <div className={classes.x}>
          {navMobileOverlay ? (
            <NavMobileOverlay
              setCurrentPage={props.setCurrentPage}
              currentPage={props.currentPage}
              setNavMobileOverlay={setNavMobileOverlay}
            />
          ) : null}
          <div className={classes.page}>
            {screenStatus === 'desktop' ? (
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
                          if (dropdownCommand === 'location') {
                            setDropdownCommand(null);
                          } else {
                            setDropdownCommand('location');
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
                          dropdownCommand === 'location'
                            ? classes.dropdownActive
                            : classes.dropdownNone
                        }
                      >
                        {locationChoice.map((e, i) => {
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
                          if (dropdownCommand === 'project') {
                            setDropdownCommand(null);
                          } else {
                            setDropdownCommand('project');
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
                          dropdownCommand === 'project'
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
                          if (dropdownCommand === 'sort') {
                            setDropdownCommand(null);
                          } else {
                            setDropdownCommand('sort');
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
                          dropdownCommand === 'sort'
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
                    {filteredHouse.length > 0 ? (
                      filteredHouse.map((e, i) => {
                        return <ShowHouse key={i} data={e} />;
                      })
                    ) : (
                      <p>ไม่พอข้อมูล...</p>
                    )}
                  </div>
                </div>
              </div>

              <div className={classes.sideWidgetBox}>
                {/* <Utility /> */}
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

export default AllProjects;

import React, { useRef } from 'react';
import './editcontent.scss';
import styled from 'styled-components';
import { useState } from 'react';
import ImageStore from './ImageStore';
import ChooseImage from './ChooseImage';
import uri from '../../components/config';
import PreviewImg from './PreviewImg';
import axios from 'axios';
import Map from './Map';
import {
  provinceData,
  districtData,
  subDistrictData,
} from '../../components/province';

const Main = styled.div`
  position: relative;
  padding: 0 2rem;
`;
const Heading = styled.div`
  display: flex;

  align-items: center;
  margin-top: 2rem;
  justify-content: space-between;
`;

const LineBreak = styled.div`
  width: 100%;
  border-bottom: solid 2px #e5e5e5;
`;
const BackBtn = styled.button`
  background-color: white;
  border: solid 3px #e5e5e5;
  margin-left: 4rem;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.save || props.delete ? 'white' : 'black')};
    background-color: ${(props) =>
      props.save ? '#007BFE' : props.delete ? '#DC3545' : '#e5e5e5'};
    transition: 0.35s;
  }
`;
const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
`;
const LeftC = styled.div`
  width: 50%;
  display: flex;
  padding-right: 2rem;
  flex-direction: column;
`;
const RightC = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '70%')};
  margin-top: 1rem;
  padding: 5px;
  border: solid 3px #d5d5d5;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  background-color: white;
  border: solid 2px #a5a5a5;
  border-radius: 5px;
  padding: 3px;

  &:hover {
    background-color: #e5e5e5;
    transition: 0.35s;
  }
`;
const ImgCategory = styled.label`
  color: ${(props) => (props.active ? 'black' : '#a5a5a5')};
  cursor: pointer;
`;

const EditContent = (props) => {
  const suggestRef = useRef();
  const [filenames, setFilenames] = useState(
    props.data ? props.data.photos.filenames : []
  );
  const [blueprints, setBlueprints] = useState(
    props.data ? props.data.photos.blueprints : []
  );
  const [imgStore, setImageStore] = useState();
  const [latlon, setLatlon] = useState(
    props.data ? props.data.location.latlon : null
  );
  const [imgCategory, setImgCategory] = useState('default');
  const [province, setProvince] = useState(
    props.data ? props.data.location.province : null
  );
  const [district, setDistrict] = useState(
    props.data ? props.data.location.district : null
  );
  const [subDistrict, setSubDistrict] = useState(
    props.data ? props.data.location.subDistrict : null
  );
  const [isSuggest, setIsSuggest] = useState(
    props.data ? props.data.websiteInfo.isSuggest : false
  );
  const [chooseImage, setChooseImage] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let name = event.target.Name.value;
    let price = event.target.price.value;
    let status = event.target.status.value;
    let start = event.target.start.value;
    let finish = event.target.finish.value;
    let area = event.target.area.value;
    let usableArea = event.target.usableArea.value;
    let bedRoom = event.target.bedRoom.value;
    let bathRoom = event.target.bathRoom.value;
    let parkingLot = event.target.parkingLot.value;
    let others = event.target.others.value;
    let zipCode = event.target.zipCode.value;
    let road = event.target.road.value;
    let moreDetails = event.target.moreDetails.value;
    let createAt = props.data ? props.data.websiteInfo.createAt : null;
    let houseDetails = {
      price,
      utility: {
        area,
        usableArea,
        bedRoom,
        bathRoom,
        parkingLot,
        others,
      },
    };

    let location = {
      province,
      district,
      subDistrict,
      road,
      zipCode,
      moreDetails,
      latlon,
    };

    let photos = {
      filenames,
      blueprints,
    };

    let buildingInformation = {
      start,
      finish,
    };

    let websiteInfo = {
      isSuggest,
      createAt,
    };

    let postUrl = uri + `${props.data ? '/api/patch' : '/api/post'}`;
    let formData = {
      _id: props.data ? props.data._id : null,
      name,
      price,
      status,
      houseDetails,
      location,
      photos,
      buildingInformation,
      websiteInfo,
    };
    axios.defaults.withCredentials = true;
    axios
      .post(postUrl, formData)
      .then((res) => {
        props.updateData();
        props.setRenderEditPage(null);
        props.setEditingContent(null);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const deleteHousesById = () => {
    let url = uri + '/api/delete/' + props.data._id;
    axios.defaults.withCredentials = true;
    axios
      .delete(url)
      .then((res) => {
        props.updateData();
        props.setRenderEditPage(null);
        props.setEditingContent(null);
      })
      .catch((err) => {
        alert(err.response.data.msg);
        console.log(err);
      });
  };

  const generateProvince = () => {
    return provinceData.map((item, index) => {
      let data = { id: item.PROVINCE_ID, name: item.PROVINCE_NAME };
      return <option value={JSON.stringify(data)}>{item.PROVINCE_NAME}</option>;
    });
  };

  const generateDistrict = () => {
    return districtData.map((item, index) => {
      if (item.PROVINCE_ID == province.id) {
        let data = { id: item.DISTRICT_ID, name: item.DISTRICT_NAME };
        return (
          <option value={JSON.stringify(data)}>{item.DISTRICT_NAME}</option>
        );
      }
    });
  };

  const generateSubDistrict = () => {
    return subDistrictData.map((item, index) => {
      if (item.DISTRICT_ID == district.id) {
        let data = { id: item.SUB_DISTRICT_ID, name: item.SUB_DISTRICT_NAME };
        return (
          <option value={JSON.stringify(data)}>{item.SUB_DISTRICT_NAME}</option>
        );
      }
    });
  };

  return (
    <Main>
      <ImageStore
        popup={true}
        trigger={imgStore}
        setImageStore={setImageStore}
      />
      <ChooseImage
        trigger={chooseImage}
        setChooseImage={setChooseImage}
        setFilenames={imgCategory == 'default' ? setFilenames : setBlueprints}
        filenames={imgCategory == 'default' ? filenames : blueprints}
      />
      <Heading>
        <h2>Editing content</h2>
        <div style={{ display: 'flex' }}>
          {props.data && (
            <BackBtn
              delete
              onClick={() => {
                deleteHousesById();
              }}
            >
              Delete
            </BackBtn>
          )}
          <BackBtn form="all-data" type="submit" save>
            {props.data ? 'Update' : 'Create'}
          </BackBtn>

          <BackBtn
            onClick={() => {
              props.setEditingContent(null);
              props.setRenderEditPage(null);
            }}
          >
            Back
          </BackBtn>
        </div>
      </Heading>
      <LineBreak />

      <Content>
        <LeftC>
          <form
            onSubmit={handleSubmit}
            id="all-data"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <section
              style={{
                paddingBottom: '1rem',
                borderBottom: 'solid 2px #e5e5e5',
              }}
            >
              <Input
                name="Name"
                placeholder="Name"
                type="text"
                width="95%"
                defaultValue={props.data ? props.data.name : ''}
                required
              />
              <div>
                <Input
                  name="price"
                  placeholder="ราคา"
                  type="number"
                  min="0"
                  width="30%"
                  defaultValue={props.data ? props.data.price : ''}
                  required
                />
                <select
                  style={{ width: '20%', marginLeft: '2rem' }}
                  id="status"
                  required
                >
                  {props.data ? (
                    <option selected disabled hidden value={props.data.status}>
                      {props.data.status}
                    </option>
                  ) : (
                    <option selected disabled hidden value="">
                      เลือกสถานะ
                    </option>
                  )}
                  <option value="โครงการปกติ">โครงการปกติ</option>
                  <option value="โครงการใหม่">โครงการใหม่</option>
                  <option value="กำลังสร้าง">กำลังสร้าง</option>
                  <option value="ขายแล้ว">ขายแล้ว</option>
                </select>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <select
                  id="province"
                  onChange={(e) => {
                    let data = JSON.parse(e.target.value);
                    setProvince(data);
                  }}
                  required
                >
                  {props.data && props.data.location.province ? (
                    <option
                      selected
                      disabled
                      hidden
                      value={props.data.location.province.id}
                    >
                      {props.data.location.province.name}
                    </option>
                  ) : (
                    <option selected disabled hidden value="">
                      เลือกจังหวัด
                    </option>
                  )}
                  {generateProvince()}
                </select>

                <select
                  style={{ width: '20%', marginLeft: '2rem' }}
                  id="district"
                  onChange={(e) => {
                    let data = JSON.parse(e.target.value);
                    setDistrict(data);
                  }}
                  disabled={province ? false : true}
                  required
                >
                  {props.data && props.data.location.district ? (
                    <option
                      selected
                      disabled
                      hidden
                      value={props.data.location.district.id}
                    >
                      {props.data.location.district.name}
                    </option>
                  ) : (
                    <option selected disabled hidden value="">
                      เลือกอำเภอ
                    </option>
                  )}
                  {province && generateDistrict()}
                </select>

                <select
                  style={{ width: '20%', marginLeft: '2rem' }}
                  id="subdistrict"
                  onChange={(e) => {
                    let data = JSON.parse(e.target.value);
                    setSubDistrict(data);
                  }}
                  disabled={district ? false : true}
                  required
                >
                  {props.data && props.data.location.subDistrict ? (
                    <option
                      selected
                      disabled
                      hidden
                      value={props.data.location.subDistrict.id}
                    >
                      {props.data.location.subDistrict.name}
                    </option>
                  ) : (
                    <option selected disabled hidden value="">
                      เลือกตำบล
                    </option>
                  )}
                  {district && generateSubDistrict()}
                </select>
              </div>
              <div>
                <Input
                  name="zipCode"
                  placeholder="รหัสไปรษณีย์"
                  type="number"
                  min="0"
                  width="30%"
                  defaultValue={props.data ? props.data.location.zipCode : ''}
                  required
                />
                <Input
                  style={{ marginLeft: '2rem' }}
                  name="road"
                  placeholder="ถนน"
                  type="text"
                  width="30%"
                  defaultValue={props.data ? props.data.location.road : ''}
                />
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <label>รายละเอียดทึ่อยู่เพิ่มเติม</label>
                <textarea
                  style={{
                    marginTop: '0.5rem',
                    borderRadius: '5px',
                    padding: '5px',
                    width: '100%',
                  }}
                  defaultValue={
                    props.data ? props.data.location.moreDetails : ''
                  }
                  name="moreDetails"
                  type="text"
                  rows="10"
                />
              </div>

              <div>
                <label>เริ่มสร้าง</label>
                <Input
                  style={{ marginLeft: '1rem' }}
                  name="start"
                  placeholder="date"
                  type="date"
                  width="20%"
                  defaultValue={
                    props.data ? props.data.buildingInformation.start : ''
                  }
                  required
                />
                <label style={{ marginLeft: '2rem' }}>เสร็จสิ้น</label>
                <Input
                  style={{ marginLeft: '1rem' }}
                  name="finish"
                  placeholder="date"
                  type="date"
                  width="20%"
                  defaultValue={
                    props.data ? props.data.buildingInformation.finish : ''
                  }
                />
              </div>

              <div style={{ marginTop: '1rem' }}>
                <input
                  type="checkbox"
                  name="isSuggest"
                  checked={isSuggest}
                  ref={suggestRef}
                  onChange={() => {
                    setIsSuggest(!isSuggest);
                  }}
                />
                <label
                  style={{ marginLeft: '0.35rem' }}
                  onClick={() => {
                    suggestRef.current.click();
                  }}
                >
                  Suggest
                </label>
              </div>
            </section>

            <div>
              <Input
                name="area"
                placeholder="ขนาดพื้นที่"
                type="number"
                min="0"
                width="30%"
                defaultValue={
                  props.data ? props.data.houseDetails.utility.area : ''
                }
                required
              />
              <Input
                style={{ marginLeft: '2rem' }}
                name="usableArea"
                placeholder="พื้นที่ใช้สอย"
                type="number"
                min="0"
                width="30%"
                defaultValue={
                  props.data ? props.data.houseDetails.utility.usableArea : ''
                }
              />
            </div>
            <div>
              <label>ห้องนอน</label>
              <Input
                style={{ marginLeft: '0.5rem' }}
                name="bedRoom"
                placeholder="ห้องนอน"
                min="0"
                type="number"
                width="15%"
                defaultValue={
                  props.data ? props.data.houseDetails.utility.bedRoom : ''
                }
                required
              />
              <label style={{ marginLeft: '3rem' }}>ห้องน้ำ</label>
              <Input
                style={{ marginLeft: '0.5rem' }}
                name="bathRoom"
                placeholder="ห้องน้ำ"
                type="number"
                min="0"
                width="15%"
                defaultValue={
                  props.data ? props.data.houseDetails.utility.bathRoom : ''
                }
                required
              />
              <label style={{ marginLeft: '3rem' }}>ที่จอดรถ</label>
              <Input
                style={{ marginLeft: '0.5rem' }}
                name="parkingLot"
                placeholder="ที่จอดรถ"
                min="0"
                type="number"
                width="15%"
                defaultValue={
                  props.data ? props.data.houseDetails.utility.parkingLot : ''
                }
                required
              />
            </div>
            <label style={{ marginTop: '2.5rem' }}>รายละเอียดเพิ่มเติม</label>
            <textarea
              style={{
                marginTop: '0.5rem',
                borderRadius: '5px',
                padding: '5px',
              }}
              defaultValue={
                props.data ? props.data.houseDetails.utility.others : ''
              }
              name="others"
              type="text"
              rows="10"
            />
          </form>
        </LeftC>
        <RightC>
          <Button
            style={{ padding: '5px' }}
            onClick={() => {
              setImageStore(true);
            }}
          >
            Open images store
          </Button>
          <Button
            style={{ marginTop: '1rem', padding: '5px' }}
            onClick={() => {
              setChooseImage(true);
            }}
          >
            Choose image
          </Button>
          <div
            style={{
              margin: '1rem',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <ImgCategory
              active={imgCategory == 'default'}
              onClick={() => {
                setImgCategory('default');
              }}
            >
              Images
            </ImgCategory>
            <ImgCategory
              active={imgCategory == 'blueprint'}
              onClick={() => {
                setImgCategory('blueprint');
              }}
            >
              Blueprint
            </ImgCategory>
          </div>
          {imgCategory == 'default' && filenames.length > 0 && (
            <PreviewImg filenames={filenames} />
          )}
          {imgCategory == 'blueprint' && blueprints.length > 0 && (
            <PreviewImg filenames={blueprints} />
          )}
        </RightC>
      </Content>
      <Map setLatlon={setLatlon} latlon={latlon} />
    </Main>
  );
};

export default EditContent;

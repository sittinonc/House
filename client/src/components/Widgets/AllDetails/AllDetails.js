import classes from "./AllDetails.module.scss";
import Grid from "../../../UI/MainWidget/Grid/Grid";
import functions from "../../../function";

const AllDetails = (props) => {
  const config = {
    head: "รายละเอียดทั้งหมด",
    data: [
      { label: "สถานนะ", val: props.data.status },
      { label: "ประเภท", val: props.data.houseDetails.category },
      {
        label: "ราคา",
        val: functions.priceFormat(props.data.houseDetails.price),
      },
      {
        label: "พื้นที่ทั้งหมด",
        val: props.data.houseDetails.area + " ตารางเมตร",
      },
      {
        label: "พื้นที่บ้าน",
        val: props.data.houseDetails.usableArea + " ตารางเมตร",
      },
      { label: "ห้องนอน", val: props.data.houseDetails.bedroom },
      { label: "ห้องน้ำ", val: props.data.houseDetails.bathRoom },
      {
        label: "จอดรถ",
        val: props.data.houseDetails.parkingLot + " คัน",
      },
      { label: "เริ่มสร้าง", val: props.data.buildingInformation.start },
      { label: "สร้างเสร็จ", val: props.data.buildingInformation.finish },
    ],
  };
  return (
    <>
      <Grid config={config} />
    </>
  );
};

export default AllDetails;

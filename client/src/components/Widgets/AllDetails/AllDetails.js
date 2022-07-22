import classes from "./AllDetails.module.scss";
import Grid from "../../../UI/MainWidget/Grid/Grid";
import functions from "../../../function";

const AllDetails = () => {
  const config = {
    head: "รายละเอียดทั้งหมด",
    data: [
      { label: "สถานนะ", val: "โครงการพร้อมอยู่" },
      { label: "ประเภท", val: "บ้านเดี่ยว" },
      { label: "ราคา", val: functions.priceFormat(5000000) },
      { label: "พื้นที่ทั้งหมด", val: "200 ตารางเมตร" },
      { label: "พื้นที่บ้าน", val: "120 ตารางเมตร" },
      { label: "ห้องนอน", val: "3" },
      { label: "ห้องน้ำ", val: "3" },
      { label: "จอดรถ", val: "2 คัน" },
      { label: "เริ่มสร้าง", val: "2021-02-15" },
      { label: "สร้างเสร็จ", val: "2022-01-03" },
    ],
  };
  return (
    <>
      <Grid config={config} />
    </>
  );
};

export default AllDetails;

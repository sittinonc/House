import Grid from "../../../UI/MainWidget/Grid/Grid";

const Address = (props) => {
  const config = {
    head: "ตำแหน่งที่ตั้ง",
    data: [
      { label: "จังหวัด", val: props.data.location.province.name },
      { label: "ตำบล", val: props.data.location.subDistrict.name },
      { label: "อำเภอ", val: props.data.location.district.name },
      { label: "รหัสไปรษณีย์", val: props.data.location.zipCode },
      { label: "ถนน", val: props.data.location.road },
      { label: "ซอย", val: "-" },
    ],
  };
  return (
    <>
      <Grid config={config} />
    </>
  );
};

export default Address;

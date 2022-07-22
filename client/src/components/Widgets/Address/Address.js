import Grid from "../../../UI/MainWidget/Grid/Grid";

const Address = () => {
  const config = [
    { label: "จังหวัด", val: "นครปฐม" },
    { label: "ตำบล", val: "ตำบล" },
    { label: "อำเภอ", val: "อำเภอ" },
    { label: "รหัสไปรษณีย์", val: "12222" },
    { label: "ถนน", val: "ถนน" },
    { label: "ซอย", val: "ซอย..." },
  ];
  return (
    <>
      <Grid config={config} />
    </>
  );
};

export default Address;

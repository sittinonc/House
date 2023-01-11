import classes from './Measurement.module.scss';

import Options from '../../../UI/SideWidget/Options/Options';

const Measurement = () => {
  const config = {
    head: 'หน่วยวัดพื้นที่',
    each: [{ label: 'ตารางเมตร', val: ['ตารางเมตร'] }],
  };
  return <Options config={config} />;
};

export default Measurement;

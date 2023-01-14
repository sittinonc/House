import React, { useState } from 'react';
import AddHouse from './AddHouse';
import Image from './Image';
import Sidebar from './sidebar';
import './style.scss';

const Edit = (props) => {
  const [method, setMethod] = useState('house');
  const generateContent = () => {
    if (method == 'house') {
      return <AddHouse />;
    } else if (method == 'imgStore') {
      return <Image />;
    }
  };
  return (
    <div className="editContainer">
      <Sidebar setMethod={setMethod} />
      <div className="content">{generateContent()}</div>
    </div>
  );
};

export default Edit;

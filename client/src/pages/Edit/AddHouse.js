import React, { useEffect, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import axios from 'axios';
import './addhouse.scss';
import Card from './Card';
import EditContent from './EditContent';
import uri from '../../components/config';
const AddHouse = () => {
  const [renderEditPage, setRenderEditPage] = useState(false);
  const [allHouse, setAllHouse] = useState();
  const [editingContent, setEditingContent] = useState();
  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    let url = uri + '/api/list';
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setAllHouse(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderEditContent = () => {
    setRenderEditPage(true);
  };
  if (renderEditPage) {
    window.scrollTo(0, 0);
    return (
      <EditContent
        data={editingContent ? editingContent : null}
        setEditingContent={setEditingContent}
        setRenderEditPage={setRenderEditPage}
        updateData={updateData}
      />
    );
  }
  return (
    <div className="AddHouseContainer">
      <div className="heading">
        <div>Houses</div>
        <div className="rightHeading">
          <button
            onClick={() => {
              renderEditContent();
            }}
          >
            {<BsPlusLg style={{ left: '1rem', position: 'absolute' }} />}
            CREATE
          </button>
        </div>
      </div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {allHouse &&
          allHouse.map((item, index) => {
            return (
              <Card
                setEditingContent={setEditingContent}
                renderEditContent={() => renderEditContent()}
                item={item}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};
export default AddHouse;

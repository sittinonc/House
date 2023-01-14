import React from 'react';
import './style.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LineBreak = styled.div`
  width: 90%;
  margin: 30px 0;
  border-bottom: solid 2px #666666;
`;
const Content = styled.div`
  width: 100%;
  cursor: pointer;
  border-left: solid 5px #1e232f;
  &:hover {
    border-left: solid 5px #3f927c;
    color: #3f927c;
  }
  &:active {
    border-left: solid 5px #3f927c;
    color: #3f927c;
  }
`;

const Back = styled(Link)`
  color: #c3c3c3;
  margin-top: 30px;
  font-size: 34px;
  text-decoration: none;
`;

const Sidebar = (props) => {
  return (
    <div className="editSidebar">
      <Back to="/">Back</Back>
      <LineBreak />
      <h2>Houses</h2>
      <Content onClick={() => props.setMethod('house')}>
        <h3>Add house</h3>
      </Content>

      <LineBreak />
      <h2>Image</h2>
      <Content onClick={() => props.setMethod('imgStore')}>
        <h3>Open image store</h3>
      </Content>

      <LineBreak />
    </div>
  );
};

export default Sidebar;

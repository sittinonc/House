import React, { useState } from 'react'
import uri from '../../components/config';
import styled from 'styled-components';

const ImgWrap = styled.span`
    position: relative;
    text-align: center;
    cursor: pointer;


`
const ChooseEachImg = styled.img`
    width: 200px;
    height: 100%;
    /* padding: 1rem; */
    margin: 1rem;
    border-radius: 5px;
    &:hover{
        opacity: 0.5;
        transition: 0.2s;
    }
`
const EachImg = ({ item, filenames, setFilenames }) => {

    const url = uri + '/image/view/'
    const [toggle, setToggle] = useState(filenames.includes(item.filename));

    return (
        <ImgWrap onClick={() => {
            setToggle(!toggle)
            if (!filenames.includes(item.filename)) {
                setFilenames([...filenames, item.filename])
            }
            else {
                var index = filenames.indexOf(item.filename);
                if (index !== -1) {
                    filenames.splice(index, 1);
                }
                setFilenames([...filenames])
            }


        }}>
            <ChooseEachImg
                src={`${url + item.filename}`}
                toggle
                style={toggle ? { border: 'solid 5px #0d6efcff' }
                    : { border: 'solid 5px white' }}
            />
            {/* <AddIcon /> */}
        </ImgWrap>
    )
}

export default EachImg
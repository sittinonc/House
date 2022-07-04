import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import uri from '../../components/config'
import EachImg from './EachImg'
const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
const PopupInner = styled.div`
    position: relative;
    justify-content: center;
    padding: 32px;
    width: 100%;
    max-width: 80%;
    max-height: 95vh;
    background-color: #fff;
    overflow-y: scroll;
`
const PopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: solid 2px #e5e5e5;
`
const Label = styled.label`
    font-size: 34px;
    font-weight: bold;
`
const ChooseImage = (props) => {
    const [allImg, setAllImg] = useState()
    useEffect(() => {
        if (props.trigger) {
            let url = uri + '/image/list'
            axios
                .get(url)
                .then((res) => {
                    let data = res.data
                    setAllImg(data)
                })
        }

    }, [props.trigger])

    const createAllImage = () => {
        return allImg.map((item, index) => {
            return <EachImg
                item={item}
                setFilenames={props.setFilenames}
                filenames={props.filenames}
                isProfile={props.isProfile}
            />
        })
    }

    return (
        props.trigger ?
            <Popup>
                <PopupInner>
                    <PopupHeader>
                        <Label>ChooseImage</Label>
                        <button onClick={() => (props.setChooseImage(false))}>
                            close
                        </button>
                    </PopupHeader>
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <span>
                            {allImg && createAllImage()}
                        </span>

                    </div>
                </PopupInner>
            </Popup>
            : ''
    )
}

export default ChooseImage
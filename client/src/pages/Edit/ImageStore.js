import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import uri from '../../components/config'

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
text-align: center;
    position: relative;
    justify-content: center;
    padding: 32px;
    
    ${props => props.confirm ? 'width: 25%;' : 'width: 100%;'} 

    max-width: 80%;
    ${props => props.popup ? 'max-height: 95vh;' : ''} 
    background-color: #fff;
    ${props => props.popup ? 'overflow-y: scroll;' : ''} 
    
`

const PopupHeader = styled.div`
    display: flex;
    justify-content: ${props => props.confirm ? 'space-around' : 'space-between'};
`
const Label = styled.label`
    font-size: 34px;
    font-weight: bold;
`
const Input = styled.input`
    display: none;
`

const Button = styled.button`
    width: 100%;
    background-color: white;
    border: solid 2px #a5a5a5;
    border-radius: 5px;
    padding: 3px;
    margin: 2rem 0;
    &:hover{
        background-color: #e5e5e5;
        transition: 0.35s;
    }
`
const Image = styled.img`
    ${props => props.confirm ? '' : 'cursor : pointer;'}
    margin: ${props => props.confirm ? '10px 0' : '10px'};
    width: ${props => props.confirm ? '100%' : '30%'};
    height: 100%;
`
const Btn = styled.button`
    background-color: white;
    border: solid 3px #e5e5e5;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        color: ${props => props.save || props.delete ? 'white' : 'black'};
        background-color: ${props => props.save ? '#007BFE' : props.delete ? '#DC3545' : '#e5e5e5'};
        transition: 0.35s;
    }
`

const ImageStore = (props) => {
    const uploadRef = useRef()
    const [allImg, setAllImg] = useState()
    const [confirmPopup, setConfirmPopup] = useState(false)
    const [confirmBuffer, setConfirmBuffer] = useState()


    useEffect(() => {
        updateData()
    }, [])

    const updateData = () => {
        let url = uri + '/image/list'
        axios
            .get(url)
            .then((res) => {
                let data = res.data
                setAllImg(data)
            })
    }
    const UploadImg = (img) => {
        let url = uri + '/image/upload/single'
        let formData = new FormData()
        formData.append('file', img)
        axios.defaults.withCredentials = true;
        axios
            .post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                updateData()
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const deleteImgByName = (filename) => {
        const url = uri + '/image/delete/' + filename;

        axios
            .delete(url)
            .then((res) => {
                console.log(res);
                updateData();
            })
            .catch((err) => { console.log(err); })
    }

    const handleFileChange = (change) => {
        UploadImg(change)
    }


    const createAllImg = () => {
        let url = uri + '/image/view/'
        return allImg.map((item, index) => {
            return <Image key={index} src={url + item.filename}
                onClick={() => {
                    setConfirmPopup(true)
                    setConfirmBuffer(item)
                }}
            />
        })
    }

    const crateStore = () => {
        return <PopupInner popup={props.popup}>
            {confirmPopup && confirmBuffer && <Popup>
                <PopupInner confirm>
                    <h1>Delete Image?</h1>
                    <Image confirm
                        src={`${uri + '/image/view/' + confirmBuffer.filename}`}
                        alt={confirmBuffer.filename}
                    />
                    <PopupHeader confirm>
                        <Btn delete onClick={() => {
                            deleteImgByName(confirmBuffer.filename)
                            setConfirmPopup(false)
                        }
                        }
                        >Delete</Btn>
                        <Btn save onClick={() =>
                            setConfirmPopup(false)
                        }>Cancel</Btn>
                    </PopupHeader>
                </PopupInner>
            </Popup>}
            <PopupHeader>
                <Label>Image Store</Label>
                {props.setImageStore && <button onClick={() => (props.setImageStore(false))}>
                    close
                </button>}
                <Input
                    type="file"
                    id="file"
                    ref={uploadRef}
                    name="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleFileChange(e.target.files[0])}
                />
            </PopupHeader>

            <Button onClick={() => { uploadRef.current.click() }}>
                Add image
            </Button>
            {allImg && <div style={{ textAlign: 'center' }}>
                {createAllImg()}
            </div>}
        </PopupInner>
    }
    return (
        props.trigger ?
            (<>
                {props.popup ? <Popup>
                    {crateStore()}
                </Popup> : crateStore()}

            </>)
            : null
    )
}

export default ImageStore
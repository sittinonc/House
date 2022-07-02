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
    margin: 10px;
    width: 30%;
    height: 100%;
`

const ImageStore = (props) => {
    const uploadRef = useRef()
    const [allImg, setAllImg] = useState()

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
        console.log(img);
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


    const handleFileChange = (change) => {
        UploadImg(change)
    }

    const createAllImg = () => {
        let url = uri + '/image/view/'
        return allImg.map((item, index) => {
            return <Image key={index} src={url + item.filename} />
        })
    }

    return (
        props.trigger ?
            (<Popup>
                <PopupInner>
                    <PopupHeader>
                        <Label>Image Store</Label>
                        <button onClick={() => (props.setImageStore(false))}>
                            close
                        </button>
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
                        Add Img
                    </Button>
                    {allImg && <div style={{ textAlign: 'center' }}>
                        {createAllImg()}
                    </div>}

                </PopupInner>
            </Popup>)
            : null
    )
}

export default ImageStore
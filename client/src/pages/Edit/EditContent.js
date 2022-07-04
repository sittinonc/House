import React, { useRef } from 'react'
import './editcontent.css'
import styled from 'styled-components'
import { useState } from 'react'
import ImageStore from './ImageStore'
import ChooseImage from './ChooseImage'
import uri from '../../components/config'
import PreviewImg from './PreviewImg'
import axios from 'axios'


const Main = styled.div`
    position: relative;
    padding: 0 2rem;
`
const Heading = styled.div`
    display: flex;

    align-items: center;
    margin-top: 2rem;
    justify-content: space-between;
`

const LineBreak = styled.div`
    width: 100%;
    border-bottom: solid 2px #e5e5e5;
`
const BackBtn = styled.button`
    background-color: white;
    border: solid 3px #e5e5e5;
    margin-left: 4rem;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        color: ${props => props.save || props.delete ? 'white' : 'black'};
        background-color: ${props => props.save ? '#007BFE' : props.delete ? '#DC3545' : '#e5e5e5'};
        transition: 0.35s;
    }
`
const Content = styled.div`
    width:100%;
    margin-top: 1rem;
    display: flex;
`
const LeftC = styled.div`
    width: 50%;
    display: flex;
    padding-right: 2rem;
    flex-direction: column;
`
const RightC = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Input = styled.input`
    width: ${props => props.width ? props.width : '70%'};
    margin-top: 1rem;
    padding: 5px;
    border: solid 3px #d5d5d5;
    border-radius: 5px;
`

const Button = styled.button`
    width: 100%;
    background-color: white;
    border: solid 2px #a5a5a5;
    border-radius: 5px;
    padding: 3px;

    &:hover{
        background-color: #e5e5e5;
        transition: 0.35s;
    }
`
const ImgCategory = styled.label`
    color: ${props => props.active ? 'black' : '#a5a5a5'};
    cursor: pointer;
`


const EditContent = (props) => {
    const suggestRef = useRef()
    const [filenames, setFilenames] = useState(props.data ? props.data.filenames : [])
    const [blueprints, setBlueprints] = useState(props.data ? props.data.blueprints : [])
    const [imgStore, setImageStore] = useState()
    const [imgCategory, setImgCategory] = useState('default')
    const [isSuggest, setIsSuggest] = useState(props.data ? props.data.isSuggest : false)
    const [chooseImage, setChooseImage] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault();
        let name = event.target.Name.value;
        let price = event.target.price.value;
        let status = event.target.status.value;
        let startDate = event.target.startDate.value;
        let endDate = event.target.endDate.value;
        let area = event.target.area.value;
        let usableArea = event.target.usableArea.value;
        let bedroom = event.target.bedroom.value;
        let bathroom = event.target.bathroom.value;
        let parkingLot = event.target.parkingLot.value;
        let description = event.target.description.value;

        let postUrl = uri + `${props.data ? '/api/patch' : '/api/post'}`
        let formData = {
            _id: props.data ? props.data._id : null,
            name,
            price,
            status,
            startDate,
            endDate,
            isSuggest,
            area,
            usableArea,
            bedroom,
            bathroom,
            parkingLot,
            description,
            filenames,
            blueprints
        }
        axios.defaults.withCredentials = true;
        axios
            .post(postUrl, formData)
            .then((res) => {
                props.updateData()
                props.setRenderEditPage(null)
                props.setEditingContent(null)

            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteHousesById = () => {
        let url = uri + '/api/delete/' + props.data._id
        axios.defaults.withCredentials = true;
        axios
            .delete(url)
            .then((res) => {
                props.updateData()
                props.setRenderEditPage(null)
                props.setEditingContent(null)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Main>
            <ImageStore
                popup={true}
                trigger={imgStore}
                setImageStore={setImageStore}
            />
            <ChooseImage
                trigger={chooseImage}
                setChooseImage={setChooseImage}
                setFilenames={imgCategory == 'default' ? setFilenames : setBlueprints}
                filenames={imgCategory == 'default' ? filenames : blueprints}
            />
            <Heading>
                <h2>
                    Editing content
                </h2>
                <div style={{ display: 'flex' }}>
                    {props.data && <BackBtn delete onClick={() => {
                        deleteHousesById()
                    }}>
                        Delete
                    </BackBtn>}
                    <BackBtn form="all-data" type="submit" save>
                        {props.data ? "Update" : "Create"}
                    </BackBtn>

                    <BackBtn onClick={() => {
                        props.setEditingContent(null)
                        props.setRenderEditPage(null)
                    }}>
                        Back
                    </BackBtn>
                </div>

            </Heading>
            <LineBreak />

            <Content>
                <LeftC>
                    <form
                        onSubmit={handleSubmit}
                        id="all-data"
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <section style={{ paddingBottom: '1rem', borderBottom: 'solid 2px #e5e5e5' }}>
                            <Input
                                name="Name"
                                placeholder='Name'
                                type="text"
                                width='95%'
                                defaultValue={props.data ? props.data.name : ''}
                                required
                            />
                            <div>

                                <Input
                                    name="price"
                                    placeholder='ราคา'
                                    type="number"
                                    min='0'
                                    width='30%'
                                    defaultValue={props.data ? props.data.price : ''}

                                    required
                                />
                                <select
                                    style={{ width: '20%', marginLeft: '2rem' }}
                                    id="status"
                                    required
                                >
                                    {props.data ?
                                        <option selected disabled hidden
                                            value={props.data.status}
                                        >
                                            {props.data.status}
                                        </option >
                                        : <option selected disabled hidden
                                            value={null}
                                        >
                                            เลือกสถานะ
                                        </option>}
                                    <option value="sold">sold</option>
                                    <option value="listing">listing</option>
                                    <option value="inProgress">inProgress</option>
                                </select>
                            </div>

                            <div>
                                <label>เริ่มสร้าง</label>
                                <Input
                                    style={{ marginLeft: '1rem' }}

                                    name="startDate"
                                    placeholder='date'
                                    type="date"
                                    width='20%'
                                    defaultValue={props.data ? props.data.startDate : ''}
                                    required
                                />
                                <label style={{ marginLeft: '2rem' }}>
                                    เสร็จสิ้น
                                </label>
                                <Input
                                    style={{ marginLeft: '1rem' }}
                                    name="endDate"
                                    placeholder='date'
                                    type="date"
                                    width='20%'
                                    defaultValue={props.data ? props.data.endDate : ''}
                                />
                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <input type='checkbox' name='isSuggest'
                                    checked={isSuggest} ref={suggestRef}
                                    onChange={() => { setIsSuggest(!isSuggest) }}
                                />
                                <label style={{ marginLeft: '0.35rem' }} onClick={() => { suggestRef.current.click() }}>Suggest</label>
                            </div>
                        </section>

                        <div>
                            <Input
                                name="area"
                                placeholder='ขนาดพื้นที่'
                                type="number"
                                min="0"
                                width='30%'
                                defaultValue={props.data ? props.data.area : ''}

                                required
                            />
                            <Input
                                style={{ marginLeft: '2rem' }}
                                name="usableArea"
                                placeholder='พื้นที่ใช้สอย'
                                type="number"
                                min="0"
                                width='30%'
                                defaultValue={props.data ? props.data.usableArea : ''}

                            />
                        </div>
                        <div>
                            <label>ห้องนอน</label>
                            <Input
                                style={{ marginLeft: '0.5rem' }}
                                name="bedroom"
                                placeholder='ห้องนอน'
                                min="0"
                                type="number"
                                width='15%'
                                defaultValue={props.data ? props.data.bedroom : ''}
                                required
                            />
                            <label
                                style={{ marginLeft: '3rem' }}
                            >ห้องน้ำ</label>
                            <Input
                                style={{ marginLeft: '0.5rem' }}
                                name="bathroom"
                                placeholder='ห้องน้ำ'
                                type="number"
                                min="0"
                                width='15%'
                                defaultValue={props.data ? props.data.bathroom : ''}
                                required
                            />
                            <label
                                style={{ marginLeft: '3rem' }}
                            >ที่จอดรถ</label>
                            <Input
                                style={{ marginLeft: '0.5rem' }}
                                name="parkingLot"
                                placeholder='ที่จอดรถ'
                                min="0"
                                type="number"
                                width='15%'
                                defaultValue={props.data ? props.data.parkingLot : ''}
                                required
                            />
                        </div>
                        <label
                            style={{ marginTop: '2.5rem' }}
                        >คำอธิบายเพิ่มเติม</label>
                        <textarea
                            style={{ marginTop: '0.5rem', borderRadius: '5px', padding: '5px' }}
                            defaultValue={props.data ? props.data.description : ''}

                            name="description"
                            type="text"
                            rows='10'
                        />


                    </form>

                </LeftC>
                <RightC>
                    <Button style={{ padding: '5px' }} onClick={() => { setImageStore(true) }} >Open images store</Button>
                    <Button style={{ marginTop: '1rem', padding: '5px' }} onClick={() => { setChooseImage(true) }} >Choose image</Button>
                    <div style={{ margin: '1rem', display: 'flex', justifyContent: 'space-around' }}>
                        <ImgCategory active={imgCategory == 'default'} onClick={() => { setImgCategory('default') }}>Images</ImgCategory>
                        <ImgCategory active={imgCategory == 'blueprint'} onClick={() => { setImgCategory('blueprint') }}>Blueprint</ImgCategory>
                    </div>
                    {imgCategory == 'default' && filenames.length > 0 && <PreviewImg filenames={filenames} />}
                    {imgCategory == 'blueprint' && blueprints.length > 0 && <PreviewImg filenames={blueprints} />}
                </RightC>
            </Content>

        </Main >
    )
}

export default EditContent
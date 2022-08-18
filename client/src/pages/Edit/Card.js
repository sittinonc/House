import React from 'react'
import styled from 'styled-components'
import uri from '../../components/config'

const Main = styled.div`
    cursor: pointer;
    margin: 1rem;
    width: 360px;
    min-height: 500px;
    height: auto;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    overflow: hidden;
`

const CardImg = styled.div`
    height: 250px;
    background-image: url(${props => props.filenames ? uri + '/image/view/' + props.filenames : 'https://via.placeholder.com/250'});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const CardContent = styled.div`
    
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-overflow: clip;
`
const Card = (props) => {

    return (
        <Main onClick={() => {
            props.renderEditContent()
            props.setEditingContent(props.item)
        }}>
            <CardImg filenames={props.item.photos.filenames[0]}>
            </CardImg>
            <CardContent>
                <h3>{props.item.websiteInfo.createAt.slice(0, 10)}</h3>
                <h1>{props.item.name}</h1>

                <p>{props.item.location.moreDetails.length > 100
                    ? props.item.location.moreDetails.slice(0, 100) + '...'
                    : props.item.location.moreDetails}</p>
            </CardContent >
        </Main >
    )
}

export default Card
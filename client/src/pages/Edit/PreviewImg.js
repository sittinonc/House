import React from 'react'
import styled from 'styled-components'
import uri from '../../components/config'

const PreviewImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    justify-content: center;
    /* margin: 1rem; */
    /* padding: 1rem; */
`

const PreviewImg = (props) => {
    const url = uri + '/image/view/'

    return (
        <PreviewImage>
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <img style={{ width: '100%' }}
                    src={url + props.filenames[0]}
                    alt={props.filenames[0]} />
            </div>
            <div style={{ overflowX: 'scroll', display: 'flex' }}>
                {props.filenames.map((item, index) => {
                    if (index == 0) {
                        return null
                    }
                    return <img
                        key={index}
                        style={{ width: '33%', marginRight: '1rem' }}
                        src={url + item}
                        alt={item}
                    />
                })}
            </div>
        </PreviewImage>
    )
}

export default PreviewImg
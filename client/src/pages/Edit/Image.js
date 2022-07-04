import React from 'react'
import ImageStore from './ImageStore'

const Image = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ImageStore
                trigger={true}
            />
        </div>
    )
}

export default Image
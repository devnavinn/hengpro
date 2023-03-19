import React from 'react'

export const Img = (props) => {
    return (
        <div style={{ "width": "100%", "height": "35.38%" }}>
            <a href='/#'> <img style={{ "width": "100%", "height": "100%", "objectFit": "cover" }} src={props.img} alt='img' /> </a>
        </div>
    )
}

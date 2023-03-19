import React from 'react'

export const ProductDescription2 = (props) => {
    return (
        <div className={props.class}>
            <div className='gif-container2'>
                <a href='/#'> <img className='gif2' src={props.gif} alt="gif" /> </a>
            </div>
            <div className='product-description2'>

                <div className='top'>
                    {props.top}
                </div>
                <div className='middle'>
                    {props.middle}
                </div>
                <div className='buttom'>
                    {props.buttom}
                </div>
            </div>

        </div>
    );
}

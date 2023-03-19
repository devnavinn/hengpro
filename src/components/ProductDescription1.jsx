import React from 'react'
import '../css/productDescription.css';
export const ProductDescription1 = (props) => {
    return (
        <div className={props.class}>
            <div className='product-description1'>

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
            <div className='gif-container'>
                <a href='/#'> <img className='gif' src={props.gif} alt="gif" /> </a>
            </div>
        </div>
    );
}

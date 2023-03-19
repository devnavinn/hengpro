import React from 'react'
import '../css/Type1.css';
export const Type1 = (props) => {
    return (
        <div className='desctype1'>
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

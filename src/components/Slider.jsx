import React, { useState } from 'react'
import '../css/Slider.css';
import scrollimg from '../assets/scrollimg.js';

export const Slider = () => {
    const [id, setId] = useState(0);
    const length = scrollimg.length;
    const handleNext = (value) => {
        if (value === 'pre') {
            setId((preValue) => {
                if (preValue >= 1 && preValue <= length - 1) {
                    return (preValue - 1)
                } else {
                    setId(length - 1);
                }
            })
        }
        else if (value === 'next') {
            setId((preValue) => {
                if (preValue < length - 1 && preValue >= 0) {
                    return (preValue + 1)
                }
                else {
                    setId(0);
                }
            })
        }
    }
    const handleclick = (index) => {

        setId(index);
    }
    return (
        <div className='slider'>

            <div className='sliderimg'>
                {
                    scrollimg.map((item, index) => {
                        return (
                            <div className='sliding-items' key={index} onClick={() => {
                                handleclick(index);
                            }}>
                                <img className='left-images' src={item} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='left-arrow' onClick={() => {
                handleNext('pre');
            }}>
                &lt;
            </div>
            <div className='slider-container'>
                {scrollimg.map((item, index) => {

                    if (id === index) {
                        return (
                            <div className='sliding-item' key={index}>
                                <img className='center-img' src={item} />
                            </div>
                        )
                    }

                })}
            </div>
            <div className='right-arrow' onClick={() => {
                handleNext('next');
            }}>
                &gt;
            </div>
        </div>
    )
}

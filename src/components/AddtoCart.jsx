import React, { useState } from 'react'
import star from '../img/start.svg';
import cartimg from '../img/add2cart.svg';
import heart from '../img/heart.svg';
import message from '../img/message.svg';
import '../css/AddtoCart.css';
export const AddtoCart = () => {
    const [value, setValue] = useState(0);
    const handleClick = (input) => {
        if (input === 'add') {
            setValue((preValue) => {
                return preValue + 1;
            });
        }
        else if (input === 'sub') {
            setValue((preValue) => {
                if (preValue != 0) {
                    return preValue - 1;
                } else {
                    return 0;
                }
            });
        }
    }
    return (
        <div className='add2cart'>
            <div className='left-section'>
                <h2 className='product-name'>Heng Lamp</h2>
                <p className='pro-des'>Description of the product in few line</p>
                <div className='star'>
                    <div>
                        <img style={{ "margin": "5px" }} src={star} />
                        <img style={{ "margin": "5px" }} src={star} />
                        <img style={{ "margin": "5px" }} src={star} />
                        <img style={{ "margin": "5px" }} src={star} />
                        <img style={{ "margin": "5px" }} src={star} />
                    </div>
                    <div>
                        (101 Rating)
                    </div>
                </div>

            </div>
            <div className='right-section'>
                <div style={{ "marginRight": "50px" }}>
                    <div className="dropdown">
                        <button className="dropdown-button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Power Source
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Rechargeable</a></li>
                            <li><a className="dropdown-item" href="#">Non Rechargeable</a></li>

                        </ul>
                    </div>
                </div>
                <div className='numberDiv'>
                    <div className='innerNoDiv' onClick={() => {
                        handleClick("sub");
                    }}>-</div>
                    <div className='innerNoDiv' style={{ "backgroundColor": "#ffff" }}>{value}</div>
                    <div className='innerNoDiv' onClick={() => {
                        handleClick("add");
                    }}>+</div>
                </div>
                <div style={{ "marginRight": "20px" }}>
                    <a href='/#'> <img src={cartimg} /> </a>
                </div>
                <div style={{ "marginRight": "20px" }}>
                    <img src={heart} />
                </div>
                <div>
                    <img src={message} />
                </div>
            </div>
        </div>
    )
}

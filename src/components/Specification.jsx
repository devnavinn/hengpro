import React from 'react'
import '../css/Specification.css';
export const Specification = (props) => {
    return (
        <div className='specification-container'>
            <div className='hangpro-img'>
                <a href='/#'> <img style={{ "width": "90%", "height": "auto", "objectFit": "cover" }} src={props.img} /> </a>
            </div>
            <div className='specification'>
                <h1 className='specification-header'>Specifications</h1>
                <div className='specification-table'>
                    <div className='name'>

                        <div className='left-specification'> Color</div>
                        <div className='left-specification'>Product Type</div>
                        <div className='left-specification'>Packing Size</div>
                        <div className='left-specification'>Light</div>
                        <div className='left-specification'>Material</div>
                        <div className='left-specification'>LED</div>
                        <div className='left-specification'>Voltage</div>
                        <div className='left-specification'>Package Size</div>
                        <div className='left-specification'>Qty/Carton</div>
                        <div className='left-specification'>Carton Size</div>

                    </div>
                    <div className='desc'>
                        <div className='right-specification'>Black, White, Pink, Peach, Red, Green</div>
                        <div className='right-specification'>USB Type, Rechargeable</div>
                        <div className='right-specification'>40 x 20 x 7 cm</div>
                        <div className='right-specification'>Can switch cold and warm light</div>
                        <div className='right-specification'>APS</div>
                        <div className='right-specification'>Lamp Bead life 10000H</div>
                        <div className='right-specification'>5 V 0.6A, 2 A max, 2.5 W</div>
                        <div className='right-specification'>40 x 27 x 9 cm</div>
                        <div className='right-specification'>10 pcs</div>
                        <div className='right-specification'>55 x 49 x 45 cm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

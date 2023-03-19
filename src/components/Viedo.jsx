import React from "react";
import viedo from '../viedo/viedo.mp4';
function Viedo() {
    return (
        <div style={{ "width": "100%" }}>
            <video width="100%" height="100%" autoPlay="autoplay" muted="muted" loop="loop" >
                <source src={viedo} type="video/mp4" />
            </video>
        </div>
    );
}
export default Viedo;
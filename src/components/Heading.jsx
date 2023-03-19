import React from "react";
import '../css/Heading.css';
function Heading(props) {
    const { heading1, heading2, paragrapg, className } = props;
    return (
        <div className={props.className}>
            <div className="inner-text">
                <h2 className="heading1">{heading1}</h2>
                <h1 className="heading2">{heading2}</h1>
                <p className="paragraph">{paragrapg}</p>
            </div>

        </div>
    );
}
export default Heading;
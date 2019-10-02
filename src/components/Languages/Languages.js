import React from 'react';
import './Languages.css';
import Zoom from "react-reveal/Zoom";

function Languages() {
    return (
        <Zoom>
            <div className="langsContainer">
                <h1>Languages</h1>
                <ul className="langs">
                    <li><h2>English</h2></li>
                    <li><h2>Hindi</h2></li>
                    <li><h2>Español (Novice)</h2></li>
                </ul>
            </div>
        </Zoom>
    );
}

export default Languages;

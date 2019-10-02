import React from 'react';
import './Loader.css';
function LoadingIcon() {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default LoadingIcon;

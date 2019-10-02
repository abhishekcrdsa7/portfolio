import React, { Component } from 'react';
import Parallax from 'parallax-js';
import './Parallax.css';

class ParallaxComponent extends Component{

    componentDidMount() {
        const scene = document.getElementById('scene');
        const parallaxInstance = new Parallax(scene);
    }

    render() {
        return(
            <div id="scene" data-hover-only="true">
                <div data-depth="0.2">
                    <img src={require("../../assets/layer1.png")} alt="layer1"/>
                </div>
                <div data-depth="0.6">
                    <img src={require("../../assets/layer2.png")} alt="layer2"/>
                </div>
            </div>
        );
    }
}

export default ParallaxComponent;

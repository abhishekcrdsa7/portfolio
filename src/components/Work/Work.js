import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './Work.css';


class Work extends Component {
    render() {
        return (
            <Zoom>
                <div className="work" id="work">
                    <h1>Work</h1>
                    <div className="workContainer">
                        <div className="internships">
                            <h2>Internship</h2>
                            <div className="workSamples">
                                <a href="https://www.skilldosti.com" target="_blank" className="field">
                                    <div className="w">
                                        <img className="works" src={require("../../assets/skilldosti.PNG")} alt="skilldosti"/>
                                    </div>
                                    <h3>Web Development</h3>
                                </a>

                                <a  href="https://www.pfrepo.me" target="_blank" className="field">
                                    <div className="w">
                                        <img className="works" src={require("../../assets/pfrepo.png")} alt="pfrepo"/>
                                    </div>
                                    <h3>Web Development</h3>
                                </a>
                            </div>
                        </div>
                        <div className="research">
                            <h2>Research</h2>
                            <h3>Successfully published a research paper on Sorting Algorithms in IEEE conference held at IIT Kanpur</h3>
                        </div>
                        <div className="workSamples">
                            <div className="github">
                                <a href="https://www.github.com/abhishekcrdsa7" target="_blank">
                                    <h2>Github</h2>
                                    <h3>https://www.github.com/abhishekcrdsa7</h3>
                                </a>
                            </div>
                            <div className="github">
                                <a href="http://abhishek-sharma.net" target="_blank">
                                    <h2>Portfolio</h2>
                                    <h3>http://abhishek-sharma.net</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        );
    }
}

export default Work;

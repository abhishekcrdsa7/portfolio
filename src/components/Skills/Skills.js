import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './Skills.css';

function Skills() {
    return (
        <Zoom>
            <div id="skills" className="skillsContainer">
                <h1>Programming Languages and Skills</h1>
                <ul className="skills">
                    <li><h2>JavaScript</h2></li>
                    <li><h2>Node</h2></li>
                    <li><h2>React</h2></li>
                    <li><h2>Angular</h2></li>
                    <li><h2>Solidity</h2></li>
                    <li><h2>Blockchain</h2></li>
                    <li><h2>Amazon Web Services</h2></li>
                    <li><h2>PostgreSQL</h2></li>
                    <li><h2>MongoDB</h2></li>
                    <li><h2>Adobe XD</h2></li>
                    <li><h2>Java</h2></li>
                </ul>
            </div>
        </Zoom>
    );
}

export default Skills;

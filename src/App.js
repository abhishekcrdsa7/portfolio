import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CustomizedTimeline from './components/Timeline/Timeline';
import SmallTimeline from './components/Timeline/SmallTimeline';
import SocialConnect from './components/Contact/SocialConnect/SocialConnect';
import Internships from './components/Timeline/Internships/Internships';
import './App.css';

import Cursor from "./components/Cursor/Cursor";
import About from "./components/About/About";
import Particles from "./components/About/Particle";
import Certification from './components/Certification/Certification';
import Contact from './components/Contact/Contact';

class App extends Component{
    state= {
        arrow: "none"
    };

    componentDidMount = () => {
        console.log = console.warn = console.error = () => {};
        window.addEventListener('scroll', () => {
            if(window.pageYOffset !== 0) {
                this.setState({...this.state, arrow: 'block'})
            } else {
                this.setState({...this.state, arrow: 'none'})
            }
        });
    };

    desktopComponent = () => {
        const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
        return (
            <div className="desktop">
                {
                    isMobileDevice ? null : <Cursor />
                }
                <div className="hero" id="hero">
                    <Particles />
                    <About />
                </div>
                <div className="timeline-container">
                    <p style={{textAlign: "center", fontSize: "2em"}} >Education and professional timeline</p>
                    <div className={"big-timeline"}>
                        <CustomizedTimeline />
                    </div>
                    <div className={"small-timeline"}>
                        <SmallTimeline />
                    </div>
                </div>
                <div className={"timeline-container"}>
                    <p style={{textAlign: "center", fontSize: "2em"}} >Internships</p>
                    <Internships />
                </div>
                <div className="timeline-container">
                    <p style={{textAlign: "center", fontSize: "2em"}} >Professional certifications</p>
                    <div>
                        <Certification />
                    </div>
                </div>
                <div className="timeline-container">
                    <p style={{textAlign: "center", fontSize: "2em"}} >Connect with me</p>
                    <div>
                        <SocialConnect />
                    </div>
                    <div>
                        <Contact />
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="App">
                {this.desktopComponent()}
                <Button style={{backgroundColor: 'rgb(240, 240, 240)'}} className="toTop" size="large" variant="contained" onClick={() => {
                    window.open("https://s3.ap-south-1.amazonaws.com/abhishek-sharma.net/resume.pdf", "_blank");
                }}>Resume</Button>
            </div>
        );
    };
}

export default App;

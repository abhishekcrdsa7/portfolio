import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './components/Header/Header';
import './App.css';
import Cursor from "./components/Cursor/Cursor";
import ParallaxComponent from "./components/Parallax/Parallax";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Languages from "./components/Languages/Languages";
import Contact from "./components/Contact/Contact";

class App extends Component{
    state= {
        arrow: "none",
        components: null
    };

    componentDidMount = () => {
        this.generateComponents();

        window.addEventListener('scroll', () => {
            if(window.pageYOffset !== 0) {
                this.setState({...this.state, arrow: 'block'})
            } else {
                this.setState({...this.state, arrow: 'none'})
            }
        });
    };

    desktopComponent = () => {
        return (
            <div className="desktop">
                <Cursor />
                <div className="hero" id="hero">
                    <Header />
                    <ParallaxComponent />
                    <About />
                </div>
                <Skills/>
                <Languages/>
                <Work />
                <Contact />
            </div>
        );
    };

    mobileComponent =() => {
      return (<div>
          <p>Oops..the website for mobile phones or smaller screens is in development mode :(</p>
          <p>It will be up in no time :)</p>
      </div>);
    };

    generateComponents = () => {
        this.setState({
            ...this.state,
            components: window.innerWidth > 1024 ? this.desktopComponent() : this.mobileComponent()
        });
        window.addEventListener('resize', () => {
            this.setState({
                ...this.state,
                components: window.innerWidth > 1024 ? this.desktopComponent() : this.mobileComponent()
            });
        });
    };

    render() {
        return (
            <div className="App">
                {this.state.components}
                <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    <img style={{display: this.state.arrow}} className="toTop" src={require('./assets/arrowtop.svg')} alt="toTop" height="40px" width="40px" color="#0b132b"/>
                </Link>
            </div>
        );
    };
}

export default App;

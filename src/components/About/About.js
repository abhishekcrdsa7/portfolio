import React, { Component } from 'react';
import './About.css';

class About extends Component {

    state = {
        name: ""
    };

    componentDidMount() {
        const name = "Abhishek Sharma";
        let i = 0;
        setTimeout(() => {
            const id = setInterval(() => {
                this.setState({name: name.substring(0, i+1)});
                i++;
                if(this.state.name === "Abhishek Sharma") {
                    clearInterval(id);
                }
            },150);
        },1000);
    }

    render() {
        return (
               <div id="about">
                    <h1 id="name">{this.state.name}</h1>
                    <div id="detail">
                        <ul>
                        <span id="listf">
                            <li><h3>Education: Bachelor of Technology</h3></li>
                            <li><h3>Passion: Web Development</h3></li>
                        </span>
                            <li style={{textAlign: 'center'}}><h3>Other Interests: Amazon Web Services and Blockchain</h3></li>
                        </ul>
                    </div>
               </div>
        );
    }
}

export default About;

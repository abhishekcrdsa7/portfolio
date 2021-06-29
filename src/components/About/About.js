import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './About.css';
import { Typography } from '@material-ui/core';
class About extends Component {

    state = {
        name: "A"
    };

    componentDidMount() {
        const name = "Abhishek Sharma";
        let i = 0;
        const id = setInterval(() => {
            this.setState({name: 'A' + name.substring(1, i+1)});
            i++;
            if(this.state.name === "Abhishek Sharma") {
                clearInterval(id);
            }
        },150);
    }

    render() {
        return (
               <div id="about">
                    <Typography variant="h3" component="h1" style={{fontSize: '30px', color: "#FFF", textAlign: 'center'}}>{this.state.name}</Typography>
                    <div id="detail">
                        <p id="detail-info" >I love to develop softwares as well as the cloud architectures to run those softwares.</p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <GitHubIcon style={{
                                        fontSize: '40px',
                                        cursor: 'pointer',
                                        margin: '0 20px'
                                    }} 
                                    onClick={() => {
                                        window.open("https://github.com/abhishekcrdsa7", "_blank");
                                    }}
                                />
                                <div>GitHub</div>
                            </div>
                            <div  onClick={() => {
                                    window.open("https://leetcode.com/abhisheksharmacrdsa7/", "_blank");
                                }}>
                                <span style={{fontSize: '40px', cursor: 'pointer', margin: '0 20px'}} className="iconify" data-icon="simple-icons:leetcode" data-inline="false"/>
                                <div>Leetcode</div>
                            </div>
                        </div>
                    </div>
               </div>
        );
    }
}

export default About;

import React, { Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import sendEmail from './AWS-SES';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Contact.css';
import { TextareaAutosize, Typography } from '@material-ui/core';

class Contact extends Component {
    state= {
      name: "",
      email: "",
      message: "",
      loading: false,
      error: "",
      success: ""
    };

    emailToAdmin = async () => {
      if(!this.state.name || !this.state.message || !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          return this.setState({...this.state, error: "Please fill all the fields with valid values."});
      }
      this.setState({...this.state, loading: true, error: ""});
      const html = this.generateHTML();
      const message = `Name: ${this.state.name}\n\nEmail: ${this.state.email}\n\nMessage: ${this.state.message}`;
      const result = await sendEmail(message, html);
      if(result) {
          this.setState({name: "", email: "", message: "", loading: false, success: "Woohoo!! Your message has successfully reached me!! I will get back to you in no time!"});
      }
        setTimeout(() => {
            this.setState({...this.state, error: "", success: ""})
        },10000);
    };

    generateHTML = () => {
        return (
            `<div><div>Name: ${this.state.name}</div><div>Email: ${this.state.email}</div><div>Message: ${this.state.message}</div></div>`
        );
    };

    render() {
        const { loading } = this.state;
        return (
            <div style={{marginBottom: '10vh'}}>
            <Typography style={{paddingBottom: '16px'}} variant="h6" component="h1" align='center'>Leave a message</Typography>
            <div>
                {this.state.error || this.state.success ? <div style={{color: this.state.error ? 'red' : 'green'}}><h4>{this.state.error || this.state.success}</h4></div> : null}
                <div>
                    <TextField required className="textField" id="standard-basic" label="Your name" value={this.state.name} variant="outlined"
                        onChange={
                            (e) => {
                                this.setState({...this.state, name: e.target.value}
                                )
                            }
                        }
                    />
                    <TextField required className="textField" id="standard-basic" label="Your email" value={this.state.email} variant="outlined"
                        onChange={
                            (e) => {
                                this.setState({...this.state, email: e.target.value}
                                )
                            }
                        } 
                    />
                </div>
                <label>
                    <TextareaAutosize
                        required
                        style={{width: '98.6%'}}
                        placeholder="Your message"
                        rows="10"
                        value={this.state.message}
                        onChange={
                            (e) => {
                               this.setState({...this.state, message: e.target.value});
                            }
                        }
                    />
                </label>
            </div>
            <Button style={{backgroundColor: 'rgb(25, 25, 25)', color: 'white', marginTop: '10px'}} variant="contained" onClick={this.emailToAdmin}>{loading ? <CircularProgress /> : "Send message"} </Button>
        </div>
        );
    }
}

export default Contact;

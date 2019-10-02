import React, { Component} from 'react';
import './Contact.css';
import Zoom from "react-reveal/Zoom";
import LoadingIcon from '../Loading/Loader';
import sendEmail from './AWS-SES';

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
        return (
            <Zoom>
                <div className="contactContainer" id="contact">
                    <h1>Contact</h1>
                    <div className="mail">
                        <h2>Mail</h2>
                        <h3>admin@abhishek-sharma.net</h3>
                    </div>
                    <div className="leaveMessage">
                        <h2>Leave a message</h2>
                        {this.state.error || this.state.success ? <div style={{color: this.state.error ? 'red' : 'green'}}><h4>{this.state.error || this.state.success}</h4></div> : null}
                        <div>
                            <div className="cinput">
                                <label>
                                    <h3>Your Name</h3>
                                    <input
                                        type="text"
                                        required
                                        className="contactInput"
                                        value={this.state.name}
                                        onChange={
                                            (e) => {
                                                this.setState({...this.state, name: e.target.value}
                                                )
                                            }
                                        }
                                    />
                                </label>
                            </div>
                            <div className="cinput">
                                <label className="cinput">
                                    <h3>Your Email</h3>
                                    <input
                                        type="email"
                                        className="contactInput"
                                        required
                                        value={this.state.email}
                                        onChange={
                                            (e) => {
                                                this.setState({...this.state, email: e.target.value}
                                                )
                                            }
                                        }
                                    />
                                </label>
                            </div>
                        </div>
                        <label>
                            <h3>Message</h3>
                            <textarea
                                required
                                rows="10"
                                cols="55"
                                value={this.state.message}
                                onChange={
                                    (e) => {
                                       this.setState({...this.state, message: e.target.value});
                                    }
                                }
                            />
                        </label>
                    </div>
                    <div className="submitButton" onClick={this.emailToAdmin}>
                        {this.state.loading ? <LoadingIcon/> : <h4>Submit</h4>}
                    </div>
                </div>
            </Zoom>
        );
    }
}

export default Contact;

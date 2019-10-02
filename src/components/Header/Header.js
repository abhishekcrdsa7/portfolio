import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css';

class Header extends Component{

    componentDidMount() {
        let ele = document.querySelector('.header');
        let o = document.querySelectorAll('.o');
        window.addEventListener('scroll', () => {
            if(window.pageYOffset !== 0) {
                ele
                    .setAttribute(
                        'style',
                        'background-color: #FFF; color: #0b132b'
                    );
                o.forEach((e) => {
                    e.setAttribute('style', 'color: #0b132b')
                });
            }else {
                ele
                    .setAttribute(
                        'style',
                        'background-color: #0b132b; color: #FFF;'
                    );
                o.forEach((e) => {
                    e.setAttribute('style', 'color: #FFFFFF')
                });
            }
        })
    }

    render() {
        return (
            <div className='header'>
                <div className="name">
                    Abhishek Sharma
                </div>
                <div className='options'>
                    <Link
                        className='o'
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    ><p>About</p></Link>
                    <Link
                        className='o'
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration= {500}
                    ><p>Skills</p></Link>
                    <Link
                        className='o'
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    ><p>Work</p></Link>
                    <Link
                        className='o'
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    ><p>Contact</p></Link>
                </div>
            </div>
        );
    }
}

export default Header;

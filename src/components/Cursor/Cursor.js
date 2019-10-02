import React, { Component } from 'react';
import './Cursor.css';

class Cursor extends Component{

    componentDidMount() {
        f();
    }

    render() {
        return (
            <div className='cursor' />
        );
    }
}

function f() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    });

    window.addEventListener('scroll', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    });

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
}

export default Cursor;

import React from 'react'

import "./Box.css"
import img1 from "./images/x.png";
import img2 from './images/o.png';


export const Box = ({ value, onClick }) => {
    const src = value === " " ? img1 : img2;

    if (value === null) {
        return (<button className="box" onClick={onClick}>{value}</button>)
    }

    return (
        <img className="box" src={src} />
    )
}
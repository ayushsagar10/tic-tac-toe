import React from 'react'

import "./Box.css"
import img1 from "./images/x.png";
import img2 from './images/o.png';


export const Box = ({ value, onClick }) => {
    // const style = value === " " ? "box x" : "box o";
    const src = value === " " ? img1 : img2;

    if (value === null) {
        return (<button className="box" onClick={onClick}>{value}</button>)
    }

    return (
        // <button className={style} onClick={onClick}>{value}</button>
        <img className="box" src={src} />
    )
}















// export const Box = () => {
//   return (
//     <button className="box"><img className="imagex" src= {img1} height={100} width={100}/></button>
//     // <div className="App"><img src= {img1} />
//     // </div>
//   )
// }

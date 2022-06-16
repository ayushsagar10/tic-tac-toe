import React from 'react'

import "./ScoreBoard.css"
import img1 from "./images/xtp.png";
import img2 from './images/otp.png';

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}><img className="boxsb" src={img1}/> - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}><img className="boxsb" src={img2}/> - {oScore}</span>
    </div>
  )
}
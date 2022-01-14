import React from "react";
import image from "../images/Face.png"

export default function Hearder() {
  return (
    <div className="header">
      <img src={image} className="imoji" />
      <h2>Meme Generator</h2>
      <h4 className="header--project">React Course-Project3</h4>
    </div>
  )
}
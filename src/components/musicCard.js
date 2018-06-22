import React from 'react'
import '../css/movieCard.css'

export const MusicCard = props => (
   
    <div className="musicCard">
      <img src= {props.coverUrl} alt={props.title} width="250px" />
      <h2 className="musicTitle">{props.title}</h2>
      <div className="musicText">
        <p>{props.bodyText}</p>
      </div>
    </div>
)

export default MusicCard



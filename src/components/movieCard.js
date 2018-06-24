import React from 'react'
import '../css/movieCard.css'

export const MovieCard = props => (
   
    <div className="movieCard">
      <img src= {props.coverUrl} alt={props.title} width="250px" />
      <h2 className="movieTitle">{props.title}</h2>
      <div className="movieText">
        <p>{props.bodyText}</p>
      </div>
    </div>
)

export default MovieCard



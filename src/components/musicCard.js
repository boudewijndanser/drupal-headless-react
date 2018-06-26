import React from 'react'

import '../css/music.css'

class MusicCard extends React.Component {
  
  render() {
    const { id, title, coverUrl, history } = this.props

    return(
      <div className="musicCard">
      <img src= {coverUrl} alt={title} width="250px" onClick={() => history.push(`music/${id}`)} />
      </div>
    )
  }
}
   
export default MusicCard
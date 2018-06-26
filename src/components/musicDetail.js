import * as React from 'react'
import * as request from 'superagent'
import { baseUrl } from '../constants'

import '../css/music.css'

class MusicDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      music: null,
      deeplink: this.props.match.params.id
    }
  }
 
  getMusicDetail = (dispatchData) => {
    request
    .get(`${baseUrl}/music/${this.state.deeplink}`)
    .then(response => dispatchData(response.body[0]))
    .catch(err => alert(err))
  }

  dispatchData = (data) => {
    this.setState({
      loading: false,
      music: data 
    })
  }

  componentDidMount() {
    if (this.state.deeplink && this.state.music === null) {
        this.getMusicDetail(this.dispatchData)
        }
    }

  render() {
    if (this.state.music === null) return null
    
    // Destructuring the info from Express for easy reference.
    const { title, artist, coverUrl, year, bodyText } = this.state.music 

    return (
      <div>
        <h1>Music</h1>
          <div className="musicDetail">
            <div className="coverHolder">
              <img src= {coverUrl} alt={title}/>
            </div>
            <div className="albumDetails">
              <h2 className="artist">{artist}</h2>
              <h3 className="musicTitle">{title}</h3>
              <h4>{year}</h4>
              <div className="musicText">
                <p>{bodyText}</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default MusicDetail
import * as React from 'react'
import * as request from 'superagent'
import { baseUrl } from '../constants'
import LoadingText from './loader'

import '../css/musicDetail.css'

class MusicDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      music: null,
      deeplink: ''
    }
  }
  getmusic = (dispatchData) => {
    request
    .get(`${baseUrl}/music/${this.state.deeplink}`)
    .then(response => dispatchData(response.body))
    .catch(err => alert(err))
  }

  dispatchData = (data) => {
    this.setState({
      loading: false,
      music: data
    })
  }
  
  componentWillMount() {
    if (this.props.match.params.id) {
        this.setState({deeplink: this.props.match.params.id })
        }
    }

  componentDidMount() {
    if (this.state.deeplink && this.state.music === null) {
        this.getmusic(this.dispatchData)
        }
    }

  render() {
    if (this.state.music === null) return null
    
    // Destructuring the info from Express for easy reference.
    const { title, artist, coverUrl, year, bodyText } = this.state.music[0]
    return (
      <div>
        <h1>Music/{artist}</h1>
          <LoadingText busy={this.state.loading} />
          <div className="musicDetail">
            <div>
              <img src= {coverUrl} alt={title}/>
            </div>
            <div>
              <h2 className="musicTitle">{title}</h2>
              <h3>{artist}</h3>
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
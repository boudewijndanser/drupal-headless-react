import * as React from 'react'
import * as request from 'superagent'
import { baseUrl } from '../constants'
import MusicCard from './musicCard'

import '../css/music.css'

class musicApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      music: null
    }
  }

  getMusic = (dispatchData) => {
    request
    .get(`${baseUrl}/music`)
    .then(response => dispatchData(response.body))
    .catch(err => alert(err))
  }

  dispatchData = (data) => {
    this.setState({
      loading: false,
      music: data
    })
  }
  
  componentDidMount() {
    if (this.state.music === null) {
      this.getMusic(this.dispatchData)
      }
    }

  render() {
    if (this.state.music === null) return null

    const { history } = this.props
    const { music } = this.state
    
    return (
      <div>
        <h1>Music</h1>
          <div className="musicCards">
            {music && music.map(musicData => <MusicCard key={musicData.id} history={history} {...musicData}/>)}
          </div>   
      </div>
    )
  }
}

export default musicApi
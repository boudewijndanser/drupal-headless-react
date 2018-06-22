import * as React from 'react'
import * as request from 'superagent'
import { baseUrl } from '../constants'
import MusicCard from './musicCard'
import LoadingText from './loader'

class musicApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      music: null
    }
  }
  getmusic = (dispatchData) => {
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
    console.log('state after new data: ',this.state)
  }
  
  componentDidMount() {
    if (this.state.music === null) {
      this.getmusic(this.dispatchData)
      console.log('Getting music from API')}
    }

  render() {
    if (this.state.music === null) return null
    
    return (
      <div>
        <h1>music</h1>
          <LoadingText busy={this.state.loading} />
          <div>
            {this.state.music && this.state.music.map(musicData => <MusicCard key={musicData.id} {...musicData}/>)}
          </div>   
      </div>
    )
  }
}

export default musicApi
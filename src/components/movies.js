import * as React from 'react'
import * as request from 'superagent'
import { baseUrl } from '../constants'

// Loading, make external later
function LoadingComponent(props) {
  if (!props.busy) {
    return null
  }

  return (
    <div className="warning">
      <p>Please hold...</p>
    </div>
  )
}


class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      movies: null
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      loading: !prevState.loading
    }))}
  
    getMovies = (dispatchData) => {
      // console.log('getMovies function...')
      request
    .get(`${baseUrl}/movies`)
    .then(response => dispatchData(response.body))
    .catch(err => alert(err))
    }

    dispatchData = (data) => {
      this.setState({
        loading: false,
        movies: data
      })
      console.log('state after new data: ',this.state)
    }
    componentDidMount() {
      if (this.state.movies === null) {
        this.getMovies(this.dispatchData)
        console.log('Getting movies from API')}
      }
  


  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <LoadingComponent busy={this.state.loading} />
        <button onClick={this.handleToggleClick}>
          {this.state.loading ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Movies

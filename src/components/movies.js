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
  
    getMovies = () => {
      console.log('getMovies function...')
    request
      .get(`${baseUrl}`)
      .then(result => this.setState({loading:false,
      movies:result.body}))
      .catch(err => console.error(err))
    } 
    componentDidMount() {
      if (this.props.movies === null) {
        this.getMovies()
        console.log('Getting movies from API')}
      }
  
  
  render() {
    return (
      <div className="movies">
        <header className="header">
          <h1>Movies</h1>
        </header>
        <LoadingComponent busy={this.state.loading} />
        <button onClick={this.handleToggleClick}>
          {this.state.loading ? 'Hide' : 'Show'}
        </button>
        {this.state.movies}
        
      </div>
    )
  }
}

export default Movies

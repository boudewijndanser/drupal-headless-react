import * as React from 'react'
import * as request from 'superagent'
import { baseUrl } from '../constants'
import MovieCard from './movieCard'
import LoadingText from './loader'

class MoviesApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      movies: null
    }
  }
  getMovies = (dispatchData) => {
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
  }
  
  componentDidMount() {
    if (this.state.movies === null) {
      this.getMovies(this.dispatchData)
      }
    }

  render() {
    if (this.state.movies === null) return null
    
    // Destructuring the info from Express for easy reference.
    const { movies } = this.state
    return (
      <div>
        <h1>Movies</h1>
          <LoadingText busy={this.state.loading} />
          <div>
            { movies && movies.map(movieData => <MovieCard key={movieData.id} {...movieData}/>)}
          </div>   
      </div>
    )
  }
}

export default MoviesApi
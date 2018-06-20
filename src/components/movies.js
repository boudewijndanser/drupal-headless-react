import * as React from 'react'
// import * as request from 'superagent'
// import { baseUrl } from '../constants'
import MovieCard from './movieCard'
import LoadingText from './loader'
import { moviesObject } from '../data/dummy'

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      movies: null
    }
  }
  
  render() {
    if (moviesObject === null) return null

    return (
      <div>
        <h1>Movies</h1>
          <LoadingText busy={this.state.loading} />
          <div>
            {moviesObject.map(movieData => <MovieCard key={movieData.id} {...movieData}/>)}
          </div>   
      </div>
    )
  }
}

export default Movies
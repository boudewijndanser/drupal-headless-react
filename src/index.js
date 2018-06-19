import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// Styling
import './css/index.css'

// Pages
import Home from './components/home'
import Movies from './components/movies'
import Music from './components/music'
import NotFound from './components/notFound'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/movies" exact component={ Movies } />
    <Route path="/music" exact component={ Music } />
    <Route component={ NotFound } />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()

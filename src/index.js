import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// Styling
import './css/index.css'
import './css/typography.css'

// Pages + Nav
import NavBar from './components/navBar'
import Footer from './components/footer'
import Home from './components/home'
import Movies from './components/movies'
import Music from './components/music'
import MusicDetail from './components/musicDetail'
import NotFound from './components/notFound'

ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper">
      <div className="nav">
        <NavBar/>
      </div>
      <div className ="content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/movies" component={ Movies } />
          <Route exact path="/music" component={ Music } />
          <Route path="/music/:id" component={ MusicDetail } />
          <Route component={ NotFound } />
        </Switch>
      </div>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()

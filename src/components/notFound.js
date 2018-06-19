import * as React from 'react'

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <header className="header">
          <h1>Oops...</h1>
        </header>
      <p>Something went terribly wrong...</p>
      </div>
    )
  }
}

export default NotFound

import React from 'react'
import '../css/typography.css'

export const LoadingText = props => {
    if (!props.busy) {
      return null
    }
    return (
      <div className="warning">
        <p>Please hold...</p>
      </div>
    )
  }

export default LoadingText
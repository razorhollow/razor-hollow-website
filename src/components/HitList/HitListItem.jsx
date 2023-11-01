import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HitListItem = ({ icon, tagline }) => {
  return (
    <div className="feature-item">
      <FontAwesomeIcon icon={icon} />
      <span>{tagline}</span>
    </div>
  )
}

export default HitListItem

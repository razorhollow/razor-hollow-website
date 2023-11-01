import React from 'react'
import * as styles from './HitList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/react'

const hitListItemStyle = css`
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`

const HitListItem = ({ icon, tagline }) => {
  return (
    <div className={styles.featureItem} css={hitListItemStyle}>
      <FontAwesomeIcon icon={icon} className={styles.faIcon}style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#116efd",}} />
      <span className={styles.tagline}>{tagline}</span>
    </div>
  )
}

export default HitListItem

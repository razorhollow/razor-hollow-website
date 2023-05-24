import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import * as styles from './HitList.module.css'


const HitList = () => {
  return (
    <Container className={styles.hero}>
      <Container className={styles.card}>
        <h2>We navigate the digital wilderness for you.</h2>
        <p>Our efficient approach guarantees swift and effective results. We comprehend the fast-paced nature of the outdoor industry, and we're here to help you keep up and stand out.</p>
        <Container className={styles.hitList}>
        </Container>
      </Container>
    </Container>
  )
}

export default HitList

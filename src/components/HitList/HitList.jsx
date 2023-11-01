import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import * as styles from './HitList.module.css'
import HitListItem from './HitListItem'
import { faCode, faSearch, faMobileAlt, faCamera, faFilm, faMountain, faFish, faDeer } from '@fortawesome/pro-duotone-svg-icons'

const hitListData = [
  { icon: faCode, tagline: "Full Stack Mastery" },
  { icon: faSearch, tagline: "SEO Excellence" },
  { icon: faMobileAlt, tagline: "Custom App Magic" },
  { icon: faCamera, tagline: "Capturing Outdoors" },
  { icon: faFilm, tagline: "Epic Video Production" },
  { icon: faMountain, tagline: "Digital Asset Craft" },
  { icon: faFish, tagline: "Guide Turned Developer" },
  { icon: faDeer, tagline: "Tech with Outdoor Heart" }
];


const HitList = () => {
  return (
    <Container className={styles.hero}>
      <Container className={styles.card}>
        <h2>We navigate the digital wilderness for you.</h2>
        <p>Our efficient approach guarantees swift and effective results. We comprehend the fast-paced nature of the outdoor industry, and we're here to help you keep up and stand out.</p>
        <Container className={styles.hitList}>
          {hitListData.map((item, index) => (
            <HitListItem key={index} icon={item.icon} tagline={item.tagline} />
          ))}
        </Container>
      </Container>
    </Container>
  )
}

export default HitList

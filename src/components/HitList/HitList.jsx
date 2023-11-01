import * as React from 'react'
import { Container } from 'react-bootstrap'
import * as styles from './HitList.module.css'
import HitListItem from './HitListItem'
import { faCode, faSearch, faMobileAlt, faCamera, faFilm, faMountain, faFish, faDeer } from '@fortawesome/pro-duotone-svg-icons'

const hitListData = [
  { icon: faCode, tagline: "Modular websites that scale" },
  { icon: faSearch, tagline: "SEO that drives customer engagement" },
  { icon: faMobileAlt, tagline: "Custom web apps that save you time" },
  { icon: faCamera, tagline: "Stunning brand photography" },
  { icon: faFilm, tagline: "Epic Video Production" },
  { icon: faMountain, tagline: "Digital Asset Creation" },
  { icon: faFish, tagline: "Genuine understanding of the outdoor lifestyle" },
  { icon: faDeer, tagline: "Tech with Outdoor Heart" }
];


const HitList = () => {
  return (
    <Container className={styles.hitlist}>
      <Container className={styles.card}>
        <h2>We navigate the digital wilderness for you.</h2>
        <p>Our efficient approach guarantees swift and effective results. We comprehend the fast-paced nature of the outdoor industry, and we're here to help you keep up and stand out.</p>
      </Container>
        <Container className={styles.iconSection}>
          {hitListData.map((item, index) => (
            <HitListItem key={index} icon={item.icon} tagline={item.tagline} />
          ))}
        </Container>
    </Container>
  )
}

export default HitList

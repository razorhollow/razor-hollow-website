import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import * as styles from './Hero.module.css'
import { Button, Card } from 'react-bootstrap'


const Hero = () => {
  return (
    <Container className={styles.hero}>
      <Container className={styles.card}>
        <h1>Digital Solutions For The Outdoor Professional</h1>
        <p>At Razor Hollow, we are dedicated to helping your business stand out from the competition. We specialize in photography, web development, and video production that is tailored specifically to hunting and fishing guides. With our expert services, you can create high quality social media posts that will attract new customers and give your current clients something to rave about.</p>
        <Container className={styles.buttonBar}>
          <Button className={styles.primaryButton}>Get In Touch</Button>
          <Button className={styles.secondaryButton}>See Our Work</Button>
        </Container>
      </Container>
      <StaticImage
        alt="Driftboat Fly Fishing Guide"
        src='https://images.unsplash.com/photo-1519443608216-0adf2e4a7515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        className={styles.cardImg}
      />
    </Container>
  )
}

export default Hero

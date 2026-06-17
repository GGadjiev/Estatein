import './HomeHero.scss'
import Button from '@/components/Button/index.js'
import Icon from '@/components/Icon/index.js'
import { Image } from 'minista'
import AboutStats from '@/components/AboutStats/index.js'

export default (props) => {
  const { id } = props
  return (
    <section className="home-hero" aria-labelledby="home-hero-title" id={id}>
      <div className="home-hero__inner container">
        <div className="home-hero__content">
          <div className="home-hero__text">
            <h1 className="home-hero__title">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="home-hero__description">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>

          <div className="home-hero__buttons">
            <Button className="home-hero__button" href="about">
              Learn More
            </Button>
            <Button
              className="home-hero__button button_purple"
              href="properties"
            >
              Browse Properties
            </Button>
          </div>

          <AboutStats className="home-hero__about" />
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__circle">
            <Image
              src="/src/assets/images/home-hero-circle.png"
              className="home-hero__circle-image"
            />
            <Button
              className="home-hero__circle-link"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
              target="_blank"
            >
              <Icon className="home-hero__circle-link-icon" name="arrow" />
            </Button>
          </div>

          <div className="home-hero__image">
            <Image src="/src/assets/images/home-hero-image.png" />
          </div>
        </div>
      </div>
    </section>
  )
}

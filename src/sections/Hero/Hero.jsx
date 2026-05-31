import './Hero.scss'
import Button from '@/components/Button/index.js'
import Icon from '@/components/Icon/index.js'
import { Image } from 'minista'
import AboutStats from '@/components/AboutStats/index.js'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="hero__description">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>

          <div className="hero__buttons">
            <Button className="hero__button" href="/">
              Learn More
            </Button>
            <Button className="hero__button button_purple" href="/">
              Browse Properties
            </Button>
          </div>

          <AboutStats className="hero__about" />
        </div>

        <div className="hero__visual">
          <div className="hero__circle">
            <Image
              src="/src/assets/images/hero-circle.png"
              className="hero__circle-image"
            />
            <Button
              className="hero__circle-link"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
            >
              <Icon className="hero__circle-link-icon" name="arrow" />
            </Button>
          </div>

          <div className="hero__image">
            <Image src="/src/assets/images/hero-image.png" />
          </div>
        </div>
      </div>
    </section>
  )
}

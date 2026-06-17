import './AboutJourney.scss'
import Section from '@/layouts/Section/index.js'
import AboutStats from '@/components/AboutStats/index.js'
import { Image } from 'minista'

export default (props) => {
  const { id } = props
  return (
    <Section
      className="about-journey section_side-by-side"
      title="Our Journey"
      titleId="about-journey-title"
      id={id}
      description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
      headerMedia={
        <div className="about-journey__image-container">
          <Image
            className="about-journey__image"
            src="src/assets/images/house-on-hand.png"
          />
        </div>
      }
    >
      <div className="about-journey__image-container hidden-tablet">
        <Image
          className="about-journey__image"
          src="src/assets/images/house-on-hand.png"
        />
      </div>

      <AboutStats className="about-journey__about" />
    </Section>
  )
}

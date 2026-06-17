import './AboutExperience.scss'
import Section from '@/layouts/Section/index.js'
import { aboutExperience } from '@/constants/data.js'
import Card from '@/components/Card/index.js'

export default (props) => {
  const { id } = props
  return (
    <Section
      className="about-experience"
      title="Navigating the Estatein Experience"
      titleId="about-experience-title"
      id={id}
      description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
    >
      <div className="about-experience__container">
        {aboutExperience.map((item) => (
          <Card {...item} stepCard className="about-experience__item" />
        ))}
      </div>
    </Section>
  )
}

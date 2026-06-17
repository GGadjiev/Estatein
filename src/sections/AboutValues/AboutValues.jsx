import './AboutValues.scss'
import Section from '@/layouts/Section/index.js'
import { aboutValues } from '@/constants/data.js'
import Icon from '@/components/Icon/index.js'

export default (props) => {
  const { id } = props
  return (
    <Section
      className="about-values section_side-by-side"
      title="Our Values"
      titleId="about-clients-title"
      id={id}
      description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
    >
      <div className="about-values__container">
        {aboutValues.map((value) => (
          <div className="about-values__item">
            <div className="about-values__item-title-container">
              <Icon
                className="about-values__item-icon"
                name={value.logo}
                hasFill
              />
              <h3 className="about-values__item-title">{value.title}</h3>
            </div>
            <p className="about-values__item-description">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

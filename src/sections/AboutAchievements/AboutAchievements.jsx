import './AboutAchievements.scss'
import Section from '@/layouts/Section/index.js'
import { aboutAchievements } from '@/constants/data.js'
import Card from '@/components/Card/index.js'

export default () => {
  return (
    <Section
      className="about-achievements"
      title="Our Achievements"
      titleId="about-achievements-title"
      description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
    >
      <div className="about-achievements__container">
        {aboutAchievements.map((item) => (
          <Card {...item} className="about-achievements__item" />
        ))}
      </div>
    </Section>
  )
}

import './ServicesInvestment.scss'
import Section from '@/layouts/Section/index.js'
import Card from '@/components/Card/index.js'
import { servicesInvestment, servicesWideCards } from '@/constants/data.js'

export default (props) => {
  const { id } = props
  return (
    <Section
      className="services-investment section_side-by-side"
      id={id}
      title="Smart Investments, Informed Decisions"
      titleId="services-investment-title"
      description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
    >
      <div className="services-investment__grid">
        {servicesInvestment.map((item) => (
          <Card {...item} className="services-investment__item" />
        ))}
      </div>
      <Card
        className="services-investment__wide-card"
        wideCard
        actions
        {...servicesWideCards.investment}
      />
    </Section>
  )
}

import './ServicesValue.scss'
import Section from '@/layouts/Section/index.js'
import Card from '@/components/Card/index.js'
import { servicesValue, servicesWideCard } from '@/constants/data.js'

export default () => {
  return (
    <Section
      className="services-value"
      title="Unlock Property Value"
      titleId="services-value-title"
      description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
    >
      <div className="services-value__grid">
        {servicesValue.map((item) => (
          <Card {...item} className="services-value__item" />
        ))}
        <Card
          className="services-value__wide-card"
          wideCard
          actions
          {...servicesWideCard}
        />
      </div>
    </Section>
  )
}

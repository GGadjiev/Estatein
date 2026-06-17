import './ServicesGrid.scss'
import Section from '@/layouts/Section/index.js'
import Card from '@/components/Card/index.js'

export default (props) => {
  const { title, description, cards, wideCard, id } = props

  return (
    <Section
      className="services-grid"
      title={title}
      titleId="services-grid-title"
      description={description}
      id={id}
    >
      <div className="services-grid__grid">
        {cards.map((item) => (
          <Card {...item} className="services-grid__item" />
        ))}
        <Card
          className="services-grid__wide-card"
          wideCard
          actions
          titleBig
          {...wideCard}
        />
      </div>
    </Section>
  )
}

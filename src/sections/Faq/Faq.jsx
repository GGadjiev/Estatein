import './Faq.scss'
import { faq } from '@/constants/data.js'
import Card from '@/components/Card/index.js'
import SliderSection from '@/layouts/SliderSection/index.js'

export default (props) => {
  const { id } = props
  return (
    <SliderSection
      className="faq"
      title="Frequently Asked Questions"
      titleId="faq-title"
      description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      sliderId="faq"
      actionConfig={{ href: '/about', label: 'View All FAQ’s' }}
      id={id}
      sliderProps={{
        padding: 1,
      }}
    >
      {faq.map((item) => (
        <Card {...item} actions className="faq__item" />
      ))}
    </SliderSection>
  )
}

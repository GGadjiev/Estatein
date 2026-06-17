import './Reviews.scss'
import { reviews } from '@/constants/data.js'
import ReviewCard from '@/components/ReviewCard/index.js'
import SliderSection from '@/layouts/SliderSection/index.js'

export default (props) => {
  const { id } = props
  return (
    <SliderSection
      className="reviews"
      title="What Our Clients Say"
      titleId="reviews-title"
      description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      sliderId="reviews"
      actionConfig={{ href: 'about', label: 'View All Testimonials' }}
      id={id}
    >
      {reviews.map((item) => (
        <ReviewCard {...item} className="reviews__item" />
      ))}
    </SliderSection>
  )
}

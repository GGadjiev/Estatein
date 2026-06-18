import './Properties.scss'
import { properties } from '@/constants/data.js'
import PropertyCard from '@/components/PropertyCard/index.js'
import SliderSection from '@/layouts/SliderSection/index.js'

export default (props) => {
  const { title, titleId, description, sliderId, id } = props
  return (
    <SliderSection
      className="properties"
      title={title}
      titleId={titleId}
      description={description}
      sliderId={sliderId}
      actionConfig={{ href: '/properties', label: 'View All Properties' }}
      id={id}
      sliderProps={{
        padding: 1,
      }}
    >
      {properties.map((item) => (
        <PropertyCard {...item} className="properties__item" />
      ))}
    </SliderSection>
  )
}

import '@/sections/HomeProperties/HomeProperties.scss'
import { properties } from '@/constants/data.js'
import PropertyCard from '@/components/PropertyCard/index.js'
import SliderSection from '@/layouts/SliderSection/index.js'

export default () => {
  return (
    <SliderSection
      className="properties"
      title="Discover a World of Possibilities"
      titleId="properties-title"
      description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
      sliderId="properties"
      actionConfig={{ href: '/', label: 'View All Properties' }}
    >
      {properties.map((item) => (
        <PropertyCard {...item} className="properties__item" />
      ))}
    </SliderSection>
  )
}

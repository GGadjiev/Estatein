import './Properties.scss'
import { properties } from '@/constants/data.js'
import PropertyCard from '@/components/PropertyCard/index.js'
import SliderSection from '@/layouts/SliderSection/index.js'

export default () => {
  return (
    <SliderSection
      className="properties"
      title="Featured Properties"
      titleId="properties-title"
      description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
      sliderId="properties"
      actionConfig={{ href: '/', label: 'View All Properties' }}
      sliderProps={{
        slidesPerViewMobile: 1,
        slidesPerViewTablet: 2,
        slidesPerViewDesktop: 3,
      }}
    >
      {properties.map((item) => (
        <PropertyCard {...item} className="properties__item" />
      ))}
    </SliderSection>
  )
}

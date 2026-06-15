import './PropertyOverview.scss'
import PropertySlider from '@/components/PropertySlider/index.js'
import { propertyOverview } from '@/constants/data.js'
import Icon from '@/components/Icon/index.js'

export default () => {
  const {
    title,
    location,
    price,
    description,
    bedroomsCount,
    bathroomsCount,
    sliderImages,
    area,
    features,
  } = propertyOverview[0]

  return (
    <section
      className="property-overview"
      aria-labelledby="property-overview-title"
    >
      <div className="property-overview__inner container">
        <div className="property-overview__header">
          <h2 className="property-overview__title h3-big">{title}</h2>
          <span className="property-overview__location">
            <Icon
              name="mappoint"
              hasFill
              className="property-overview__location-icon"
            />
            {location}
          </span>
          <span className="property-overview__price-inner">
            <span className="property-overview__price-text">Price</span>
            <span className="property-overview__price">{price}</span>
          </span>
        </div>

        <PropertySlider id="property-overview" images={sliderImages} />

        <div className="property-overview__footer">
          <div className="property-overview__description-container">
            <div className="property-overview__description-header">
              <h3 className="property-overview__description-title">
                Description
              </h3>
              <p className="property-overview__description">{description}</p>
            </div>
            <div className="property-overview__description-list">
              <div className="property-overview__description-item">
                <h4 className="property-overview__description-item-title">
                  <Icon name="bedroom" hasFill />
                  Bedrooms
                </h4>
                <span className="property-overview__description-item-value">
                  {bedroomsCount}
                </span>
              </div>
              <div className="property-overview__description-item">
                <h4 className="property-overview__description-item-title">
                  <Icon name="bathroom" hasFill />
                  Bathrooms
                </h4>
                <span className="property-overview__description-item-value">
                  {bathroomsCount}
                </span>
              </div>
              <div className="property-overview__description-item">
                <h4 className="property-overview__description-item-title">
                  <Icon name="area" hasFill />
                  Area
                </h4>
                <span className="property-overview__description-item-value">
                  {area}
                </span>
              </div>
            </div>
          </div>

          <div className="property-overview__features-container">
            <h3 className="property-overview__features-title">
              Key Features and Amenities
            </h3>
            {features.map((feature) => (
              <div className="property-overview__features-item">
                <Icon name="lightning" hasFill />
                <span className="property-overview__features-text">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

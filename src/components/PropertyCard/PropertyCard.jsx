import './PropertyCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'
import TextSlicer from '@/modules/TextSlicer.js'

export default (props) => {
  const { className, title, description, image, details, price, currency } =
    props
  const slisedDesc = TextSlicer(description, 70)
  const isSlised = description && description.length > slisedDesc.length

  return (
    <div className={clsx('property-card', className)}>
      <Image
        className="property-card__image"
        src={'/src/assets/images/' + image + '.png'}
      />
      <div className="property-card__content">
        <h3 className="property-card__title">{title}</h3>
        <p className="property-card__description">
          {slisedDesc}{' '}
          {isSlised && (
            <a className="property-card__description-link" href="/">
              Read More
            </a>
          )}
        </p>
      </div>
      <div className="property-card__details">
        <span className="property-card__detail">
          <Icon className="property-card__detail-icon" name="bedroom" hasFill />
          {details.bedrooms + '-Bedroom'}
        </span>
        <span className="property-card__detail">
          <Icon
            className="property-card__detail-icon"
            name="bathroom"
            hasFill
          />
          {details.bathrooms + '-Bathroom'}
        </span>
        <span className="property-card__detail">
          <Icon className="property-card__detail-icon" name="villa" hasFill />
          {details.type}
        </span>
      </div>
      <div className="property-card__footer">
        <span className="property-card__price-container">
          <span className="property-card__price-text">Price</span>
          <span className="property-card__price">
            {currency}
            {price.toLocaleString()}
          </span>
        </span>
        <Button className="property-card__button button_purple" href="/">
          View Property Details
        </Button>
      </div>
    </div>
  )
}

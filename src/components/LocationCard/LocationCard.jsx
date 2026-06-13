import './LocationCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'

export default (props) => {
  const {
    className,
    category,
    address,
    description,
    email,
    phone,
    locationName,
  } = props

  return (
    <article className={clsx('location-card', className)}>
      <div className="location-card__header">
        <span className="location-card__category">{category}</span>
        <h3 className="location-card__title h3-big">{address}</h3>
        <p className="location-card__description">{description}</p>
      </div>
      <ui className="location-card__tags">
        <li className="location-card__tags-item">
          <Icon name="writing" hasFill />
          {email}
        </li>
        <li className="location-card__tags-item">
          <Icon name="phone" hasFill />
          {phone}
        </li>
        <li className="location-card__tags-item">
          <Icon name="mappoint" hasFill />
          {locationName}
        </li>
      </ui>
      <Button className="location-card__button button_purple">
        Get Direction
      </Button>
    </article>
  )
}

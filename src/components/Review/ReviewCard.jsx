import './ReviewCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Icon from '@/components/Icon/index.js'

export default (props) => {
  const { className, rating, title, text, author } = props

  return (
    <div className={clsx('review-card', className)}>
      <div className="review-card__rating">
        {[...Array(rating)].map((_) => (
          <Icon className='review-card__rating-star' name="star" hasFill />
        ))}
      </div>
      <div className="review-card__text-container">
        <h3 className="review-card__title">{title}</h3>
        <p className="review-card__text">{text}</p>
      </div>
      <div className="review-card__author">
        <Image
          className="review-card__author-avatar"
          src={'/src/assets/images/' + author.avatar + '.png'}
        />
        <div className="review-card__author-info">
          <span className='review-card__author-name'>{author.name}</span>
          <span className='review-card__author-location'>{author.location}</span>
        </div>
      </div>
    </div>
  )
}

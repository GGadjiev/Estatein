import './ClientCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'
import { link } from "@/utils/link.js";

export default (props) => {
  const { className, name, founderYear, domain, category, url, review } = props

  return (
    <article className={clsx('client-card', className)}>
      <div className="client-card__header">
        <div className="client-card__header-text">
          <span className="client-card__founder-year">Since {founderYear}</span>
          <h3 className="client-card__name h3-big">{name}</h3>
        </div>
        <Button className="client-card__button button_gray" href={link(url)}>
          Visit Website
        </Button>
      </div>

      <div className="client-card__tags">
        <div className="client-card__tag-item">
          <span className="client-card__tag-item-text">
            <Icon className="client-card__tag-item-icon" name="domain-icon" />
            Domain
          </span>
          {domain}
        </div>

        <div className="client-card__tag-item">
          <span className="client-card__tag-item-text">
            <Icon className="client-card__tag-item-icon" name="category-icon" />
            Category
          </span>
          {category}
        </div>
      </div>

      <div className="client-card__review">
        <span className="client-card__review-subtitle">What They Said 🤗</span>
        <p className="client-card__review-text">{review}</p>
      </div>
    </article>
  )
}

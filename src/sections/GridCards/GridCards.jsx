import './GridCards.scss'
import Icon from '@/components/Icon/index.js'
import IconCircle from '@/components/IconCircle/index.js'
import Button from '@/components/Button/index.js'
import { link } from "@/utils/link.js";

export default (props) => {
  const { items = [], id } = props

  return (
    <section
      className="grid-cards container"
      aria-labelledby="grid-cards-title"
      id={id}
    >
      <h2 className="grid-cards-title visually-hidden">
        Плитки с информацией о компании
      </h2>
      <div className="grid-cards__inner">
        {items.map((item) => (
          <div className="grid-cards__item">
            <Button className="grid-cards__arrow" href={link('/properties')}>
              <Icon className="grid-cards__arrow-icon" name="arrow" />
            </Button>
            <div className="grid-cards__content">
              <IconCircle className="grid-cards__icon" icon={item.icon} />
              <span className="grid-cards__text">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

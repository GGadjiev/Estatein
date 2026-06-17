import './EmployeeCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import { Image } from 'minista'

export default (props) => {
  const { className, name, position, image } = props

  return (
    <div className={clsx('employee-card', className)}>
      <Image
        className="employee-card__image"
        src={'/src/assets/images/' + image + '.png'}
      />
      <a
        className="employee-card__twitter-button"
        href="https://x.com"
        target="_blank"
      >
        <Icon className="employee-card__twitter-icon" name="twitter" hasFill />
      </a>
      <div className="employee-card__text-container">
        <h3 className="employee-card__name">{name}</h3>
        <p className="employee-card__position">{position}</p>
      </div>
      <div className="employee-card__say-hello">
        <span className="employee-card__say-hello-text">Say Hello 👋</span>
        <a
          className="employee-card__say-hello-button"
          href="https://x.com"
          target="_blank"
        >
          <Icon
            className="employee-card__say-hello-button-icon"
            name="field-submit"
            hasFill
          />
        </a>
      </div>
    </div>
  )
}

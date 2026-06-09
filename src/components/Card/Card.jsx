import './Card.scss'
import clsx from 'clsx'
import Button from '@/components/Button/index.js'
import IconCircle from '@/components/IconCircle/index.js'

export default (props) => {
  const {
    className,
    title,
    description,
    step,
    actions,
    stepCard,
    wideCard,
    icon,
  } = props

  if (stepCard) {
    return (
      <div className={clsx('step-card', className)}>
        <div className="step-card__step">
          <span className="step-card__step-number">Step {step}</span>
        </div>
        <div className="step-card__text card">
          <h3 className="step-card__title card__title">{title}</h3>
          <p className="step-card__description card__description">
            {description}
          </p>
        </div>
      </div>
    )
  }

  if (wideCard) {
    return (
      <div className={clsx('wide-card', className)}>
        <h3 className="wide-card__title h3-big">{title}</h3>

        {actions && (
          <Button className="wide-card__button" href="/">
            Learn More
          </Button>
        )}

        <p className="wide-card__description card__description">
          {description}
        </p>
      </div>
    )
  }

  return (
    <div className={clsx('card', className)}>
      <div className="card__header">
        {icon && <IconCircle icon={icon} className="card__icon" />}
        <h3 className="card__title">{title}</h3>
      </div>
      <p className="card__description">{description}</p>

      {actions && (
        <Button className="card__button" href="/">
          Read More
        </Button>
      )}
    </div>
  )
}

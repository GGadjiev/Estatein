import './Card.scss'
import clsx from 'clsx'
import Button from '@/components/Button/index.js'

export default (props) => {
  const { className, title, description, step, actions, stepCard } = props

  return stepCard ? (
    <div className={clsx('step-card', className)}>
      <div className='step-card__step'>
        <span className='step-card__step-number'>Step {step}</span>
      </div>
      <div className='step-card__text card'>
        <h3 className="step-card__title card__title">{title}</h3>
        <p className="step-card__description card__description">{description}</p>
      </div>
    </div>
  ) : (
    <div className={clsx('card', className)}>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>

      {actions && (
        <Button className="card__button" href="/">
          Read More
        </Button>
      )}
    </div>
  )
}

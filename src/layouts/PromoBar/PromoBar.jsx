import './PromoBar.scss'
import clsx from 'clsx'

export default () => {
  return (
    <div className={clsx('promobar', 'is-active')}>
      <p className="promobar__text">
        ✨Discover Your Dream Property with Estatein
        <a href="about" className="promobar__link">
          Learn More
        </a>
      </p>
      <button className="promobar__close">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 9.5L9.5 0.500001M0.5 0.5L9.5 9.5" stroke="white" />
        </svg>
      </button>
    </div>
  )
}

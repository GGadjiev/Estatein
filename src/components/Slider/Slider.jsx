import './Slider.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'

export default (props) => {
  const { children, className, actions } = props

  return (
    <div className={clsx('slider', className)}>
      <swiper-container
        class="slider__container"
        navigation={JSON.stringify({
          nextEl: '.slider__button_next',
          prevEl: '.slider__button_prev',
        })}
        pagination="true"
        pagination-type="fraction"
        pagination-el=".slider__pagination"
        loop="true"
        slides-per-view="1"
        slides-per-group="1"
        space-between="20"
        breakpoints={JSON.stringify({
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        })}
      >
        {children.map((slide) => (
          <swiper-slide class="slider__slide">{slide}</swiper-slide>
        ))}
      </swiper-container>

      <div className="slider__footer">
        {actions && (
          <div className="slider__actions-mobile visible-tablet">{actions}</div>
        )}

        <div className="slider__controls">
          <div className="slider__pagination"></div>

          <div className="slider__control-buttons">
            <Button
              className="slider__button slider__button_prev"
              aria-label="Previous slide"
            >
              <Icon
                className="slider__button-icon"
                name="slider-left-arrow"
                hasFill
              />
            </Button>

            <Button
              className="slider__button slider__button_next"
              aria-label="Next slide"
            >
              <Icon
                className="slider__button-icon"
                name="slider-right-arrow"
                hasFill
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

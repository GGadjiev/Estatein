import './Slider.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'

export default (props) => {
  const {
    children,
    className,
    actions,
    id,
    slidesPerViewMobile = 1,
    slidesPerViewTablet = 2,
    slidesPerViewDesktop = 3,
  } = props

  const nextButtonClass = id
    ? `slider__button_next_${id}`
    : 'slider__button_next'
  const prevButtonClass = id
    ? `slider__button_prev_${id}`
    : 'slider__button_prev'
  const paginationClass = id ? `slider__pagination_${id}` : 'slider__pagination'

  return (
    <div className={clsx('slider', className)}>
      <swiper-container
        class="slider__container"
        navigation={JSON.stringify({
          nextEl: `.${nextButtonClass}`,
          prevEl: `.${prevButtonClass}`,
        })}
        pagination="true"
        pagination-type="fraction"
        pagination-el={`.${paginationClass}`}
        loop="true"
        slides-per-view={slidesPerViewMobile}
        slides-per-group="1"
        space-between="20"
        breakpoints={JSON.stringify({
          768: {
            slidesPerView: Number(slidesPerViewTablet),
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: Number(slidesPerViewDesktop),
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
          <div className={clsx('slider__pagination', paginationClass)}></div>

          <div className="slider__control-buttons">
            <Button
              className={clsx(
                'slider__button',
                'slider__button_prev',
                prevButtonClass
              )}
              aria-label="Previous slide"
            >
              <Icon
                className="slider__button-icon"
                name="slider-left-arrow"
                hasFill
              />
            </Button>

            <Button
              className={clsx(
                'slider__button',
                'slider__button_next',
                nextButtonClass
              )}
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

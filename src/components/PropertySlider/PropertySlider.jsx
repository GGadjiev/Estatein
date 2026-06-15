import './PropertySlider.scss'
import Slider from '@/components/Slider/index.js'
import { Image } from 'minista'

export default (props) => {
  const { images, id = 'property' } = props

  return (
    <div className="property-slider" data-property-slider={id}>
      {/* Миниатюры */}
      <div className="property-slider__thumbs">
        <Slider
          id={`thumbs_${id}`}
          slidesPerViewMobile={4}
          slidesPerViewTablet={5}
          slidesPerViewLaptop={7}
          slidesPerViewDesktop={9}
          padding={0}
          desktopSpaceBetween={20}
          laptopSpaceBetween={10}
          tabletSpaceBetween={10}
        >
          {images.map((img) => (
            <div className="property-slider__thumb">
              <Image src={img} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Основной слайдер */}
      <Slider
        id={`main_${id}`}
        slidesPerViewMobile={1}
        slidesPerViewTablet={2}
        slidesPerViewLaptop={2}
        slidesPerViewDesktop={2}
        paginationType="bullets"
      >
        {images.map((img) => (
          <div className="property-slider__slide">
            <Image src={img} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

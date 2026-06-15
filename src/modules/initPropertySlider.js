// property-slider.js
export function initPropertySliders() {
  const containers = document.querySelectorAll('[data-property-slider]')

  containers.forEach((root) => {
    const swiperContainers = root.querySelectorAll(
      'swiper-container.slider__container'
    )
    const thumbsContainer = swiperContainers[0]
    const mainContainer = swiperContainers[1]

    const waitForSwiper = (el) =>
      new Promise((resolve) => {
        const check = () => {
          if (el.swiper) resolve(el.swiper)
          else requestAnimationFrame(check)
        }
        check()
      })

    Promise.all([
      waitForSwiper(thumbsContainer),
      waitForSwiper(mainContainer),
    ]).then(([thumbsSwiper, mainSwiper]) => {
      // Инициализируем модуль thumbs
      mainSwiper.thumbs.init({
        swiper: thumbsSwiper,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
      })

      // Клики по миниатюрам
      thumbsContainer.addEventListener('click', (e) => {
        const thumb = e.target.closest('.property-slider__thumb')
        if (!thumb) return

        const index = Array.from(
          thumbsContainer.querySelectorAll('.property-slider__thumb')
        ).indexOf(thumb)
        mainSwiper.slideTo(index)
      })

      // Синхронизируем активный класс — добавляем на swiper-slide
      mainSwiper.on('slideChange', () => {
        const activeIndex = mainSwiper.realIndex
        const slides = thumbsContainer.querySelectorAll('swiper-slide')
        slides.forEach((slide, i) => {
          slide.classList.toggle('swiper-slide-thumb-active', i === activeIndex)
        })
      })

      // Устанавливаем активный класс при загрузке
      const slides = thumbsContainer.querySelectorAll('swiper-slide')
      slides[0]?.classList.add('swiper-slide-thumb-active')
    })
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPropertySliders)
} else {
  initPropertySliders()
}

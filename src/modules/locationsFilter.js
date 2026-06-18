export default function () {
  const tabsContainer = document.querySelector('.js-locations-tabs')

  if (!tabsContainer) return

  const tabs = tabsContainer.querySelectorAll('.contact-locations__tab')
  const swiperEl = document.querySelector('#contact-locations swiper-container')

  let originalSlides = []
  let isInitialized = false

  const saveOriginalSlides = () => {
    if (!isInitialized && swiperEl) {
      originalSlides = Array.from(
        swiperEl.querySelectorAll('swiper-slide')
      ).map((slide) => slide.cloneNode(true))
      isInitialized = true
    }
  }

  if (swiperEl?.swiper) {
    saveOriginalSlides()
  } else {
    swiperEl?.addEventListener('swiper:init', saveOriginalSlides, {
      once: true,
    })
  }

  const filterSlides = (filterType) => {
    if (!swiperEl?.swiper || !isInitialized) return

    const swiper = swiperEl.swiper

    swiper.destroy(false, false)

    swiperEl.innerHTML = ''

    let addedCount = 0

    originalSlides.forEach((slideClone) => {
      const locationSlide = slideClone.querySelector('.js-location-slide')

      if (!locationSlide) return

      const isRegional = locationSlide.classList.contains('type-regional')
      const isInternational =
        locationSlide.classList.contains('type-international')

      let shouldShow = false

      if (filterType === 'all') {
        shouldShow = true
      } else if (filterType === 'regional' && isRegional) {
        shouldShow = true
      } else if (filterType === 'international' && isInternational) {
        shouldShow = true
      }

      if (shouldShow) {
        swiperEl.appendChild(slideClone)
        addedCount++
      }
    })

    requestAnimationFrame(() => {
      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize().then(() => {
          const newSwiper = swiperEl.swiper
          newSwiper.slideTo(0)
        })
      }
    })
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'))
      tab.classList.add('is-active')

      let filterType = 'all'

      if (tab.classList.contains('locations-regional')) {
        filterType = 'regional'
      } else if (tab.classList.contains('locations-international')) {
        filterType = 'international'
      }

      filterSlides(filterType)
    })
  })
}

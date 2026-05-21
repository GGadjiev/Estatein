import { register } from 'swiper/element/bundle';

export default function () {
  register();

  const swiperEl = document.querySelector('.properties__inner');

  if (!swiperEl) return;

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
}
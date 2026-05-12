export default function() {
  const closeButton = document.querySelector('.promobar__close')
  const promobar = document.querySelector('.promobar')

  closeButton.addEventListener('click', () => {
    promobar.classList.remove('is-active')
  })
}


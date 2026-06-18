export default function () {
  const selectors = {
    root: '[data-js-overlay-menu]',
    panel: '[data-js-overlay-menu-panel]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    backdrop: '[data-js-overlay-menu-backdrop]',
  }

  const stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  let rootElement, panelElement, burgerButtonElement, backdropElement
  let isOpen = false

  const init = () => {
    rootElement = document.querySelector(selectors.root)
    if (!rootElement) return

    panelElement = rootElement.querySelector(selectors.panel)
    burgerButtonElement = rootElement.querySelector(selectors.burgerButton)
    backdropElement = rootElement.querySelector(selectors.backdrop)

    bindEvents()
  }

  const toggleMenu = () => {
    isOpen = !isOpen

    panelElement.classList.toggle(stateClasses.isActive)
    burgerButtonElement.classList.toggle(stateClasses.isActive)
    document.documentElement.classList.toggle(stateClasses.isLock)
    document.body.classList.toggle(stateClasses.isLock) // ✅ Добавлено
  }

  const closeMenu = () => {
    if (!isOpen) return

    isOpen = false
    panelElement.classList.remove(stateClasses.isActive)
    burgerButtonElement.classList.remove(stateClasses.isActive)
    document.documentElement.classList.remove(stateClasses.isLock)
    document.body.classList.remove(stateClasses.isLock) // ✅ Добавлено
  }

  const bindEvents = () => {
    burgerButtonElement.addEventListener('click', toggleMenu)
    backdropElement.addEventListener('click', closeMenu)

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu()
    })
  }

  init()

  return { toggleMenu, closeMenu }
}

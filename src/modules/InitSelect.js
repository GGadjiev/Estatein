import Choices from 'choices.js'

export default function () {
  const runInit = () => {
    const elements = document.querySelectorAll('.js-choices-select')

    elements.forEach((el) => {
      if (el.classList.contains('choices__input')) return

      new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        allowHTML: true,
        placeholder: true,
        placeholderValue: el.dataset.placeholder,
        silent: true,
      })
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInit)
  } else {
    runInit()
  }
}

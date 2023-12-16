'use-strict'

function initAccordion() {
  const accordionTriggers = document.querySelectorAll('.accordion__trigger')

  accordionTriggers.forEach((accodionTrigger) => {
    accodionTrigger.addEventListener('click', handleAccordionClick)
  })
}

function handleAccordionClick() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true'
  const controlId = this.getAttribute('aria-controls')
  const accordionBody = document.getElementById(controlId)

  if (!isExpanded) {
    this.setAttribute('aria-expanded', 'true')
    accordionBody.removeAttribute('hidden')
    return
  }

  this.setAttribute('aria-expanded', 'false')
  accordionBody.classList.add('accordion__body--closing')
  accordionBody.addEventListener('animationend', handleHideAfterAnimation, {
    once: true,
  })
}

function handleHideAfterAnimation() {
  this.setAttribute('hidden', '')
  this.classList.remove('accordion__body--closing')
}

initAccordion()

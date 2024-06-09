const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.header__burger')
const menuItems = menu.querySelectorAll('.nav__link')
menuBtn.addEventListener('click', e => {
  e.preventDefault()

  let isActive = menu.classList.toggle('active')
  menuBtn.classList.toggle('active')
  document.body.style.overflow = isActive ? 'hidden' : null
})

menuItems.forEach(link => {
  link.addEventListener('click', e => {
    document.body.style.overflow = null
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
  })
})

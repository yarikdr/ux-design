document.addEventListener('DOMContentLoaded', () => {
  const b = document.querySelector('.burger');
  b.addEventListener('click', () => {
    b.classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('active');
  })
})
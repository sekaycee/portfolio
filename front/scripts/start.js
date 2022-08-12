const sections = document.querySelectorAll('.section')
const control = document.querySelectorAll('.navbar')
const btns = document.querySelectorAll('.nav')
const body = document.querySelectorAll('.main-content')

function PageTransitions() {
  // event handler for buttons in the navbar
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.btn-active')
      currentBtn[0].className = currentBtn[0].className.replace('btn-active', '')
      this.className += ' btn-active'
    })
  }
}

PageTransitions()
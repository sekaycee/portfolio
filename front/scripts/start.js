const sections = document.querySelectorAll('.section')
const control = document.querySelectorAll('.navbar')
const btns = document.querySelectorAll('.nav')
const body = document.querySelector('.main-content')

function PageTransitions() {
  // event handler for buttons in the navbar
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      let activeBtn = document.querySelectorAll('.btn-active')
      activeBtn[0].className = activeBtn[0].className.replace('btn-active', '').trim()
      this.className += ' btn-active'   
    })
  }

  // event handler for sections in the body
  body.addEventListener('click', e => {
    console.log(e.target)
    const id = e.target.dataset.id
    if (id) {
      // remove 'active' class from the other buttons
      control.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const el = document.getElementById(id)
      el.classList.add('active')
    }
  })
}

PageTransitions()
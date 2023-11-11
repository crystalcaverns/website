function openNavbar() {
  const navbar = document.querySelector('.navbar')
  
  if(navbar.className === 'navbar') {
    navbar.className += ' reactive'
  } else {
    navbar.className = 'navbar'
  }
}